import React from "react";
import EducationContainer from "./EducationContainer";
import ExperienceContainer from "./ExperienceContainer";
import Personal from "./Personal";

const CVform = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onPrint,
  onLoadExample,
  onReset,
}) => {
  return (
    <div>
      <Personal personal={cv.personal} onChange={onChangePersonal} />
      <ExperienceContainer
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <EducationContainer
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <div className="buttons-div">
        <button className="options-button" onClick={onPrint}>
          Print/PDF
        </button>
        <button className="options-button red-button" onClick={onLoadExample}>
          Example
        </button>
        <button className="options-button red-button" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CVform;
