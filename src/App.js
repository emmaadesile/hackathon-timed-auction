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
      const [lastBidder, lastBid] = await contract.apis.Bidder.bid(
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
    initiateBid: async () => {
      try {
        const theNFT = await reach.launchToken(account, "gorilla", "NFT", {
          supply: 1,
        });
        setNftId(theNFT.id, 4);

        return {
          nftId: theNFT.id,
          minimumBid: reach.parseCurrency(minimumBid),
          Timeout: timeout,
        };
      } catch (error) {
        console.log("An error occurred: ", error);
      }
    },
    seeOutcome: (address, amount) => {
      console.log(
        `Auctioneer saw that ${reach.formatAddress(
          address
        )} won with ${reach.formatCurrency(amount)}`
      );
      setWinner({
        address,
        amount: fmt(amount),
      });
    },
    seeBid: (who, amt) => {
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
    auctionReady: () => {
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
      backend.Auctiooner(contract, interact);
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
