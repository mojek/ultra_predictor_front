import { UserActionTypes } from "./user.types";

const INIT_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: true,
  user_info: null,
  errors: {}
};
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.USER_LOADING:
      return { ...state, isLoading: true };

    case UserActionTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user_info: action.user_info
      };

    case UserActionTypes.START_LOGIN:
      return { ...state, isLoading: true };

    case UserActionTypes.LOGIN_SUCCESSFUL:
      localStorage.setItem("token", action.data.token);
      return {
        ...state,
        ...action.data,
        isAuthenticated: true,
        isLoading: false,
        errors: null
      };

    case UserActionTypes.AUTHENTICATION_ERROR:
    case UserActionTypes.LOGIN_FAILED:
    case UserActionTypes.LOGOUT_SUCCESSFUL:
      localStorage.removeItem("token");
      return {
        ...state,
        errors: action.data,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };

    default:
      return state;
  }
};

export default userReducer;
