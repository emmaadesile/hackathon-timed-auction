import styled from "styled-components";

const color = "rgb(168, 235, 18)";
const hoverColor = "rgb(184, 215, 111)";

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
  transition: all 0.2s ease-in-out;

  &:hover {
    background: white;
    color: "#a8eb12";
    border: 1px solid ${hoverColor};
    transform: translateY(-2px);
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
