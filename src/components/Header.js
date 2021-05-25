import React from "react";
import styled from "styled-components";

// Assets
import Giraffe360 from "../assets/Giraffe360.svg";

const Wrapper = styled.header`
  background: ${(props) => props.theme.giraffeBlue};
  color: ${(props) => props.theme.giraffeYellow};
  min-height: 80px;
  display: flex;
  align-items: center;
  img {
    display: block;
    margin: auto;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <img src={Giraffe360} alt="Giraffe360 logo"></img>
    </Wrapper>
  );
};

export default Header;
