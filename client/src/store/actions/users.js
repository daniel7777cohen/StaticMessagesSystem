import { SET_USERS } from "../constants";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/users");
    dispatch({
      type: SET_USERS,
      payload: res.data.users,
    });
  } catch (error) {
    console.log("inside errors");
  }
};
