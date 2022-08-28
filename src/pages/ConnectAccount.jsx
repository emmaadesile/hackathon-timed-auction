import { useState } from "react";
import styled from "styled-components";

import { Button, Divider, Section, Text } from "../components";

const StyledH2 = styled.h2`
  color: white;
  text-align: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
`;

const StyledTextArea = styled.textarea`
  display: flex;
  width: 350px;
  height: 8rem;
  margin-bottom: 1rem;
  padding: 0.9rem;
`;

export function ConnectAccount({ connect }) {
  const [key, setKey] = useState("");
  return (
    <Section>
      <div>
        <StyledH2>NFT AUCTION</StyledH2>
        <Button onClick={() => connect(key)}>Connect With MyAlgoConnect</Button>
      </div>

      <Text>OR</Text>
      <Divider />
      <div>
        <StyledWrapper>
          <StyledTextArea
            onChange={(e) => setKey(e.target.value.trim())}
            placeholder="Paste your mnemonic phrase"
          />
          <Button onClick={() => connect(key, true)}>
            Connect With Mnemonic Key
          </Button>
        </StyledWrapper>
      </div>
    </Section>
  );
}
