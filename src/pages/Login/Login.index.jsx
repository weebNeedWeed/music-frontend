import React, { useState, useEffect } from "react";
import LoginPresentation from "./Login.presentation";
import * as authAction from "redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);
  const history = useHistory();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
  }, [loggedIn, history]);

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
