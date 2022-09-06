import React from "react";
import "./css-components/Logout.css";

const Logout = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <button className="btn-logout" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
