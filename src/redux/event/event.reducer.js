import { EventActionTypes } from "./event.types";

const INIT_STATE = {
  isLoading: false,
  data: []
};
const eventReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case EventActionTypes.EVENTS_LOADING:
      return { ...state, isLoading: true };
    case EventActionTypes.EVENTS_LOADED:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    default:
      return state;
  }
};

export default eventReducer;
