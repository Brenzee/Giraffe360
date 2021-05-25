import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import RadioButton from "../components/RadioButton";
import Stepper from "../components/Stepper";
import ToggleSwitch from "../components/ToggleSwitch";

const Wrapper = styled.div`
  max-width: 400px;
  margin: 4rem auto 0;
  .branding_input_container {
    display: flex;
    justify-content: space-between;
    padding: 2rem 4rem 2rem 0;
    border-bottom: 1px solid ${(props) => props.theme.giraffeGray};
    .branding_input_form {
      display: flex;
      flex-direction: column;
    }
  }
  .branding_button {
    display: flex;
    justify-content: flex-end;
    margin-top: 4rem;
  }
`;

const Branding = () => {
  const [inputData, setInputData] = useState({
    logo: false,
    position: null,
  });

  const handleCompanyLogo = () => {
    setInputData((prevValue) => ({
      logo: !prevValue.logo,
      position: prevValue.logo ? null : prevValue.position,
    }));
  };

  const handleLogoPosition = (value) => {
    setInputData((prevValue) => ({
      ...prevValue,
      position: prevValue.logo ? value : false,
    }));
  };

  return (
    <div>
      <Stepper active="step1" title="Set your branding preferences" />
      <Wrapper>
        <div className="branding_input_container">
          <h3>Company Logo</h3>
          <ToggleSwitch onClick={handleCompanyLogo} checkedState={inputData.logo} />
        </div>
        <div className="branding_input_container">
          <h3>Logo position</h3>
          <div className="branding_input_form">
            <RadioButton
              label="Top Left"
              disabled={!inputData.logo}
              checked={inputData.position === "Top Left"}
              onClick={() => handleLogoPosition("Top Left")}
            />
            <RadioButton
              label="Center"
              disabled={!inputData.logo}
              checked={inputData.position === "Center"}
              onClick={() => handleLogoPosition("Center")}
            />
          </div>
        </div>
        <div className="branding_button">
          <Button>Next</Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Branding;
