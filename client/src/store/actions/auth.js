import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_MESSAGES,
  CLEAR_USERS,
} from "../constants";
import { setAlert } from "./alert";
import setAuthToken from "../../utils/setAuthToken";
import { loadAllUsers } from "./users";

export const loadUser = () => async (dispatch) => {
  const token = localStorage.token;
  if (token) {
    setAuthToken(token);
    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data.user, //user
      });
    } catch (e) {
      dispatch({ type: AUTH_ERROR });
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "/api/auth/login",
      { email, password },
      config
    );
    if (res.status === 200) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
      dispatch(loadAllUsers());
    }
  } catch (error) {
    const { errors } = error.response.data;
    if (errors) {
      errors.forEach((e) => {
        dispatch(setAlert(e.msg, "danger"));
      });
    }
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_MESSAGES });
  dispatch({ type: CLEAR_USERS });
};
