import React, { useState } from "react";

function WorkInfo({ userWork, updateWorkInfo }) {
  const [work, setWork] = useState({
    workCompany: " ",
    workPosition: " ",
    workStart: " ",
    workEnd: " ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWork({ ...work, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send form data to func to get pushed to our main struct
    updateWorkInfo(work);
    // reset form
    setWork({
      workCompany: " ",
      workPosition: " ",
      workStart: " ",
      workEnd: " ",
    });
  };

  return (
    <form className="workForm" onSubmit={handleSubmit}>
      <input
        name="workCompany"
        value={work.workCompany}
        onChange={handleChange}
        placeholder="Company Name"
      />
      <input
        name="workPosition"
        value={work.workPosition}
        onChange={handleChange}
        placeholder="Position"
      />
      <input
        name="workStart"
        type="date"
        value={work.workStart}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        name="workEnd"
        type="date"
        value={work.workEnd}
        onChange={handleChange}
        placeholder="End Date"
      />
      <button type="submit">Add Work Experience</button>
    </form>
  );
}

export default WorkInfo;
