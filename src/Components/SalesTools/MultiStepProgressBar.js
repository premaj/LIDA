import React from "react";
import "./MultiStepProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Card } from "react-bootstrap";

const MultiStepProgressBar = (props) => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 10;
  } else if (props.currentStep === 2) {
    stepPercentage = 35.33;
  } else if (props.currentStep === 3) {
    stepPercentage = 65;
  } else if (props.currentStep === 3) {
    stepPercentage = 99.99;
  } else if (props.currentStep === 4) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
        <div
          className={`indexedStep ${accomplished ? "accomplished" : null}`}
        >
          {index + 1}
        </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
