import React from "react";

const CVheader =({ personal }) => {
    const { firstName, lastName, currentRole } = personal;

    return (
        <div className="cv-header">
            <span style={{fontSize: "40px"}}>{firstName} {lastName}</span>
            <p style={{fontSize: "22px", margin: "12px 0px"}}>{currentRole}</p>
        </div>
    )
}

export default CVheader;