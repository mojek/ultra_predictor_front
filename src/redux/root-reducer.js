import eventReducer from "./event/event.reducer";
import userReducer from "./user/user.reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  events: eventReducer,
  user: userReducer
});
export default allReducers;
