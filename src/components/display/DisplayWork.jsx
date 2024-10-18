function DisplayWork({ resumeData, handleWorkClick }) {
  return (
    <div className="workSectionDisplay">
      {resumeData.userWork.map((work) => (
        <div
          onClick={() => handleWorkClick(work)}
          className="workItem"
          key={work.workKey}
        >
          <p>{work.workCompany || "Company Name"}</p>
          <p>
            {work.workStart || "Start Date"} - {work.workEnd || "End Date"}
          </p>
          <div className="workSectionSecondary">
            <p>{work.workPosition || "Work Title"}</p>
          </div>
          <ul>
            {work.workDuties.map((workDuties) => (
              <li key={work.workDutiesKey}>
                {workDuties.workDutiesDescription}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default DisplayWork;
