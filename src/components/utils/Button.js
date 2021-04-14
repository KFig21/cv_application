import React from "react";

const Button = ({ className, text, onClick, primary, secondary, red }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      primary={primary}
      secondary={secondary}
      red={red}
    >
      {text}
    </button>
  );
};

export default Button;