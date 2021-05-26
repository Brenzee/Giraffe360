import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleInputChange } from "../actions";

// Components
import Button from "../components/Button";
import { InputWrapper } from "../components/Shared";
import Stepper from "../components/Stepper";
import ToggleSwitch from "../components/ToggleSwitch";

const Tour = () => {
  const dispatch = useDispatch();
  // const [inputData, setInputData] = useState({
  //   welcome: false,
  //   welcomeLogo: false,
  // });

  const inputData = useSelector((state) => state.inputData);
  const { welcome, welcomeLogo } = inputData;

  const handleWelcomeChange = () => {
    if (welcome) {
      dispatch(handleInputChange("welcomeLogo", false));
    }
    dispatch(handleInputChange("welcome", !welcome));
  };

  const handleWelcomeLogoChange = () => {
    if (welcome) {
      dispatch(handleInputChange("welcomeLogo", !welcomeLogo));
    }
    // setInputData({ ...inputData, welcomeLogo: inputData.welcome ? !inputData.welcomeLogo : false });
  };

  return (
    <div>
      <Stepper step1 step2 step3 active="step4" title="Set your photo preferences" />
      <InputWrapper>
        <div className="input_container">
          <h3>Welcome screen</h3>
          <div className="input_form">
            <ToggleSwitch onClick={handleWelcomeChange} checkedState={inputData.welcome} />
          </div>
        </div>
        <div className="input_container">
          <h3>Welcome screen logo</h3>
          <div className="input_form">
            <ToggleSwitch
              onClick={handleWelcomeLogoChange}
              checkedState={inputData.welcomeLogo}
              disabled={!inputData.welcome}
              popup='Can be enabled only if the "Welcome screen" is enabled'
            />
          </div>
        </div>
        <div className="input_button_container">
          <Link to="/floorplans">
            <Button>Back</Button>
          </Link>
          <Link to="/success" onClick={() => console.log(inputData)}>
            <Button primary>Submit</Button>
          </Link>
        </div>
      </InputWrapper>
    </div>
  );
};

export default Tour;
