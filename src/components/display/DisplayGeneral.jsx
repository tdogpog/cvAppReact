function DisplayGeneral({ resumeData }) {
  return (
    <div className="generalSectionDisplay">
      <p>{resumeData.userInfo.userName || "New Resume"}</p>
      <div className="generalSectionSecondary">
        <p>{resumeData.userInfo.userEmail || "user@email.com"}</p>
        <p>{resumeData.userInfo.userPhone || "123 - 456 - 7890"}</p>
      </div>
    </div>
  );
}

export default DisplayGeneral;
