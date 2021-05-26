import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
import Stepper from "../components/Stepper";
import { InputWrapper } from "../components/Shared";
import ToggleSwitch from "../components/ToggleSwitch";
import RadioButton from "../components/RadioButton";
import Button from "../components/Button";
import { handleInputChange } from "../actions";

const Branding = () => {
  const dispatch = useDispatch();
  // const [inputData, setInputData] = useState({
  //   logo: false,
  //   position: null,
  // });

  const inputData = useSelector((state) => state.inputData);
  const { logo } = inputData;

  const handleCompanyLogo = () => {
    if (logo) {
      dispatch(handleInputChange("position", null));
    }
    dispatch(handleInputChange("logo", !logo));
  };

  const handleLogoPosition = (value) => {
    dispatch(handleInputChange("position", value));
  };

  return (
    <div>
      <Stepper active="step1" title="Set your branding preferences" />
      <InputWrapper>
        <div className="input_container">
          <h3>Company Logo</h3>
          <div className="input_form">
            <ToggleSwitch onClick={handleCompanyLogo} checkedState={inputData.logo} />
          </div>
        </div>
        <div className="input_container">
          <h3>Logo position</h3>
          <div className="input_form">
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
        <div className="input_button_container">
          <Link to="/photos">
            <Button primary>Next</Button>
          </Link>
        </div>
      </InputWrapper>
    </div>
  );
};

export default Branding;
