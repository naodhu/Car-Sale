import React from "react";
import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  const handleRegister = (email, password) => {
    console.log("Registering with email:", email, "password:", password);
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default Register;
