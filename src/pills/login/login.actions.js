import { getUserCredentials } from "../../API/getUserCredentials";

export const UPDATE_USER = "@login/UPDATE_USER";
export const UPDATE_USER_ERROR = "@login/UPDATE_USER_ERROR";

export const updateUser = (uuid, name, email, token) => {
  return { type: UPDATE_USER, payload: { uuid, name, email, token } };
};

export const updateUserError = error => {
  return { type: UPDATE_USER_ERROR, payload: error };
};

export const checkUserCredentials = (userName, UserPass) => {
  return async (dispatch, getState) => {
    const res = await getUserCredentials(userName, UserPass);
    if (res === 400) {
      dispatch(updateUserError(res));
    } else {
      const { uuid, name, email, token } = res;
      if (token) {
        dispatch(updateUser(uuid, name, email, token));
      }
    }
  };
};
