import React from "react";
import Experience from "./Experience";
import Button from "../utils/Button";

const ExperienceContainer = ({ experience, onChange, onAdd, onDelete }) => {
  const experienceItems = experience.map((experienceItem) => (
    <Experience
      key={experienceItem.id}
      id={experienceItem.id}
      experience={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <div className="personal-div">
        <div className="experience-div">
            <h2 className='personal-title'>Experience</h2>
            {experienceItems}
            <Button text="Add another entry" onClick={onAdd} className="personal-button add-button"></Button>
        </div>
    </div>
  );
};

export default ExperienceContainer;