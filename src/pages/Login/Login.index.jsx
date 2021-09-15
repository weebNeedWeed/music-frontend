import React, { useState } from "react";
import LoginPresentation from "./Login.presentation";
import * as authAction from "redux/actions/auth.action";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
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
    dispatch(authAction.loginStart(loginData));
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
