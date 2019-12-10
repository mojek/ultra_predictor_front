import axios from "axios";
import { PredictionActionTypes } from "./prediction.types";

export const loadPrediction = (raceId, best10, sex, year_of_birth) => {
  return (dispatch, getState) => {
    const token = getState().user.token;

    let headers = {};
    if (token) {
      dispatch({ type: PredictionActionTypes.PREDICTION_LOADING });
      headers["Authorization"] = `Token ${token}`;

      axios
        .post(
          "http://localhost:8000/api/predictions",
          {
            race: raceId,
            best_ten: best10,
            sex: sex,
            birth_year: year_of_birth
          },
          { headers }
        )
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: PredictionActionTypes.PREDICTION_LOADED,
              payload: { raceId: res.data }
            });
          }
        })
        .catch(error => {});
    }
  };
};
