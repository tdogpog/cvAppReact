function DisplayEducation({ resumeData }) {
  return (
    <div className="educationSection">
      {resumeData.userEducation.map((education) => (
        <div key={education.educationKey} className="educationItem">
          <p>{education.educationName || "University Here"}</p>
          <p>{education.educationGraduation || "Graduation Date"}</p>

          <div className="educationSectionSecondary">
            <p>{education.educationStudied || "Degree Here"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayEducation;

//refactoring for container for later deletion
