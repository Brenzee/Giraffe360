import React from "react";
import styled from "styled-components";

import Button from "../components/Button";
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
`;

const Success = () => {
  return (
    <Wrapper>
      <div className="success_text">
        <h2>Congratulations!</h2>
        <h2>Your preferences are set.</h2>
      </div>
      <Button primary large>
        Go to dashboard
      </Button>
    </Wrapper>
  );
};

export default Success;
