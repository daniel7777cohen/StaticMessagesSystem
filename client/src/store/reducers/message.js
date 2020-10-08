import {
  CLEAR_MESSAGES,
  DELETE_MESSAGE,
  GET_MESSAGES_BY_USER_ID,
  MESSAGE_ERROR,
} from "../constants";

const initialState = {
  messages: { received: [], sent: [] },
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MESSAGES_BY_USER_ID: {
      const { received, sent } = payload;
      return {
        ...state,
        messages: { received, sent },
        loading: false,
      };
    }
    case MESSAGE_ERROR: {
      return { ...state, loading: true };
    }
    case CLEAR_MESSAGES: {
      return {
        messages: { received: [], sent: [] },
        loading: true,
      };
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
    default:
      return state;
  }
}
