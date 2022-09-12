import React, { useState } from "react";
import logo from "../pictures/LOGO-05.png";
import "./css-components/Login.css";
import { createApiClient } from "../api";
const api = createApiClient();

const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    async function loginPost() {
      const response = await api.loginUser(email, password);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.data);
        setIsAuth(true);
        window.location.href = "/";
      }
    }
    loginPost();
  }
  return (
    <form className="login-form">
      <div className="login-container">
        <div className="logo-box">
          <img className="iv-logo" src={logo} alt="Logo" />
        </div>
        <h1 className="iv-overflow-title">Noam Overflow</h1>
        <label className="label-title">Email:</label>
        <input
          className="login-input"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label-title">Password:</label>
        <input
          className="login-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn-login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
