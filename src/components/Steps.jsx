import React, { useState } from "react";
import CustomButton from "./CustomButton";
import StepMessage from "./StepMessage";

const Steps = () => {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  return (
    <div>
      {" "}
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <StepMessage step={step}>{messages[step - 1]}</StepMessage>
      <div className="buttons">
        <CustomButton
          bgColor="#7950f2"
          textColor="#fff"
          onClick={handlePrevious}
        >
          <span>👈</span> Previous
        </CustomButton>
        <CustomButton bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
          Next<span>👉</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default Steps;
