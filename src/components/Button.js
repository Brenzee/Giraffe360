import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 145px;
  height: 50px;
  border-radius: 6px;
  background: ${(props) => (props.primary ? props.theme.giraffeYellow : "white")};
  border: ${(props) => (!props.primary ? `2px solid ${props.theme.giraffeYellow}` : "none")};
  font-size: 16px;
  font-weight: 700;
  transition: all 0.1s;
  :hover {
    background: ${(props) => (props.primary ? `#ecb900` : `#fff1bf`)};
  }
`;

const Button = ({ children, primary }) => {
  return <ButtonWrapper primary={primary}>{children}</ButtonWrapper>;
};

export default Button;
