import { SET_ALERT ,REMOVE_ALERTS} from "./constants";


export const setAlert = (msg, alertType) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
    },
  });

}; 

export const removeAlerts = () => (dispatch) => {
      dispatch({ type: REMOVE_ALERTS });
  }; 
  