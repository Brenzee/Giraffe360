import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 145px;
  height: 50px;
  border-radius: 6px;
  background: ${(props) => props.theme.giraffeYellow};
  font-size: 16px;
  font-weight: 700;
  transition: all 0.2s;
  :hover {
    background: #ecb900;
  }
`;

const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;
