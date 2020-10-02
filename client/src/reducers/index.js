import { combineReducers } from "redux";
import alert from "./alert";
import message from "./message";
import users from "./users";

export default combineReducers({
  alert,
  message,
  users
});
