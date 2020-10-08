import React, { useState, useEffect, Fragment } from "react";

import { connect } from "react-redux";
import {
  Container,
  PrimaryText,
  SecondaryText,
  FormDesc,
  FormGroup,
  TextArea,
  Input,
  Button,
  GuideText,
} from "../styled-components/styles";
import Spinner from "../components/layout/Spinner";
import { addNewMessage } from "../store/actions/message";
import { createFormValidations } from "./helper";

const CreateMessage = ({ loading, addNewMessage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    senderId: "",
    receiverId: "",
    subject: "",
    message: "",
  });

  const { message } = formData;

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
    const isFormValid = createFormValidations(formData);
    window.scrollTo(0, 0);
    if (isFormValid) {
      const isAddSuccess = await addNewMessage(formData);
      if (isAddSuccess) {
        setFormData({ senderId: "", receiverId: "", subject: "", message: "" });
      }
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
          <SecondaryText>
            Let's get some information to create a new message ...
            <GuideText>* Use the users icon and pick a valid id.</GuideText>
          </SecondaryText>
          <form>
            {messageTextFormFields.map((formField, index) => {
              const { type, name, placeholder, field, label } = formField;
              return (
                <Fragment key={index}>
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
                </Fragment>
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
            <Button onClick={(e) => onSubmit(e)}>
              Submit
            </Button>
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
  addNewMessage,
})(CreateMessage);
