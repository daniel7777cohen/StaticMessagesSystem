import { SET_ALERT, REMOVE_ALERTS } from "../constants";

const initialState = [];
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERTS:
      return [];
    default:
      return state;
  }
}
