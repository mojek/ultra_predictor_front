import { PredictionActionTypes } from "./prediction.types";

const INIT_STATE = {
  isLoading: false,
  data: []
};

const predictionReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case PredictionActionTypes.PREDICTION_LOADING:
      return { ...state, isLoading: true };
    case PredictionActionTypes.PREDICTION_LOADED:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    default:
      return state;
  }
};

export default predictionReducer;
