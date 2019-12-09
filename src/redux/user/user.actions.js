import axios from "axios";
import { UserActionTypes } from "./user.types";
export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().user.token;

    let headers = {};
    if (token) {
      dispatch({ type: UserActionTypes.USER_LOADING });
      headers["Authorization"] = `Token ${token}`;

      axios
        .get("http://localhost:8000/api/auth/user", {
          headers
        })
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: UserActionTypes.USER_LOADED,
              user_info: res.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: UserActionTypes.AUTHENTICATION_ERROR,
            
          });
          
        });
    }
  };
};

export const loginUser = (email, password) => {
  return dispatch => {
    dispatch({ type: UserActionTypes.START_LOGIN });
    axios
      .post("http://localhost:8000/api/auth/login", {
        email: email,
        password: password
      })
      .then(res => {
        dispatch({
          type: UserActionTypes.LOGIN_SUCCESSFUL,
          data: res.data
        });
      })
      .catch(error => {
        dispatch({ type: UserActionTypes.LOGIN_FAILED });
      });
  };
};
export const logOutUser = () => {
  return dispatch => {
    dispatch({ type: UserActionTypes.LOGOUT_SUCCESSFUL});
  }
}
