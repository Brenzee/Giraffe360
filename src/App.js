import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Branding from "./pages/Branding";

const Wrapper = styled.div`
  min-height: 100vh;
  color: ${(props) => props.theme.giraffeBlue};
`;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/branding" component={Branding} />
        <Route path="/photos" component={Home} />
        <Route path="/floorplans" component={Home} />
        <Route path="/tour" component={Home} />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
