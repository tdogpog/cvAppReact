function DisplayEducation({ resumeData, handleEducationClick }) {
  return (
    <div className="educationSectionDisplay">
      {resumeData.userEducation.map((education) => (
        <div
          //protect the function from running on render with an arrow functino
          //in react js funcs get immediately called
          //we want this to execute only when the user clicks, so we give it a
          //function definition
          //also this attaches to each item via the map
          onClick={() => handleEducationClick(education)}
          key={education.educationKey}
          className="educationItem"
        >
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
