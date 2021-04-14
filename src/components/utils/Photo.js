import React from "react";

const Photo = ({ name, onChange, className }) => {
  return (
    <label className={className}>
        <input 
            type="file" 
            onChange={onChange} 
            name={name} 
            style={{display:"none"}}
        /> 
        Photo
    </label>
  );
};


export default Photo;