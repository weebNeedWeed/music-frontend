import React, { useState } from "react";
import LoginPresentation from "./Login.presentation";

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setLoginData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginData);
  };

  return (
    <LoginPresentation
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      {...loginData}
    />
  );
}

export default Login;
