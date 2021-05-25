import React from "react";
import styled from "styled-components";

const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "normal" : "pointer")};
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 10px;
  .radiobutton_box {
    height: 26px;
    width: 26px;
    background: ${(props) =>
      props.checked
        ? props.theme.giraffeYellow
        : props.disabled
        ? props.theme.giraffeGray
        : "white"};
    border-radius: 16px;
    border: ${(props) => (props.checked ? "none" : `3px solid ${props.theme.giraffeGray}`)};
    position: relative;
    margin-right: 10px;
    .radiobutton_check {
      position: absolute;
      top: 6px;
      left: 0;
      right: 0;
      margin: auto;
      height: 14px;
      width: 14px;
      background: white;
      border-radius: 12px;
      opacity: ${(props) => (props.checked ? "1" : "0.1")};
    }
  }

  :last-of-type {
    margin-bottom: 0;
  }
`;

const RadioButton = ({ onClick, label, checked, disabled }) => {
  return (
    <RadioButtonWrapper checked={checked} onClick={onClick} disabled={disabled}>
      <div className="radiobutton_box">
        <div className="radiobutton_check" />
      </div>
      <div>{label}</div>
    </RadioButtonWrapper>
  );
};

export default RadioButton;
