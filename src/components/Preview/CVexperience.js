import React from "react";

const CVexperience = ({ experience }) => {
    return(
        <div className="cv-content-block">
            <div className="cv-date-range">
                {experience.from} - {experience.to}
            </div>
            <div style={{width: "75%"}}>
                <div className="subsection-container">
                    <p className="cv-main-content cv-exp-title">{experience.position}</p>
                    <p className="cv-main-content cv-underline"> {experience.company} - {experience.address} </p>
                    <p className="cv-main-content"> {experience.description} </p> 
                </div>
            </div>
        </div>
    )
}

export default CVexperience;