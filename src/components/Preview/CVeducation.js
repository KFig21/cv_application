import React from "react";

const CVeducation = ({ education }) => {
    return(
        <div className="cv-content-block">
            <div className="cv-date-range">
                {education.from} - {education.to}
            </div>
            <div style={{width: "75%"}}>
                <div className="subsection-container">
                    <p className="cv-main-content cv-edu-title"><strong>{education.school}</strong> - {education.address}</p>
                    <p className="cv-main-content">Degree: {education.degree}</p>
                    <p className="cv-main-content">Focus: {education.focus}</p>
                </div>
            </div>
        </div>
    )
}

export default CVeducation;