import axios from "axios";
import { EventActionTypes } from "./event.types";

export const loadEvents = () => {
  return (dispatch, getState) => {
    const token = getState().user.token;
    
    let headers = {};
    if (token) {
      dispatch({ type: EventActionTypes.EVENTS_LOADING });
      headers["Authorization"] = `Token ${token}`;

      axios.get("http://localhost:8000/api/events", { headers })
      .then(res=> {
        if (res.status === 200) {
            dispatch({
                type: EventActionTypes.EVENTS_LOADED,
                payload: res.data
            })
        }
      }).catch(error => {});
    }
  };
};


