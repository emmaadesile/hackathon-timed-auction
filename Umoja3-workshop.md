# Workshop: NFT TIMED AUCTION

This workshop goes through Team 38 bounty hack submission for Decentralized Umoja 3 Hackathon

This workshop assumes you have Reach installed and completed the [RPS tutorial](https://docs.reach.sh/tut/rps/#tut). To confirm that you have Reach installed, run this from your root directory:
```bash
$ ./reach version
```

I'll be using the directory located here `~/reach/nft-timed-auction:` but you can create yours in any directory.
```bash
$ mkdir -p ~/reach/nft-timed-auction && cd ~/reach/nft-timed-auction
```

We get started by initializing a new Reach project
```bash
$ ../reach/init
```

## Scaffolding and Setup
We'll be building an NFT auction app. Below is a list of the operations that should be possible on the app.

- A creator can Create an NFT with parameters `minimumBidAmount` and `deadline`
- A bidder place a bid for the NFT by paying a fee higher than the `minimumBidAmount`
- Show a list of bids and addresses
- Show the winner of the bid at the end

We begin by creating the `index.rsh` file in the directory created above. Lets  define the `Creator` (auction creator) and `Bidder` interfaces below.

```javascript
    const [isOutcome, BID_IS_SUCCESSFUL, BID_IS_TOO_LOW, NO_BIDS_RECORDED, BIDS_RECORDED] = makeEnum(4);
    const [isWinning, WINNING, LOSING] = makeEnum(2);
    
    const Creator = Participant('Creator', {
      createBid: Fun([], Tuple(Token, UInt, UInt)),
      auctionIsReady: Fun([], Null),
      seeOutcome: Fun([Address, UInt], Null),
      seeWinner: Fun([Address, UInt, UInt], Null),
    });
  
    const Bidder = API('Bidder', {
      makeBid: Fun([UInt], Tuple(Address, UInt, UInt)),
      seeBids: Fun([], Tuple(Address, UInt, UInt)),
    });

    // other programs
    init();
```

The `enums` are used in the course of running the program

**Creator interface**

The Creator interface has the following.
- `createBid` : creates the NFT on the Algorand Blockchain
- `actionIsReady`: tells us if the auction is ready or not
- `setOutcome`: See the outcome of the auction
- `seeWinner`: See the winner at the end of the auction

**Bidder interface**
- `makeBid`: make a bid for the auction
- `seeBids`: see the addresses that have bided so far

We will also define the Observer interface. Observers do not participate in the auction.

```javascript
// .. Creator interface

 const Observer = Participant('Observer', {
    seeOutcome: Fun([Address, UInt], Null),
    seeWinner: Fun([Address, UInt, UInt], Null),
  });

// .. Bider interface
```
As shown above, the observer can only see the outcome and winner of the auction.

## Running the Auction

We declassify the createBid function for the Creator and get the `NFT_ID`, `DEADLINE` and the `MINIMUM_BID`.

```javascript
  // ..
  Creator.only(() => {
    const [ NFT_ID, DEADLINE, MINIMUM_BID ] = declassify(interact.createBid());
  })
```

Next, we publish the contract, and create a `bids` variable that keeps track of the all bids- `Address` and `bidAmount`) submitted for the NFT. We also call the `auctionIsReady` function and assert that the `Creator` has the NFT in their wallet

```javascript
    // ...
    Creator.only(() => {
      const [ NFT_ID, DEADLINE, MINIMUM_BID ] = declassify(interact.createBid());
    })
  
    Creator.publish(NFT_ID, DEADLINE, MINIMUM_BID).timeout(false);
    commit();
  
    Creator.pay([[1, NFT_ID]]);
  
    const bids = new Map(Address, UInt);
  
    Creator.interact.auctionIsReady();
  
    assert(balance(NFT_ID) == 1, "No NFT found in contract!!!");
```

## Auction

```javascript
// ....
const [timeLeft, continueGoing] = makeDeadline(DEADLINE);
```

The `makeDeadline` function takes the `DEADLINE` and returns `timeLeft` and `continueGoing`  which we're going to use below.

```javascript
1  | const [currentBidPrice, foreRunner, noBidYet] = parallelReduce([ MINIMUM_BID, Creator, true ])
2  |  .invariant(balance(NFT_ID) == 1)
3  |    .while(continueGoing())
4  |    .api_(Bidder.makeBid, (bidAmount) => {
5  |     check(this != Creator, "The creator of the bid cannot make another bid")
6  |     return [bidAmount, (resolve) => {
7  |       if (bidAmount > currentBidPrice) {
8  |         bids[this] = bids[this].match({
9  |           Some: (value) => {
10 |             return value + bidAmount; 
11 |           },
12 |           None: () => {
13 |             return bidAmount;
14 |           }
15 |         });
16 |         const bidder = this;
17 |         each([Creator, Observer], () => {
18 |           interact.seeOutcome(bidder, bidAmount)
19 |         })
20 |         if (!noBidYet) {
21 |           transfer(currentBidPrice).to(foreRunner);
22 |         }
23 |         resolve([this, bidAmount, BID_IS_SUCCESSFUL]);
24 |         return [bidAmount, bidder, false];
25 |       }
26 |       else {
27 |         resolve([foreRunner, currentBidPrice, BID_IS_TOO_LOW]);
28 |         return [currentBidPrice, foreRunner, noBidYet];
29 |       }
30 |     }]
31 |   })
```

Let's break down what's going on in the code:

- Lines 2 through 4 ensures that bidders can makes bids as long as the `NFT_ID` is 1 and `continueGoing()` is true
- Line 4 prevents the creator of the NFT from participating in the auction
- Line 7 through 16 checks if the `bidAmount` is greater than the `currentBidPrice` and updates the bids object
- Lines 17 through 19 ensures that both the creator and observer can see all bids (`bidder` and `bidAmount`)
- Lines 20 through 22 transfers the currentBidPrice to the `currentBidder`
- Lines 26 through 28 returns the `currentBidPrice`, `foreRunner`, `noBidYet` if the bidAmount is less than the `currentBidPrice`


## See Bids

We now define call the `seeBids` function on the `Bidder` interface
```javascript
//...
1  |.api_(Bidder.seeBids, () => {
2  |  check(isSome(bids[this]), "Unauthorized! You have not made any bid in this auction.")
3  |
4  |  return [0, (resolve) => {
5  |    const result = this == foreRunner? WINNING : LOSING;
6  |    resolve([foreRunner, currentBidPrice, result]);
7  |
6  |    return [currentBidPrice, foreRunner, noBidYet]
7  |  }]
8  | })
9  |.timeout(timeLeft(), () => {
10 |    Creator.publish();
11 |    return [currentBidPrice, foreRunner, noBidYet];
12 | });
```

- Lines 1 through 2 checks that only bidders can see the bids in the auction
- Lines 4 through returns the winner of the bid
- Lines 9 through 11 times out and end the auction if `timeLeft()` is false

## End of auction
At the end of the auction, the NFT is transferred to the highest bidder and the balance (token paid by bidder) is transferred to the Creator.
If there are no bids, we simply transfer the NFT back to the creator.

Piecing everything together, our backend finally looks like this

```javascript
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
```

## Frontend
The contract is complete but we need a way to interact with it on the frontend. We are going to use React, UI library. Here's is the final code code for the frontend.

```javascript
import { useState } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";

import * as backend from "./reach/build/index.main.mjs";
import { views } from "./utils";
import { Loader } from "./components";
import {
  ConnectAccount,
  SelectRole,
  SetBidInfo,
  AuctionInfo,
  MakeBid,
  PasteContractInfo,
} from "./pages";
import styled from "styled-components";
import { background } from "./assets/images/background";
import { useBidders } from "./context";
import "./App.css";

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: ${background};
  background-color: center;
  background-size: contain;
  width: 100vw;
  overflow: hidden;
`;

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);

const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const {
    state: { bidders },
    dispatch,
  } = useBidders();

  const [account, setAccount] = useState({});
  const [contract, setContract] = useState({});
  const [view, setView] = useState(views.CONNECT_ACCOUNT);

  const [nftId, setNftId] = useState(0);
  const [minimumBid, setMinimumBid] = useState(0);
  const [timeout, setTimeout] = useState(0);

  const [contractInfo, setContractInfo] = useState();

  const [winner, setWinner] = useState({ address: "", amount: 0 });
  const [bid, setBid] = useState(0);

  // This is for the bidders
  const submitBid = async () => {
    setView(views.DEPLOYING);
    try {
      const [lastBidder, lastBid] = await contract.apis.Bidder.makeBid(
        reach.parseCurrency(bid)
      );
      alert(
        `You out-bid ${lastBidder} who bid ${reach.formatCurrency(lastBid)}.`
      );
    } catch (e) {
      alert(`An error occurred while submitting the bid.`);
    }
    setView(views.MAKE_BID);
  };

  // These are for the creator of the auction
  const interact = {
    createBid: async () => {
      try {
        const theNFT = await reach.launchToken(account, "gorilla", "NFT", {
          supply: 1,
        });
        setNftId(theNFT.id, 4);

        const params = [theNFT.id, timeout, reach.parseCurrency(minimumBid)];

        return params;
      } 
      catch (error) {
        console.log("An error occurred: ", error);
      }
    },
    seeWinner: (address, amount, result) => {
      if (parseInt(result) === 2) {
        console.log(`Auctioneer saw that no bidders made any bid during the auction`);
      }
      else {
        console.log(
          `Auctioneer saw that ${reach.formatAddress(
            address
          )} won with ${reach.formatCurrency(amount)}`
        );
      }
      
      setWinner({
        address,
        amount: fmt(amount),
      });
    },
    seeOutcome: (who, amt) => {
      dispatch({
        type: "addBidder",
        bidder: { address: who, amount: fmt(amt) },
      });
      console.log(
        `Auctioneer saw that ${reach.formatAddress(
          who
        )} bid ${reach.formatCurrency(amt)}.`
      );
    },
    auctionIsReady: () => {
      console.log("Auction is ready");
    },
  };

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = "";
      try {
        const account = mnemonic
          ? await reach.newAccountFromMnemonic(secret)
          : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = "success";
      } catch (error) {
        result = "failed";
      }
      return result;
    },

    deploy: async () => {
      const contract = account.contract(backend);
      backend.Creator(contract, interact);
      setView(views.DEPLOYING);
      const ctcInfo = JSON.stringify(await contract.getInfo(), null, 2);
      setContractInfo(ctcInfo);
      setView(views.AUCTION_INFO);
    },

    attach: (contractInfo) => {
      const contract = account.contract(backend, JSON.parse(contractInfo));
      setContract(contract);
      setView(views.MAKE_BID);
    },
  };

  return (
    <StyledApp>
      {view === views.CONNECT_ACCOUNT && (
        <ConnectAccount connect={reachFunctions.connect} />
      )}

      {view === views.DEPLOY_OR_ATTACH && (
        <SelectRole
          deploy={() => setView(views.SET_BID_INFO)}
          attach={() => setView(views.PASTE_CONTRACT_INFO)}
        />
      )}

      {(view === views.DEPLOYING || view === views.ATTACHING) && <Loader />}

      {view === views.SET_BID_INFO && (
        <SetBidInfo
          timeout={timeout}
          minimumBid={minimumBid}
          handleTimeoutChange={(val) => setTimeout(val)}
          handleMinimumBidChange={(val) => setMinimumBid(val)}
          handleContinue={reachFunctions.deploy}
        />
      )}

      {view === views.AUCTION_INFO && (
        <AuctionInfo
          bidders={bidders}
          winner={winner}
          nftId={nftId}
          contractInfo={contractInfo}
        />
      )}

      {view === views.MAKE_BID && (
        <MakeBid
          bid={bid}
          onChangeOfBid={(val) => setBid(val)}
          submitBid={submitBid}
        />
      )}

      {view === views.PASTE_CONTRACT_INFO && (
        <PasteContractInfo
          attach={reachFunctions.attach}
          account={account}
          reach={reach}
        />
      )}
    </StyledApp>
  );
}

export default App;
```

## We made it
Congratulations on making it to the end of the workshop. You successfully build an NFT auction app on the Blockchain. With this foundational knowledge, you have the skills to build more robust applications on the Blockchain. You can find the complete code for the program [here](https://github.com/emmaadesile/hackathon-timed-auction)

If you found this helpful, please let us know on our [Discord](https://discord.gg/AZsgcXu) channel.