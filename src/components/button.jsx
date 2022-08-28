import styled from "styled-components";

const color = "#a8eb12";

const StyledButton = styled.button`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  background: ${color};
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: ${({ transform }) => transform || "uppercase"};
  margin-top: ${({ mt }) => mt || "0px"};
  border: 1px solid ${color};

  &:hover {
    background: white;
    color: "#a8eb12";
    border: 1px solid ${color};
  }
`;

export const Button = ({
  background,
  transform,
  onClick,
  width,
  mt,
  children,
}) => (
  <StyledButton
    background={background}
    transform={transform}
    width={width}
    onClick={onClick}
    mt={mt}
  >
    {children}
  </StyledButton>
);
