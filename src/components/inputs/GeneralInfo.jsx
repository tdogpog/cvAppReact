import React, { useState } from "react";
import PropTypes from "prop-types";

function GeneralInfo({ userInfo, updateGeneralInfo }) {
  const [general, setGeneral] = useState(userInfo);

  function handleChange(e) {
    const { name, value } = e.target;
    // spread a copy of the main struct and
    //replace discrepancies btwn inputs
    setGeneral({ ...general, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //send it to change main struct but dont clear it
    updateGeneralInfo(general);
  }

  return (
    <form className="generalForm" onSubmit={handleSubmit}>
      <h2 className="generalHeader">General Information</h2>
      <input
        name="userName"
        value={general.userName}
        onChange={handleChange}
        placeholder={general.userName}
      />
      <input
        name="userEmail"
        value={general.userEmail}
        onChange={handleChange}
        placeholder={general.userEmail}
      />
      <input
        name="userPhone"
        value={general.userPhone}
        onChange={handleChange}
        placeholder={general.userPhone}
      />
      <button type="submit">Save </button>
    </form>
  );
}

export default GeneralInfo;
