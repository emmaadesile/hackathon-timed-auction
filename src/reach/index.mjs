import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(100);

const fmt = (x) => stdlib.formatCurrency(x, 4);

console.log(`Creating test account for Creator`);

const accountCreator = await stdlib.newTestAccount(startingBalance);

console.log("Creating test NFT");
const NFT = await stdlib.launchToken(accountCreator, "real estate", "RES", {
  supply: 1,
});
console.log("NFT created successfully", NFT);
const NFT_ID = NFT.id;
const MINIMUM_BID = stdlib.parseCurrency(2);
const DEADLINE = 20;

const params = [NFT_ID, DEADLINE, MINIMUM_BID];

let done = false;
let bidders = [];

let intervals = {
  Alice: 0,
  Bob: 0,
  Claire: 0,
};

const startBidders = async () => {
  let bid = MINIMUM_BID;

  const runBidder = async (who) => {
    const inc = stdlib.parseCurrency(Math.random() * 10);
    bid = bid.add(inc);

    const acc = await stdlib.newTestAccount(startingBalance);
    acc.setDebugLabel(who);
    await acc.tokenAccept(NFT_ID);
    bidders.push([who, acc]);
    const ctc = acc.contract(backend, ctcAuct.getInfo());
    const getBal = async () =>
      stdlib.formatCurrency(await stdlib.balanceOf(acc));

    console.log(`${who} decides to bid ${stdlib.formatCurrency(bid)}.`);
    console.log(`${who} balance before is ${await getBal()}`);
    try {
      const [lastBidder, lastBid, bidStatus] = await ctc.apis.Bidder.makeBid(
        bid
      );

      if (bidStatus == 0) {
        console.log(
          `${who} out bid ${lastBidder} who bid ${stdlib.formatCurrency(
            lastBid
          )}.`
        );

        if (intervals[who] === 0) {
          intervals[who] = setInterval(async () => {
            try {
              const [foreRunner, amount, status] =
                await ctc.apis.Bidder.seeBids();

              if (status == 1) {
                console.log(
                  `${who} sees that ${foreRunner} is currently winning with a bid of ${fmt(
                    amount
                  )}`
                );
              }
            } catch (err) {
              console.log(
                `${who} tried seeing the bids but could not because the bid has ended.`
              );
              clearInterval(intervals[who]);
            }
          }, 5000);
        }
      } else {
        console.log(
          `${who} made a bid that is not greater than the current minimum bid of ${fmt(
            lastBid
          )}`
        );
      }
    } catch (e) {
      console.log(`${who} failed to bid, because the auction is over`);
    }
    console.log(`${who} balance after is ${await getBal()}`);
  };

  await runBidder("Alice");
  await runBidder("Bob");
  await runBidder("Claire");

  while (!done) {
    await stdlib.wait(1);
  }
};

const ctcAuct = accountCreator.contract(backend);

console.log("Starting backends...");
await backend.Creator(ctcAuct, {
  createBid: () => {
    console.log(`Auctioneer sets parameters of sale:`, params);
    return params;
  },
  auctionIsReady: () => {
    setTimeout(() => {
      startBidders();
    }, 10000);
    console.log("Bid has started");
  },
  seeOutcome: (who, amt) => {
    console.log(
      `Auctioneer saw that ${stdlib.formatAddress(
        who
      )} bid ${stdlib.formatCurrency(amt)}.`
    );
  },
  seeWinner: (winner, amt, result) => {
    if (2 == parseInt(result)) {
      console.log(
        `Auctioneer saw that no bidders made any bid during the auction`
      );
    } else {
      console.log(
        `Auctioneer saw that ${stdlib.formatAddress(
          winner
        )} won with ${stdlib.formatCurrency(amt)}`
      );
    }
  },
});

for (const [who, acc] of bidders) {
  const [amt, amtNFT] = await stdlib.balancesOf(acc, [null, NFT_ID]);
  console.log(
    `${who} has ${stdlib.formatCurrency(amt)} ${
      stdlib.standardUnit
    } and ${amtNFT} of the NFT`
  );
}
done = true;
