import { useState } from "react";
import { Button, Section, Text } from "../components";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  display: flex;
  width: 350px;
  height: 8rem;
  margin-bottom: 1rem;
  padding: 0.9rem;
`;

const StyledInput = styled.input`
  padding: 0.2rem 0.5rem;
  outline: none;
  border: 1px solid black;
  width: ${({ width }) => width || "15rem"};
  height: ${({ height }) => height || "2.1rem"};
  border-radius: 1rem;
  font-size: 1.1rem;
`;

export function PasteContractInfo({ attach, account, reach }) {
  const [info, setInfo] = useState("");
  const [nftId, setNftId] = useState(0);

  const acceptToken = async () => {
    try {
      await account.tokenAccept(nftId);
      attach(info);
    } catch (e) {
      console.log(e);
      alert("Invalid token id supplied");
    }
  };

  return (
    <Section>
      <Text fontWeight={700}>Paste NFT ID</Text>
      <StyledInput
        type="number"
        onChange={(e) => setNftId(e.target.value)}
        value={nftId}
      />
      <Text fontWeight={700}>Paste Contract Info</Text>
      <StyledTextArea onChange={(e) => setInfo(e.target.value)} />

      <Button onClick={acceptToken}>Attach To Contract</Button>
    </Section>
  );
}
