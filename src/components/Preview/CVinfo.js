import React from "react";
import CVexperience from "./CVexperience";
import CVeducation from "./CVeducation";

const CVinfo = ({ experience, education }) => {
    const experiences = experience.map((exp) => (
        <CVexperience key={exp.id} experience={exp} />
    ))

    const educations = education.map((edu) => (
        <CVeducation key={edu.id} education={edu} />
    ))

    return(
        <div className="preview-content-container">
            <div className="section-container">
                <p className="cv-section-title">Experience</p>
                {experiences}
            </div>
            <div className="section-container">
                <p className="cv-section-title">Education</p>
                {educations}
            </div>
        </div>
    )
}

export default CVinfo;