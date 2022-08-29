import * as React from "react";

const BiddersContext = React.createContext([]);

const biddersReducer = (state, action) => {
  switch (action.type) {
    case "addBidder":
      return { bidders: [...state.bidders, action.bidder] };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const BiddersProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(biddersReducer, { bidders: [] });
  const value = { state, dispatch };

  return (
    <BiddersContext.Provider value={value}>{children}</BiddersContext.Provider>
  );
};

const useBidders = () => {
  const context = React.useContext(BiddersContext, { bidders: [] });
  if (context === undefined) {
    throw new Error("useBidders must be used within a BiddersProvider");
  }

  return context;
};

export { BiddersProvider, useBidders };
