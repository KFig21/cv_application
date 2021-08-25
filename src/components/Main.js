import React, { useState, useRef } from "react";
import CVform from "./CVform/CVform";
import emptyCV from "./utils/emptyCV";
import exampleCV from "./utils/exampleCV";
import { v4 as uuidv4 } from "uuid";
import Preview from "./Preview/Preview";
import { useReactToPrint } from "react-to-print";

const Main = () => {
  const [cv, setCV] = useState(emptyCV);

  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      console.log("file");
      handleChangeFile(e);
      return;
    }

    setCV((prevState) => ({
      ...prevState,
      personal: { ...prevState.personal, [name]: value },
    }));
  };

  const handleChangeFile = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCV((prevState) => ({
        ...prevState,
        personal: {
          ...prevState.personal,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setCV((prevState) => {
      const newExp = prevState.experience.map((exp) => {
        if (exp.id === id) {
          return { ...exp, [name]: value };
        }
        return exp;
      });
      return { ...prevState, experience: [...newExp] };
    });
  };

  const handleAddExperience = () => {
    setCV((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
          description: "",
        },
      ],
    }));
  };

  const handleDeleteExperience = (id) => {
    setCV((prevState) => {
      const newExp = prevState.experience.filter((exp) => exp.id !== id);
      return { ...prevState, experience: [...newExp] };
    });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    setCV((prevState) => {
      const newEducation = prevState.education.map((edu) => {
        if (edu.id === id) {
          return { ...edu, [name]: value };
        }
        return edu;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleAddEducation = () => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          school: "",
          address: "",
          degree: "",
          focus: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteEducation = (id) => {
    setCV((prevState) => {
      const newEdu = prevState.education.filter((edu) => edu.id !== id);
      return { ...prevState, education: [...newEdu] };
    });
  };

  const handleLoadExample = () => {
    setCV(exampleCV);
  };

  const handleReset = () => {
    setCV(emptyCV);
  };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    bodyClass: "scale",
  });

  return (
    <div className="main-content">
      <CVform
        cv={cv}
        onChangePersonal={handleChangePersonal}
        onChangeExperience={handleChangeExperience}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleChangeEducation}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onPrint={handlePrint}
        onLoadExample={handleLoadExample}
        onReset={handleReset}
      />
      <Preview cv={cv} ref={componentRef} />
    </div>
  );
};

export default Main;
