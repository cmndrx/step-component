import React from "react";

const StepMessage = ({ step, children }) => {
  return (
    <p className="message">
      <h3>step {step}</h3>
      {children}
    </p>
  );
};

export default StepMessage;
