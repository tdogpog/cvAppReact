import React, { useState } from "react";

function GeneralInfo(userInfo, updateGeneralInfo) {
  const [general, setGeneral] = useState(userInfo);

  function handleChange(e) {
    const { name, value } = e.target;
    setGeneral({ ...general, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateGeneralInfo(general);
  }

  return (
    <form onSubmit={handleSubmit}>
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
