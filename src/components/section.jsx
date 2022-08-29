import styled from "styled-components";

const StyledContainer = styled.div`
  width: 28rem;
  min-height: 30rem;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 1.5rem;
  gap: 1rem;
  overflow-y: scroll;
`;

export const Section = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
