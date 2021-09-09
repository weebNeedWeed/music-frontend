import React, { useState } from "react";
import RegisterPresentation from "./Register.presentation";
import * as authAction from "redux/actions/auth.action";
import { useDispatch } from "react-redux";

function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setRegisterData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authAction.createUser(registerData));
  };

  return (
    <RegisterPresentation
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      {...registerData}
    />
  );
}

export default Register;
