import React from "react";

const CustomButton = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
