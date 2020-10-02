import { SET_USERS } from "../actions/constants";

const initialState = {
  usersList: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        usersList: payload,
        loading: false,
        error: {},
      };

    default:
      return state;
  }
}
