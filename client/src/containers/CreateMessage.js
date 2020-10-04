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
import { addNewMessage, setRecentSender } from "../store/actions/message";
import { runClientValidations } from "./helper";

const CreateMessage = ({
  removeAlerts,
  loading,
  addNewMessage,
  setRecentSender,
  recentSenderId,
}) => {
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
    if (isClienValidation) {
      await addNewMessage(formData);
      setRecentSender(senderId);
      setFormData({ senderId: "", receiverId: "", subject: "", message: "" });
    }
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
            <GuideText>* Use the users icon and pick a valid id.</GuideText>
          </Description>
          <form>
            {messageTextFormFields.map((formField) => {
              const { type, name, placeholder, field, label } = formField;
              return (
                <>
                  <FormDesc>{label}</FormDesc>
                  <FormGroup>
                    <Input
                      type={type}
                      name={name}
                      onChange={(e) => onChange(e)}
                      placeholder={placeholder}
                      value={formData[field]}
                    />
                  </FormGroup>
                </>
              );
            })}
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
              to={{ pathname: "/view-messages", state: { id: recentSenderId } }}
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
  recentSenderId: state.message.recentSenderId,
});

export default connect(mapStateToProps, {
  removeAlerts,
  addNewMessage,
  setRecentSender,
})(CreateMessage);
