import React, { Component } from "react";
import CVheader from "./CVheader";
import CVinfo from "./CVinfo";
import CVsidebar from "./CVsidebar";

class Preview extends Component {
  render() {
    const { cv } = this.props;
    const { type } = this.props;

    return (
      <div className={`CVpreview ${type}`}>
        <CVheader personal={cv.personal} />
        <CVinfo
          personal={cv.personal}
          experience={cv.experience}
          education={cv.education}
        />
        <CVsidebar personal={cv.personal} />
      </div>
    );
  }
}

export default Preview;
