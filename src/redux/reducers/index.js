import eventReducer from "./events";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  events: eventReducer,
  isLogged: isLoggedReducer
});
export default allReducers;
