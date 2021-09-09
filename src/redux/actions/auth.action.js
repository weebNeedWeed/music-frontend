import * as authType from "redux/types/auth.type";

export const createUser = (registerData) => {
  return {
    type: authType.AUTH_CREATEUSER,
    payload: { registerData },
  };
};
