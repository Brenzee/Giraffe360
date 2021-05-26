import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleInputChange } from "../actions";

// Components
import Button from "../components/Button";
import RadioButton from "../components/RadioButton";
import { InputWrapper } from "../components/Shared";
import Stepper from "../components/Stepper";
import ToggleSwitch from "../components/ToggleSwitch";
import Meta from "../components/Meta";

const Photos = () => {
  const dispatch = useDispatch();

  const inputData = useSelector((state) => state.inputData);
  const { watermarks } = inputData;

  const handleWatermarkChange = () => {
    dispatch(handleInputChange("watermarks", !watermarks));
  };

  const handleAspectRatioChange = (value) => {
    dispatch(handleInputChange("aspectRatio", value));
  };

  return (
    <div>
      <Meta title="Photos" />
      <Stepper step1 active="step2" title="Set your photo preferences" />
      <InputWrapper>
        <div className="input_container">
          <h3>Watermarks</h3>
          <div className="input_form">
            <ToggleSwitch onClick={handleWatermarkChange} checkedState={inputData.watermarks} />
          </div>
        </div>
        <div className="input_container">
          <h3>Aspect ratio</h3>
          <div className="input_form">
            <RadioButton
              label="4:3"
              checked={inputData.aspectRatio === "4:3"}
              onClick={() => handleAspectRatioChange("4:3")}
            />
            <RadioButton
              label="3:2"
              checked={inputData.aspectRatio === "3:2"}
              onClick={() => handleAspectRatioChange("3:2")}
            />
            <RadioButton
              label="16:9"
              checked={inputData.aspectRatio === "16:9"}
              onClick={() => handleAspectRatioChange("16:9")}
            />
          </div>
        </div>
        <div className="input_button_container">
          <Link to="/branding">
            <Button>Back</Button>
          </Link>
          <Link to="/floorplans">
            <Button primary>Next</Button>
          </Link>
        </div>
      </InputWrapper>
    </div>
  );
};

export default Photos;
