import React from "react";
import Education from "./Education";
import Button from "../utils/Button";

const EducationContainer = ({ education, onChange, onAdd, onDelete }) => {
  const educationItems = education.map((educationItem) => (
    <Education
      key={educationItem.id}
      id={educationItem.id}
      education={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <div className="personal-div">
        <div className="experience-div">
            <h2 className='personal-title'>Education</h2>
            {educationItems}
            <Button text="Add another entry" onClick={onAdd} className="personal-button add-button"></Button>
        </div>
    </div>
  );
};

export default EducationContainer;