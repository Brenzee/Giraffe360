import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Assets
import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import { MdInsertPhoto, MdPhotoCamera } from "react-icons/md";
import { HiDocumentDuplicate } from "react-icons/hi";

const Wrapper = styled.div`
  background: ${(props) => props.theme.giraffeGrayBG};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 230px;
  .stepper_container {
    padding: 0 1rem;
    width: 100%;
    max-width: 600px;
    .stepper {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }
    .stepper_title {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      line-height: 60px;
      @media (max-width: 768px) {
        font-size: 20px;
        line-height: normal;
      }
    }
  }
`;

const StepWrapper = styled.div`
  padding-right: 0.5rem;
  width: 100%;
  .stepper_step_visual {
    display: flex;
    align-items: center;
    .stepper_step_logo {
      border-radius: 50%;
      min-height: 40px;
      min-width: 40px;
      margin-right: 0.5rem;
      background: ${(props) =>
        props.active
          ? props.theme.giraffeYellow
          : props.completed
          ? props.theme.success
          : props.theme.giraffeGrayBG};
      border: ${(props) =>
        props.active || props.completed ? "none" : `2px solid ${props.theme.giraffeGray}`};
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        fill: ${(props) =>
          props.active
            ? props.theme.giraffeBlue
            : props.completed
            ? "white"
            : props.theme.giraffeGray};
      }
    }
    .stepper_step_line {
      border-radius: 1.5px;
      background: ${(props) => (props.completed ? props.theme.success : props.theme.giraffeGray)};
      height: 3px;
      width: 100%;
    }
  }
  .stepper_step_title {
    margin-top: 0.25rem;
    font-weight: 600;
    color: ${(props) =>
      props.active || props.completed ? props.theme.giraffeBlue : props.theme.giraffeGray};
  }
  :last-of-type {
    padding-right: 0;
    width: max-content;
    .stepper_step_logo {
      margin: 0;
    }
    .stepper_step_line {
      display: none;
    }
    .stepper_step_title {
      text-align: center;
    }
  }
`;

const Stepper = ({ title, step1, step2, step3, step4, active }) => {
  return (
    <Wrapper>
      <div className="stepper_container">
        <div className="stepper">
          <StepWrapper active={active === "step1"} completed={step1}>
            <div className="stepper_step_visual">
              <div className="stepper_step_logo">
                {step1 ? <AiOutlineCheck size={22} /> : <AiFillStar size={22} />}
              </div>
              <div className="stepper_step_line" />
            </div>
            <h5 className="stepper_step_title">Branding</h5>
          </StepWrapper>
          <StepWrapper active={active === "step2"} completed={step2}>
            <div className="stepper_step_visual">
              <div className="stepper_step_logo">
                {step2 ? <AiOutlineCheck size={22} /> : <MdInsertPhoto size={22} />}
              </div>
              <div className="stepper_step_line" />
            </div>
            <h5 className="stepper_step_title">Photos</h5>
          </StepWrapper>
          <StepWrapper active={active === "step3"} completed={step3}>
            <div className="stepper_step_visual">
              <div className="stepper_step_logo">
                {step3 ? <AiOutlineCheck size={22} /> : <HiDocumentDuplicate size={22} />}
              </div>
              <div className="stepper_step_line" />
            </div>
            <h5 className="stepper_step_title">Floorplans</h5>
          </StepWrapper>
          <StepWrapper active={active === "step4"} completed={step4}>
            <div className="stepper_step_visual">
              <div className="stepper_step_logo">
                <MdPhotoCamera size={22} />
              </div>
              <div className="stepper_step_line" />
            </div>
            <h5 className="stepper_step_title">Tour</h5>
          </StepWrapper>
        </div>
        <h1 className="stepper_title">{title}</h1>
      </div>
    </Wrapper>
  );
};

Stepper.propTypes = {
  title: PropTypes.string,
  active: PropTypes.string,
};

export default Stepper;
