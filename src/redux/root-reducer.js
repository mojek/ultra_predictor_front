import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import eventReducer from "./event/event.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "events"]
};

const allReducers = combineReducers({
  events: eventReducer,
  user: userReducer
});
export default persistReducer(persistConfig, allReducers);
