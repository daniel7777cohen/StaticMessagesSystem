import { SET_USERS, CLEAR_USERS } from "../constants";

const initialState = {
  usersList: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return {
        usersList: payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        usersList: [],
        loading: true,
      };
    default:
      return state;
  }
}
