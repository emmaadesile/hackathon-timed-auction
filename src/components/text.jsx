import styled from "styled-components";

export const StyledText = styled.p`
  font-size: ${({ size }) => size || "1rem"};
  color: ${({ color }) => color || "white"};
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
`;

export const Text = ({ color, size, fontWeight, children }) => (
  <StyledText size={size} color={color} fontWeight={fontWeight}>
    {children}
  </StyledText>
);
