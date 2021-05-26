import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Branding from "./pages/Branding";
import Photos from "./pages/Photos";
import Floorplans from "./pages/Floorplans";
import Tour from "./pages/Tour";
import Success from "./pages/Success";

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
        <Route path="/photos" component={Photos} />
        <Route path="/floorplans" component={Floorplans} />
        <Route path="/tour" component={Tour} />
        <Route path="/success" component={Success} />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
