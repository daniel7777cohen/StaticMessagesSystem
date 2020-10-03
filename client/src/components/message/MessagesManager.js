import React, { useState, useEffect } from "react";
import {
  PrimaryText,
  Container,
  Input,
  FormDesc,
  FormGroup,
  FormCentered,
} from "../../styles";
import { connect } from "react-redux";
import MessagesTabs from "./MessagesTab";
import { getMessages } from "../../actions/message";
import Spinner from "../layout/Spinner";
import { withRouter, useLocation } from "react-router-dom";

const MessagesManager = ({ getMessages, message: { messages, loading } }) => {
  const { state } = useLocation();
  useEffect(() => {
    getMessages();
  }, [getMessages]);
  const [userId, setUserId] = useState(state ? state.id : "");

  return (
    <>
      {!loading ? (
        <Container>
          <PrimaryText>Messages Manager</PrimaryText>
          <FormCentered>
            <FormDesc>User Id</FormDesc>
            <FormGroup>
              <Input
                isDisplayPage
                type="text"
                placeholder="write your id here ..."
                name="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </FormGroup>
          </FormCentered>
          <MessagesTabs messages={messages} userId={userId} />
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps, {
  getMessages,
})(withRouter(MessagesManager));
