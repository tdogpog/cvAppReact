import React, { useState } from "react";

function EducationInfo({ userEducation, updateEducationInfo }) {
  const [education, setEducation] = useState({
    educationName: " ",
    educationStudied: " ",
    educationGraduation: " ",
    educationKey: crypto.randomUUID(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEducationInfo(education);
    // reset form
    setEducation({
      educationName: " ",
      educationStudied: " ",
      educationGraduation: " ",
      educationKey: crypto.randomUUID(),
    });
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
      <button type="submit">Add Education</button>
    </form>
  );
}

export default EducationInfo;
