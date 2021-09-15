import * as authType from "redux/types/auth.type";

export const createUser = (registerData) => {
  return {
    type: authType.AUTH_CREATEUSER,
    payload: { registerData },
  };
};

export const loginStart = (loginData) => {
  return {
    type: authType.AUTH_LOGIN_START,
    payload: { loginData },
  };
};

export const loginDone = (authToken) => {
  localStorage.setItem("authToken", authToken);
  localStorage.setItem("authTimestamp", Date.now());

  return {
    type: authType.AUTH_LOGIN_DONE,
  };
};

export const changeLoginStatus = (status) => {
  return {
    type: authType.AUTH_CHANGELOGINSTATUS,
    payload: {
      status,
    },
  };
};

export const updateUserData = ({ username, id, email }) => {
  return {
    type: authType.AUTH_UPDATEUSERDATA,
    payload: {
      username,
      id,
      email,
    },
  };
};
