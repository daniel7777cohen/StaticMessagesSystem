import { setAlert } from "../store/actions/alert";
import store from "../store/store";

export const createFormValidations = ({ senderId, receiverId, subject, message }) => {
  switch (true) {
    case !senderId:
      store.dispatch(
        setAlert(
          "Sender Id field cannot be blank. Use the users icon at the top to pick one.",
          "danger"
        )
      );
      return false;
    case !receiverId:
      store.dispatch(
        setAlert(
          "Receiver Id field cannot be blank. Use the users icon at the top to pick one.",
          "danger"
        )
      );
      return false;
    case receiverId === senderId:
      store.dispatch(
        setAlert("You cant send a message to yourself !!!", "danger")
      );
      return false;
    case subject === "":
      store.dispatch(setAlert("subject field cannot be blank", "danger"));
      return false;
    case message === "":
      store.dispatch(setAlert("message field cannot be blank", "danger"));
      return false;
    default:
  }
  return true;
};

export const loginFormValidations = ({email,password})=>{
  switch(true){
    case(!email):{
      store.dispatch(setAlert("email is required", "danger"));
      return false;
    }
    case(!password):{
      store.dispatch(setAlert("password is required", "danger"));
      return false;
    }
    default:
  }
  return true;
}