import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { removeAlerts } from "../store/actions/alert";
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
  GuideText,
} from "../styled-components/styles";
import Spinner from "../components/layout/Spinner";
import { addNewMessage } from "../store/actions/message";
import { runClientValidations } from "./helper";

const CreateMessage = ({ removeAlerts, loading, addNewMessage }) => {
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

  const { senderId, message } = formData;

  const messageTextFormFields = [
    {
      label: "Sender Id",
      field: "senderId",
      placeholder: "write the sender id here ...",
      name: "senderId",
    },
    {
      label: "Receiver Id",
      field: "receiverId",
      placeholder: "write the receiver id here ...",
      name: "receiverId",
    },
    {
      label: "Subject",
      field: "subject",
      placeholder: "write the subject here ...",
      name: "subject",
    },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();
    removeAlerts();
    const isClienValidation = runClientValidations(formData);
    window.scrollTo(0, 0);
    if (isClienValidation) await addNewMessage(formData);
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
            <GuideText>
              * Use the users icon and pick a valid id.
            </GuideText>
          </Description>
          <form>
            {messageTextFormFields.map((FormField) => (
              <>
                <FormDesc>{FormField.label}</FormDesc>
                <FormGroup>
                  <Input
                    type={FormField.type}
                    name={FormField.name}
                    onChange={(e) => onChange(e)}
                    placeholder={FormField.placeholder}
                  />
                </FormGroup>
              </>
            ))}
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
            <Link to={{ pathname: "/view-messages", state: { id: senderId } }}>
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
  removeAlerts,
  addNewMessage,
})(CreateMessage);
