import React, { useState, useEffect } from "react";
import { messagesMock } from "../../MessagesMock";
import {
  PrimaryText,
  Container,
  Input,
  FormText,
  FormGroup,
  Button,
} from "./styles";
import { setAlert, removeAlerts } from "../../actions/alert";
import { connect } from "react-redux";
import MessagesTabs from "./MessagesTab";
import { getMessages } from "../../actions/message";
import Spinner from "../layout/Spinner";

const MessagesManager = ({
  setAlert,
  removeAlerts,
  getMessages,
  message: { messages ,loading},
}) => {
  useEffect(() => {
    getMessages();
    return () => {
      removeAlerts();
    };
  }, [removeAlerts, getMessages]);
  const [userId, setUserId] = useState("");

  const runValidation = () => {
    if (!userId) {
      setAlert("user id field cannot be blank", "danger");
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    removeAlerts();
    const isValid = runValidation();

    if (isValid) {
      try {
        setAlert("messages loaded successfully", "success");
        setTimeout(() => {
          removeAlerts();
        }, 8000);
        // const messages = await fetchMessages();
      } catch (error) {}
    }
    //check that user exist in the db
    //if so , the continue and set loadClicked, display a success message.
    //if not, display an error and dont setLoadClicked !!!
    //the messages are coming from the db
  };

  return (
    <Container>
      <PrimaryText>Messages Manager</PrimaryText>
      <form>
        <FormText>User Id</FormText>
        <FormGroup>
          <Input
            type="text"
            placeholder="write your id here ..."
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" onClick={(e) => onSubmit(e)}>
          Load Messages
        </Button>
      </form>
      {!loading ?
        //add spinner
        <MessagesTabs messages={messages} userId={userId} />
        :<Spinner/>
      }
    </Container>
  );
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps, {
  setAlert,
  removeAlerts,
  getMessages,
})(MessagesManager);
