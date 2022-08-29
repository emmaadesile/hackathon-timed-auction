import styled from "styled-components";

import { Divider, Section, Text } from "../components";
import { useBidders } from "../context";

const StyledSpan = styled.span`
  color: #a8eb12;
  overflow-wrap: break-word;
  font-style: italic;
`;

const StyledBiddersView = styled.div`
  display: flex;
  flex-direction: column;
  width: 26rem;
`;

export function AuctionInfo({ winner, nftId, contractInfo }) {
  const {
    state: { bidders },
  } = useBidders();

  return (
    <Section>
      <Text fontWeight={700}>Auction Information</Text>
      <Text>{`NFT ID: ${nftId}`}</Text>
      <Text>{`Contract info: ${contractInfo}`}</Text>
      <Divider />
      <StyledBiddersView>
        {bidders.map((bidder, index) => {
          return (
            <div style={{ width: "26rem" }} key={index}>
              <Text>
                The address <StyledSpan>{bidder.address}</StyledSpan> bid the
                amount <StyledSpan>{bidder.amount} Algo</StyledSpan>
              </Text>
              <Divider />
            </div>
          );
        })}
      </StyledBiddersView>

      <StyledBiddersView>
        {winner.address.length > 0 ? (
          <Text>
            The address <StyledSpan>{winner.address}</StyledSpan> won the bid
            with an amount of <StyledSpan>{winner.amount}</StyledSpan>
          </Text>
        ) : (
          ""
        )}
      </StyledBiddersView>
    </Section>
  );
}
