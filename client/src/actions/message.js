import { SET_MESSAGES ,GET_MESSAGES} from "./constants";
import { messagesMock } from "../MessagesMock";

export const setMessages = (messages) => (dispatch) => {
  dispatch({
    type: SET_MESSAGES,
    payload: {
      messages,
    },
  });
};

export const getMessages = () => (dispatch) => {
  dispatch({
    type: GET_MESSAGES,
    payload: messagesMock,
  });
};
