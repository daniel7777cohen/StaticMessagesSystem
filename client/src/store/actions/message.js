import { GET_MESSAGES, DELETE_MESSAGE, SET_RECENET_SENDER } from "../constants";
import axios from "axios";
import { setAlert } from "./alert";

export const addNewMessage = (messageInfo) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post("/api/message", messageInfo, config);

    if (res.status === 200) dispatch(setAlert(res.data.msg, "success"));
    return true;
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => {
        dispatch(setAlert(e.msg, "danger"));
      });
    }
  }
  return false;
};

export const getMessages = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/message");
    if (res.status === 200)
      dispatch({
        type: GET_MESSAGES,
        payload: res.data,
      });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => {
        dispatch(setAlert(e.msg, "danger"));
      });
    }
  }
};

export const deleteMessage = (messageId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/message/${messageId}`);

    if (res.status === 200) dispatch(setAlert(res.data.msg, "success"));

    if (res.status === 200) {
      dispatch({
        type: DELETE_MESSAGE,
        payload: messageId,
      });
    }
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => {
        dispatch(setAlert(e.msg, "danger"));
      });
    }
  }
};

export const setRecentSender = (senderId) => (dispatch) => {
  dispatch({
    type: SET_RECENET_SENDER,
    payload: senderId,
  });
};
