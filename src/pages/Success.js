import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import Meta from "../components/Meta";
import { breakPoints } from "../theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  text-align: center;
  padding: 0 1rem;

  .success_text {
    margin-bottom: 3rem;
    h2 {
      font-size: 50px;
      @media (max-width: ${breakPoints.md}px) {
        font-size: 28px;
      }
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const Success = () => {
  const inputData = useSelector((state) => state.inputData);
  console.log(inputData);

  return (
    <Wrapper>
      <Meta title="Congratulations!" />
      <div className="success_text">
        <h2>Congratulations!</h2>
        <h2>Your preferences are set.</h2>
      </div>
      <Button primary large>
        Go to dashboard
      </Button>
      <p>(All of the data is being console logged)</p>
    </Wrapper>
  );
};

export default Success;
