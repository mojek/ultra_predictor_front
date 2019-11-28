import { createStore, applyMiddleware, compose } from "redux";
import allReducres from "./root-reducer";

import logger from "redux-logger";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [logger];

const store = createStore(
  allReducres,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
