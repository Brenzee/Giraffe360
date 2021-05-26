import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  min-width: ${(props) => (props.large ? `210px` : `145px`)};
  height: 50px;
  border-radius: 6px;
  background: ${(props) => (props.primary ? props.theme.giraffeYellow : "white")};
  border: ${(props) => (!props.primary ? `2px solid ${props.theme.giraffeYellow}` : "none")};
  font-size: 16px;
  font-weight: 700;
  transition: all 0.1s;
  padding: 0 1.5rem;
  color: ${(props) => props.theme.giraffeBlue} !important;
  :hover {
    background: ${(props) => (props.primary ? `#ecb900` : `#fff1bf`)};
  }
`;

const Button = ({ children, primary, large }) => {
  return (
    <ButtonWrapper primary={primary} large={large}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
