import React, { useState } from "react";

function WorkInfo({ userWork, updateWorkInfo }) {
  const [work, setWork] = useState({
    workKey: crypto.randomUUID(),
    workCompany: "",
    workPosition: "",
    workStart: "",
    workEnd: "",
    workDuties: [],
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
      workKey: crypto.randomUUID(),
      workCompany: "",
      workPosition: "",
      workStart: "",
      workEnd: "",
      workDuties: [],
    });
  };

  //this is basically addressing a new entry into workDuties
  //spread work, edit workDuties
  //spread workDuties, edit/add in a new work duty
  //first nested spread
  const addResponsibilities = () => {
    setWork({
      ...work,
      workDuties: [
        ...work.workDuties,
        { workDutiesKey: crypto.randomUUID(), workDutiesDescription: "" },
      ],
    });
  };

  const removeResponsibilities = () => {
    if (work.workDuties.length > 0) {
      setWork({
        ...work,
        workDuties: work.workDuties.slice(0, -1),
      });
    }
  };

  // grab the index of the responsiblitiy you're editing and its event value
  const handleDutyChange = (index, value) => {
    //get a map of the duties
    //find the index in this map that is === i
    //update it with a spread using event obj vaue
    //otherwise just keep as is
    const updatedDuties = work.workDuties.map((duty, i) =>
      i === index ? { ...duty, workDutiesDescription: value } : duty
    );
    //regenerate the component with these new duties
    setWork({ ...work, workDuties: updatedDuties });
  };

  console.log(work.workDuties.map((duty) => duty.workDutiesKey));

  return (
    <form className="workForm" onSubmit={handleSubmit}>
      <h2 className="workHeader">Work Information</h2>
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
        value={work.workStart}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        name="workEnd"
        value={work.workEnd}
        onChange={handleChange}
        placeholder="End Date"
      />
      <div className="responsibilities">
        <h3>Work Responsibilites</h3>
        <button
          type="button"
          onClick={addResponsibilities}
          id="addResponsibilities"
        >
          Add Responsibility
        </button>
        <button
          type="button"
          onClick={removeResponsibilities}
          id="removeResponsibilities"
        >
          Remove Responsibility
        </button>
        {work.workDuties.map((duty, index) => (
          <input
            key={duty.workDutiesKey}
            value={duty.workDutiesDescription}
            onChange={(e) => handleDutyChange(index, e.target.value)}
            placeholder="Responsibility"
          ></input>
        ))}
      </div>
      <p></p>
      <button type="submit">Add Work Experience</button>
    </form>
  );
}

export default WorkInfo;
