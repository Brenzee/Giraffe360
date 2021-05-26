import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakPoints } from "../theme";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .toggle_popup {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 17px;
    width: 17px;
    margin-left: 0.5rem;
    background: ${(props) => props.theme.giraffeBlue};
    color: white;
    border-radius: 8.5px;
    font-size: 10px;
    cursor: pointer;

    .toggle_popup_container {
      display: none;
    }
    :hover {
      .toggle_popup_container {
        display: block;
        position: absolute;
        bottom: 160%;
        left: -92.5px;
        right: 0;
        width: 200px;
        padding: 0.5rem 0.75rem;
        color: white;
        border-radius: 6px;
        background: ${(props) => props.theme.giraffeBlue};
        text-align: center;
        font-size: 12px;
        ::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 48%;
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid ${(props) => props.theme.giraffeBlue};
        }
        @media (max-width: ${breakPoints.md}px) {
          left: -177px;
          ::after {
            left: 90%;
          }
        }
      }
    }
  }
`;

const ToggleSwitchWrapper = styled.div`
  cursor: ${(props) => (props.disabled ? `normal` : `pointer`)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  font-weight: 600;
  font-size: 12px;
  width: 75px;
  height: 32px;
  background: ${(props) =>
    props.checked
      ? props.theme.giraffeYellow
      : props.disabled
      ? props.theme.giraffeGrayBG
      : props.theme.giraffeGray};
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
    color: ${(props) => (props.disabled ? props.theme.giraffeGray : props.theme.giraffeBlue)};
    opacity: ${(props) => (props.checked ? "1" : `0`)};
  }
  .toggle_switch_label2 {
    color: ${(props) => (props.disabled ? props.theme.giraffeGray : props.theme.giraffeBlue)};
    opacity: ${(props) => (!props.checked ? "1" : `0`)};
  }
`;

const ToggleSwitch = ({ onClick, checkedState, popup, disabled }) => {
  return (
    <Wrapper>
      <ToggleSwitchWrapper onClick={onClick} checked={checkedState} disabled={disabled}>
        <div className="toggle_switch_label1">ON</div>
        <div className="toggle_switch_button"></div>
        <div className="toggle_switch_label2">OFF</div>
      </ToggleSwitchWrapper>
      {popup && (
        <div className="toggle_popup">
          i<div className="toggle_popup_container">{popup}</div>
        </div>
      )}
    </Wrapper>
  );
};

ToggleSwitch.prototype = {
  onClick: PropTypes.func,
  checkedState: PropTypes.bool,
};

export default ToggleSwitch;
