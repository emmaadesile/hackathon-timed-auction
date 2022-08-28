import styled from "styled-components";
import { Button, Section, Text } from "../components";

const StyledInput = styled.input`
  padding: 0.2rem 0.5rem;
  outline: none;
  border: 1px solid black;
  width: ${({ width }) => width || "15rem"};
  height: ${({ height }) => height || "2.1rem"};
  border-radius: 1rem;
  font-size: 1.1rem;
`;

export function SetBidInfo({
  timeout,
  minimumBid,
  handleTimeoutChange,
  handleMinimumBidChange,
  handleContinue,
}) {
  return (
    <Section>
      <Text size="1.2rem" fontWeight="700">Bidding Parameters</Text>
      <div>
        <Text>Duration (sec)</Text>
        <StyledInput
          type="number"
          onChange={(e) => handleTimeoutChange(e.target.value)}
          value={timeout}
        />
      </div>
      <div>
        <Text>Minimum Bid (Algo)</Text>
        <StyledInput
          type={"number"}
          onChange={(e) => handleMinimumBidChange(e.target.value)}
          value={minimumBid}
        />
      </div>
      <Button width="16rem" mt="2rem" onClick={handleContinue}>
        Start Auction
      </Button>
    </Section>
  );
}
