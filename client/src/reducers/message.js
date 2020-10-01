import axios from "axios";
import { SET_MESSAGES,GET_MESSAGES } from "../actions/constants";

const initialState = {
  messages: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MESSAGES:
    case SET_MESSAGES:
      return {
        ...state,
        messages: payload,
        loading: false,
        error: {},
      };
    default:
      return state;
  }
}
