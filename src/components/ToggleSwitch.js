import React from "react";
import styled from "styled-components";

const ToggleSwitchWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  font-weight: 600;
  font-size: 12px;
  width: 75px;
  height: 32px;
  background: ${(props) => (props.checked ? props.theme.giraffeYellow : props.theme.giraffeGray)};
  border-radius: 16px;
  position: relative;
  transition: all 0.3s;
  .toggle_switch_button {
    position: absolute;
    background: white;
    top: 4px;
    left: ${(props) => (props.checked ? `47px` : `4px`)};
    height: 24px;
    width: 24px;
    border-radius: 12px;
    transition: all 0.3s;
  }
  .toggle_switch_label1 {
    opacity: ${(props) => (props.checked ? "1" : `0`)};
  }
  .toggle_switch_label2 {
    opacity: ${(props) => (!props.checked ? "1" : `0`)};
  }
`;

const ToggleSwitch = ({ onClick, checkedState }) => {
  return (
    <ToggleSwitchWrapper onClick={onClick} checked={checkedState}>
      <div className="toggle_switch_label1">ON</div>
      <div className="toggle_switch_button"></div>
      <div className="toggle_switch_label2">OFF</div>
    </ToggleSwitchWrapper>
  );
};

export default ToggleSwitch;
