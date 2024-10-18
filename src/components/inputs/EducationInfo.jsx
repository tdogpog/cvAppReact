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

  useEffect(() => {
    if (editEducation) {
      setEducation(editEducation);
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
        name="educationStudied"
        value={education.educationStudied}
        onChange={handleChange}
        placeholder="Degree"
      />
      <input
        name="educationGraduation"
        value={education.educationGraduation}
        onChange={handleChange}
        placeholder="Graduation Date"
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
