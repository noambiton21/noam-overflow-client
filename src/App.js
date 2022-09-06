import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  return <>{isAuth ? <ProtectedRoutes /> : <Login setIsAuth={setIsAuth} />}</>;
}

export default App;
