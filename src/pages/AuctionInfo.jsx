import styled from "styled-components";

import { Divider, Section, Text } from "../components";

const StyledSpan = styled.span`
  color: #a8eb12;
  overflow-wrap: break-word;
  font-style: italic;
`;

export function AuctionInfo({ bidders, winner, nftId, contractInfo }) {
  return (
    <Section>
      <Text fontWeight={700}>Auction Information</Text>
      <Text>{`NFT ID: ${nftId}`}</Text>
      <Text>{`Contract info: ${contractInfo}`}</Text>
      <Divider />
      {bidders.map((bidder) => {
        return (
          <div style={{ width: "26rem" }}>
            <Text>
              The address <StyledSpan>{bidder.address}</StyledSpan> bid the
              amount <StyledSpan>{bidder.amount} Algo</StyledSpan>
            </Text>
            <Divider />
          </div>
        );
      })}

      <div style={{ width: "26rem" }}>
        {winner.address.length > 0 ? (
          <Text>
            The address <StyledSpan>{winner.address}</StyledSpan> won the bid
            with an amount of <StyledSpan>{winner.amount}</StyledSpan>
          </Text>
        ) : (
          ""
        )}
      </div>
    </Section>
  );
}
