import React from "react";
import { FaFileAlt } from "react-icons/fa";

const Header = () => {

  return (
    <div id='header'>
      <div id='header-logo'>
        <FaFileAlt />
      </div>
      <h1>CV Builder <span style={{fontSize: 20, fontStyle: "italic"}}>(with React!)</span></h1>
    </div>
  );
};

export default Header;