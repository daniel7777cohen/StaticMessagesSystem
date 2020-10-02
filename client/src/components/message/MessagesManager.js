import React, { useState, useEffect } from "react";
import {
  PrimaryText,
  Container,
  Input,
  FormText,
  FormGroup,
} from "../../styles";
import { connect } from "react-redux";
import MessagesTabs from "./MessagesTab";
import { getMessages } from "../../actions/message";
import Spinner from "../layout/Spinner";

const MessagesManager = ({
  removeAlerts,
  getMessages,
  message: { messages, loading },
}) => {
  useEffect(() => {
    getMessages();
  }, [getMessages]);
  const [userId, setUserId] = useState("");

  return (
    <>
      {!loading ? (
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
          </form>
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
})(MessagesManager);
