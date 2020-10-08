import { combineReducers } from "redux";
import alert from "./alert";
import message from "./message";
import users from "./users";
import auth from "./auth";

export default combineReducers({
  alert,
  message,
  users,
  auth
});
