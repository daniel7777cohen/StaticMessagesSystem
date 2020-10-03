import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { setAlert, removeAlerts } from "../../actions/alert";
import {
  Container,
  PrimaryText,
  Description,
  FormDesc,
  FormGroup,
  TextArea,
  Input,
  Button,
  Link,
} from "../../styles";
import Spinner from "../layout/Spinner";
import { addNewMessage } from "../../actions/message";

const CreateMessage = ({ setAlert, removeAlerts, loading, addNewMessage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      removeAlerts();
    };
  }, [removeAlerts]);
  const [formData, setFormData] = useState({
    senderId: "",
    receiverId: "",
    subject: "",
    message: "",
  });

  const { senderId, receiverId, subject, message } = formData;

  const runValidations = () => {
    if (senderId === "0") {
      setAlert("please select a sender id", "danger");
      return false;
    }
    if (receiverId === "0") {
      setAlert("please select a receiver id", "danger");
    } else if (receiverId === senderId) {
      setAlert("you cant send a message to yourself !!!", "danger");
      return false;
    }
    if (subject === "") {
      setAlert("subject field cannot be blank", "danger");
      return false;
    }
    if (message === "") {
      setAlert("message field cannot be blank", "danger");
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    removeAlerts();
    const isValid = runValidations();
    window.scrollTo(0, 0);
    if (isValid) await addNewMessage(formData);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      {!loading ? (
        <Container>
          {" "}
          <PrimaryText>Create A Message</PrimaryText>
          <Description>
            Let's get some information to create a new message ...
          </Description>
          <form>
            <FormDesc>Sender Id</FormDesc>{" "}
            <FormGroup>
              <Input
                type="text"
                placeholder="write the sender id here ..."
                name="senderId"
                value={senderId}
                onChange={(e) => onChange(e)}
              />
            </FormGroup>
            <FormDesc>Receiver Id</FormDesc>
            <FormGroup>
              <Input
                type="text"
                placeholder="write the receiver id here ..."
                name="receiverId"
                value={receiverId}
                onChange={(e) => onChange(e)}
              />
            </FormGroup>{" "}
            <FormDesc>Subject</FormDesc>
            <FormGroup>
              <Input
                type="text"
                placeholder="write the subject here ..."
                name="subject"
                value={subject}
                onChange={(e) => onChange(e)}
              />
            </FormGroup>
            <FormDesc>Message</FormDesc>
            <FormGroup>
              <TextArea
                placeholder="Enter your message here ... Smilies are fun to read :)"
                name="message"
                value={message}
                onChange={(e) => onChange(e)}
              ></TextArea>
            </FormGroup>
            <Button type="submit" onClick={(e) => onSubmit(e)}>
              Submit
            </Button>
            <Link
              to={{ pathname: "/view-messages", state: { id: senderId } }}
            >
              View Messages
            </Link>
          </form>
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  loading: state.users.loading,
});

export default connect(mapStateToProps, {
  setAlert,
  removeAlerts,
  addNewMessage,
})(CreateMessage);
