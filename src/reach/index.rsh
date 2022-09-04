/* eslint-disable no-undef */
'reach 0.1';

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
  
    const [isOutcome, BID_IS_SUCCESSFUL, BID_IS_TOO_LOW, NO_BIDS_RECORDED, BIDS_RECORDED] = makeEnum(4);
    const [isWinning, WINNING, LOSING] = makeEnum(2);
    
    const Creator = Participant('Creator', {
      createBid: Fun([], Tuple(Token, UInt, UInt)),
      auctionIsReady: Fun([], Null),
      seeOutcome: Fun([Address, UInt], Null),
      seeWinner: Fun([Address, UInt, UInt], Null),
    });
  
    const Observer = Participant('Observer', {
      seeOutcome: Fun([Address, UInt], Null),
      seeWinner: Fun([Address, UInt, UInt], Null),
    });
  
    const Bidder = API('Bidder', {
      makeBid: Fun([UInt], Tuple(Address, UInt, UInt)),
      seeBids: Fun([], Tuple(Address, UInt, UInt)),
    });
  
    const seeWinner = (address, amount, outcome) => {
      each([Observer, Creator], () => {
        interact.seeWinner(address, amount, outcome);
      })
    }
  
    init();
  
    Creator.only(() => {
      const [ NFT_ID, DEADLINE, MINIMUM_BID ] = declassify(interact.createBid());
    })
  
    Creator.publish(NFT_ID, DEADLINE, MINIMUM_BID).timeout(false);
    commit();
  
    Creator.pay([[1, NFT_ID]]);
  
    const bids = new Map(Address, UInt);
  
    Creator.interact.auctionIsReady();
  
    assert(balance(NFT_ID) == 1, "No NFT found in contract!!!");
  
    const [timeLeft, continueGoing] = makeDeadline(DEADLINE);
  
    const [currentBidPrice, foreRunner, noBidYet] = parallelReduce([ MINIMUM_BID, Creator, true ])
      .invariant(balance(NFT_ID) == 1)
      .while(continueGoing())
      .api_(Bidder.makeBid, (bidAmount) => {
        check(this != Creator, "The creator of the bid cannot make another bid")
  
        return [bidAmount, (resolve) => {
          if (bidAmount > currentBidPrice) {
            bids[this] = bids[this].match({
              Some: (value) => {
                return value + bidAmount; 
              },
              None: () => {
                return bidAmount;
              }
            });
  
            const bidder = this;
  
            each([Creator, Observer], () => {
              interact.seeOutcome(bidder, bidAmount)
            })
  
            if (!noBidYet) {
              transfer(currentBidPrice).to(foreRunner);
            }
  
            resolve([this, bidAmount, BID_IS_SUCCESSFUL]);
  
            return [bidAmount, bidder, false];
          }
          else {
            resolve([foreRunner, currentBidPrice, BID_IS_TOO_LOW]);
  
            return [currentBidPrice, foreRunner, noBidYet];
          }
        }]
      })
      .api_(Bidder.seeBids, () => {
        check(isSome(bids[this]), "Unauthorized! You have not made any bid in this auction.")
  
        return [0, (resolve) => {
          const result = this == foreRunner? WINNING : LOSING;
          resolve([foreRunner, currentBidPrice, result]);
  
          return [currentBidPrice, foreRunner, noBidYet]
        }]
      })
      .timeout(timeLeft(), () => {
          Creator.publish();
          return [currentBidPrice, foreRunner, noBidYet];
      });
  
      transfer(balance(NFT_ID), NFT_ID).to(foreRunner);
  
      transfer(balance()).to(Creator)
  
      if (foreRunner == Creator) {
        seeWinner(foreRunner, currentBidPrice, NO_BIDS_RECORDED);
      }
      else {
        seeWinner(foreRunner, currentBidPrice, BIDS_RECORDED);
      }
  
      commit();
  
      exit();
  });