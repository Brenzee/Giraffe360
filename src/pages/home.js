import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Meta from "../components/Meta";
import { breakPoints } from "../theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  text-align: center;
  padding: 0 1rem;
  .home_title {
    font-size: 50px;
    font-weight: 700;
    max-width: 700px;
    margin-bottom: 3.5rem;
    span {
      color: ${(props) => props.theme.giraffeYellow};
    }
  }
  .home_description {
    margin-bottom: 3.5rem;
    .home_subtitle {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .home_button {
    background: ${(props) => props.theme.giraffeYellow};
    width: 210px;
    padding: 0.75rem 0;
    border-radius: 6px;
    font-weight: 700;
    transition: all 0.2s;
    font-size: 16px;
    :hover {
      background: #ecb900;
    }
  }
  @media (max-width: ${breakPoints.sm}px) {
    min-height: 60vh;
    .home_title {
      font-size: 28px;
      line-height: normal;
      margin-bottom: 2rem;
    }
    .home_description {
      .home_subtitle {
        font-size: 16px;
      }
    }
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Meta title="Welcome" />
      <h1 className="home_title">
        Welcome to your <span>Giraffe360</span> account.
      </h1>
      <div className="home_description">
        <h4 className="home_subtitle">Set up your project settings.</h4>
        <h4 className="home_subtitle">This will take just a few minutes.</h4>
      </div>
      <Link to="/branding">
        <button className="home_button">Start</button>
      </Link>
    </Wrapper>
  );
};

export default Home;
