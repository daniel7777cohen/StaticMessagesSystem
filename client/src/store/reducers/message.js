import { GET_MESSAGES, DELETE_MESSAGE, SET_RECENET_SENDER } from "../constants";

const initialState = {
  messages: [],
  loading: true,
  recentSenderId: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: payload,
        loading: false,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message._id !== payload),
        loading: false,
      };
    case SET_RECENET_SENDER:
      return {
        ...state,
        recentSenderId: payload,
      };
    default:
      return state;
  }
}
