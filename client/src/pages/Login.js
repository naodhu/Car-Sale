import React from "react";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const handleLogin = (email, password) => {
    console.log("Logging in with email:", email, "password:", password);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
