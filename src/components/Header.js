import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Assets
import Giraffe360 from "../assets/Giraffe360.svg";

const Wrapper = styled.header`
  background: ${(props) => props.theme.giraffeBlue};
  color: ${(props) => props.theme.giraffeYellow};
  min-height: 80px;
  display: flex;
  align-items: center;
  a {
    display: block;
    margin: auto;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={Giraffe360} alt="Giraffe360 logo"></img>
      </Link>
    </Wrapper>
  );
};

export default Header;
