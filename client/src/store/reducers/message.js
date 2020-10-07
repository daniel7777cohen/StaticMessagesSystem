import {
  GET_MESSAGES,
  DELETE_MESSAGE,
  SET_RECENET_SENDER,
  DELETE_RECENT_SENDER,
  GET_MESSAGES_BY_USER_ID,
  MESSAGE_ERROR,
} from "../constants";

const initialState = {
  messages: { received: [], sent: [] },
  loading: true,
  recentSenderId: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // case GET_MESSAGES:
    //   return {
    //     ...state,
    //     messages: payload,
    //     loading: false,
    //   };
    case GET_MESSAGES_BY_USER_ID:
      return {
        ...state,
        messages: { received: payload.received, sent: payload.sent },
        loading: false,
      };
    case MESSAGE_ERROR: {
      return { ...state, loading: true };
    }
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.type]: state.messages[payload.type].filter(
            (message) => message._id !== payload.messageId
          ),
        },
        loading: false,
      };
    case SET_RECENET_SENDER:
      return {
        ...state,
        recentSenderId: payload,
      };
    case DELETE_RECENT_SENDER:
      return {
        ...state,
        recentSenderId: "",
      };
    default:
      return state;
  }
}
