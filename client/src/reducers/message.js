import {
  GET_MESSAGES,
  DELETE_MESSAGE,
} from "../actions/constants";

const initialState = {
  messages: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: payload,
        loading: false,
        error: {},
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message._id !== payload),
        loading: false,
        error: {},
      };
    default:
      return state;
  }
}
