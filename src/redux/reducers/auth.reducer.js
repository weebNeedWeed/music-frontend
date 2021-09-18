import * as authType from "redux/types/auth.type";

const initialState = {
  loggedIn: true,
  userData: {
    username: "",
    id: 0,
    email: "",
  },
};

const authReducer = (state = initialState, action) => {
  let stateClone = { ...state };

  switch (action.type) {
    case authType.AUTH_LOGIN_DONE:
      stateClone.loggedIn = true;
      return stateClone;

    case authType.AUTH_CHANGELOGINSTATUS:
      stateClone.loggedIn = action.payload.status;
      return stateClone;

    case authType.AUTH_UPDATEUSERDATA:
      stateClone.userData = action.payload;
      return stateClone;

    default:
      return { ...state };
  }
};

export default authReducer;
