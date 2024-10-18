import React, { useState, useEffect } from "react";

function EducationInfo({
  userEducation,
  updateEducationInfo,
  removeEducationInfo,
  editEducation,
}) {
  const [education, setEducation] = useState({
    educationName: "",
    educationStudied: "",
    educationGraduation: "",
    educationKey: crypto.randomUUID(),
  });

  // need useEffect to prevent an infinite loop

  useEffect(() => {
    if (editEducation) {
      setEducation({
        ...editEducation,
        // Ensure default values are set for editing
        educationName: editEducation.educationName || "University",
        educationStudied: editEducation.educationStudied || "Degree",
        educationGraduation:
          editEducation.educationGraduation || "Graduation Date",
      });
    }
  }, [editEducation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEducationInfo(education);
    // reset form
    setEducation({
      educationName: "",
      educationStudied: "",
      educationGraduation: "",
      educationKey: crypto.randomUUID(),
    });
  };

  const removeEducationItem = () => {
    removeEducationInfo();
  };

  return (
    <form className="educationForm" onSubmit={handleSubmit}>
      <h2 className="educationHeader">Education Information</h2>
      <input
        name="educationName"
        value={education.educationName}
        onChange={handleChange}
        placeholder="School Name"
      />
      <input
        name="educationGraduation"
        value={education.educationGraduation}
        onChange={handleChange}
        placeholder="Graduation Date"
      />
      <input
        name="educationStudied"
        value={education.educationStudied}
        onChange={handleChange}
        placeholder="Degree"
      />

      <button type="submit">Save Education</button>
      <button
        type="button"
        onClick={removeEducationItem}
        id="removeEducaitonItem"
      >
        Remove Education
      </button>
    </form>
  );
}

export default EducationInfo;
