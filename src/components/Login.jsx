import React, { useState } from "react";
import logo from "../pictures/LOGO-05.png";

import "./css-components/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main>
      <img className="iv-logo" src={logo} alt="Logo" />
      <h1>IVOverflow</h1>
      <div className="container">
        <label className="label-title">Email:</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label className="label-title">Password:</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button
          type="submit"
          className="btn-login"
          onClick={console.log("clicked")}
        >
          Login
        </button>
      </div>
    </main>
  );
};

export default Login;
