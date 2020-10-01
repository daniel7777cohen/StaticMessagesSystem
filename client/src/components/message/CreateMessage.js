import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { setAlert, removeAlerts } from "../../actions/alert";
import {
  Container,
  PrimaryText,
  Description,
  FormText,
  FormGroup,
  Select,
  TextArea,
  Input,
  Button,
  Link,
} from "./styles";

const CreateMessage = ({ setAlert, removeAlerts }) => {
  useEffect(() => {
    return () => {
      removeAlerts();
    };
  }, [removeAlerts]);
  const [formData, setFormData] = useState({
    senderId: "0",
    recieverId: "0",
    subject: "",
    message: "",
  });

  const { senderId, recieverId, subject, message } = formData;

  const runValidations = () => {
    if (senderId === "0") {
      setAlert("please select a sender id", "danger");
      return false;
    }
    if (recieverId === "0") {
      setAlert("please select a receiver id", "danger");
    } else if (recieverId === senderId) {
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
    window.scrollTo(0, 0);
    return true;
  };

  const onSubmit = async (e) => {
    removeAlerts();
    const isValid = runValidations();
    e.preventDefault();
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      {" "}
      <PrimaryText>Create A Message</PrimaryText>
      <Description>
        Let's get some information to create a new message ...
      </Description>
      <form>
        <FormGroup>
          <Select
            name="senderId"
            value={senderId}
            onChange={(e) => onChange(e)}
          >
            <option value="0">Select Sender Id</option>
            <option value="first id">first id</option>
            <option value="second id">second id</option>
          </Select>
          <Select
            name="recieverId"
            value={recieverId}
            onChange={(e) => onChange(e)}
          >
            <option value="0">Select Reciever Id</option>
            <option value="first id">first id</option>
            <option value="second id">second id</option>
          </Select>
        </FormGroup>
        <FormText>Subject</FormText>
        <FormGroup>
          <Input
            type="text"
            placeholder="write the subject here ..."
            name="subject"
            value={subject}
            onChange={(e) => onChange(e)}
          />
        </FormGroup>
        <FormText>Message</FormText>
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
        <Link to="/view-messages">Go Back</Link>
      </form>
    </Container>
  );
};

export default connect(null, { setAlert, removeAlerts })(CreateMessage);
