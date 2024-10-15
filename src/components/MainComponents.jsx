import React, { useState } from "react";
import GeneralInfo from "./inputs/GeneralInfo.jsx";
import EducationInfo from "./inputs/EducationInfo.jsx";
import WorkInfo from "./inputs/WorkInfo.jsx";

//central data object
import resumeData from "../resumeData";

function MainComponents() {
  // set state here so changes cna be processed centrally
  //if changes occur to any children, we will know based off a
  //centralized tracker
  // we pass this functionali9ty as props via the function calls
  //in the return statement, but if we need to tweak state logic,
  // its centralized then cascaded
  const [dummyState, setDummyState] = useState(0);

  const forceUpdate = () => {
    setDummyState((prev) => prev + 1);
  };

  function updateGeneralInfo(updatedInfo) {
    resumeData.userInfo = {
      // First spread: copy everything from the existing userInfo
      ...resumeData.userInfo,
      // Second spread: overwrite any matching fields (like userPhone)
      ...updatedInfo,
    };
    forceUpdate();
  }

  function updateEducationInfo(updatedEducation) {
    resumeData.userEducation = {
      ...resumeData.userEducation,
      ...updatedEducation,
    };
    forceUpdate();
  }

  function updateWorkInfo(updatedWork) {
    resumeData.userWork = {
      ...resumeData.userWork,
      ...updatedWork,
    };
    forceUpdate();
  }

  return (
    <div>
      <h1>Input Fields</h1>
      <GeneralInfo
        userInfo={resumeData.userInfo}
        updateGeneralInfo={updateGeneralInfo}
      />
      <EducationInfo
        userEducation={resumeData.userEducation}
        updateEducationInfo={updateEducationInfo}
      />
      <WorkInfo
        userWork={resumeData.userWork}
        updateWorkInfo={updateWorkInfo}
      />
    </div>
  );
}
