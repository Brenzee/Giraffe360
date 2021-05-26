import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
import Button from "../components/Button";
import RadioButton from "../components/RadioButton";
import { InputWrapper } from "../components/Shared";
import Stepper from "../components/Stepper";
import ToggleSwitch from "../components/ToggleSwitch";
import { handleInputChange } from "../actions";

const Floorplans = () => {
  const dispatch = useDispatch();

  const inputData = useSelector((state) => state.inputData);
  const { totalArea } = inputData;

  const handleTotalAreaChange = () => {
    dispatch(handleInputChange("totalArea", !totalArea));
  };

  const handleColorChange = (value) => {
    dispatch(handleInputChange("color", value));
  };

  return (
    <div>
      <Stepper step1 step2 active="step3" title="Set your floorplan preferences" />
      <InputWrapper>
        <div className="input_container">
          <h3>Total area</h3>
          <div className="input_form">
            <ToggleSwitch onClick={handleTotalAreaChange} checkedState={inputData.totalArea} />
          </div>
        </div>
        <div className="input_container">
          <h3>Color</h3>
          <div className="input_form">
            <RadioButton
              label="Colored"
              checked={inputData.color === "Colored"}
              onClick={() => handleColorChange("Colored")}
            />
            <RadioButton
              label="Black & White"
              checked={inputData.color === "Black & White"}
              onClick={() => handleColorChange("Black & White")}
            />
          </div>
        </div>
        <div className="input_button_container">
          <Link to="/photos">
            <Button>Back</Button>
          </Link>
          <Link to="/tour">
            <Button primary>Next</Button>
          </Link>
        </div>
      </InputWrapper>
    </div>
  );
};

export default Floorplans;
