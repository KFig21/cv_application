import React from "react";

const CVsidebar = ({ personal }) => {
    return(
        <div style={{padding: "12px", backgroundColor: "var(--sidebar)"}}>
            <img src={personal.photo} className="sidebar-photo" alt="CVphoto" />
            <div>
                <p className="cv-section-title">Contact Info</p>
                <p className="cv-section-subtitle">Address</p> 
                <p className="cv-sidebar-content">{personal.address1} {personal.address2}</p>
                <p className="cv-section-subtitle">Phone</p> 
                <p className="cv-sidebar-content">{personal.phone}</p>
                <p className="cv-section-subtitle">Email</p> 
                <p className="cv-sidebar-content">{personal.email}</p>
            </div>
        </div>
    )
}

export default CVsidebar;