import React from "react";

const TextArea = ({ className, onChange, name, placeholder, value }) => {
  return (
    <textarea
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
      className={className}
    />
  );
};

export default TextArea;