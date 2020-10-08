import {
  GET_MESSAGES,
  DELETE_MESSAGE,
  GET_MESSAGES_BY_USER_ID,
  MESSAGE_ERROR,
  CLEAR_MESSAGES,
} from "../constants";
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
    const { errors } = error.response.data;
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
    const { errors } = error.response.data;
    if (errors) {
      errors.forEach((e) => {
        dispatch(setAlert(e.msg, "danger"));
      });
    }
  }
};

export const getMessagesByUserId = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/message/${userId}`);
    if (res.status === 200) {
      dispatch({
        type: GET_MESSAGES_BY_USER_ID,
        payload: res.data,
      });
      const { received, sent } = res.data;
      if (received.length > 0 || sent.length > 0)
        //else a nicer message is displayed for user
        dispatch(setAlert("Messages were loaded successfully", "success"));
    }
  } catch (error) {
    dispatch({
      type: MESSAGE_ERROR,
    });
    const { errors } = error.response.data;
    if (errors) {
      errors.forEach((e) => {
        dispatch(setAlert(e.msg, "danger"));
      });
    }
  }
};

export const deleteMessage = (messageId, type) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/message/${messageId}`);

    if (res.status === 200) dispatch(setAlert(res.data.msg, "success"));

    if (res.status === 200) {
      dispatch({
        type: DELETE_MESSAGE,
        payload: { messageId, type },
      });
    }
  } catch (error) {
    const { errors } = error.response.data;
    if (errors) {
      errors.forEach((e) => {
        dispatch(setAlert(e.msg, "danger"));
      });
    }
  }
};

export const clearMessages = () => (dispatch) => {
  dispatch({
    type: CLEAR_MESSAGES,
  });
};
