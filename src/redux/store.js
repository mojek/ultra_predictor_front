import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import allReducres from "./root-reducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  allReducres,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);


export default { store, persistor };
