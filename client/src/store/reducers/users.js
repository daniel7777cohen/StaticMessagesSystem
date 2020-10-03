import { SET_USERS } from "../constants";

const initialState = {
  usersList: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        usersList: payload,
        loading: false,
      };

    default:
      return state;
  }
}
