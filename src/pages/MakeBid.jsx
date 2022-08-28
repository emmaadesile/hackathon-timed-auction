import { Button, Section, Text } from "../components";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.2rem 0.5rem;
  outline: none;
  border: 1px solid black;
  width: ${({ width }) => width || "15rem"};
  height: ${({ height }) => height || "2.1rem"};
  border-radius: 1rem;
  font-size: 1.1rem;
`;

export function MakeBid({ bid, onChangeOfBid, submitBid }) {
  return (
    <Section>
      <Text size="1.2rem" fontWeight="700">
        Bid
      </Text>
      <StyledInput
        type="number"
        onChange={(e) => onChangeOfBid(e.target.value)}
        value={bid}
      />
      <Button onClick={submitBid} width="15rem">
        Submit Bid
      </Button>
    </Section>
  );
}
