import React, { useState, useEffect } from "react";
import {
  PrimaryText,
  Container,
  Input,
  FormDesc,
  FormGroup,
  FormContainer,
  Button,
  Smiley,
} from "../styled-components/styles";
import { connect } from "react-redux";
import MessagesTabs from "../components/message/MessagesTabs";
import {
  deleteRecentSender,
  getMessagesByUserId,
} from "../store/actions/message";
import Spinner from "../components/layout/Spinner";
import { withRouter, useLocation } from "react-router-dom";
import { setAlert } from "../store/actions/alert";
import { Result } from "antd";

const MessagesManager = ({
  deleteRecentSender,
  setAlert,
  getMessagesByUserId,
  message: { loading },
}) => {
  const { state } = useLocation();
  useEffect(() => {
    deleteRecentSender();
  }, [setAlert, deleteRecentSender]);
  const [userId, setUserId] = useState(state ? state.id : "");

  const handleLoadMessages = async (e) => {
    e.preventDefault();
    if (!userId) setAlert("User id field cannot be blank", "danger");
    else {
      await getMessagesByUserId(userId);
    }
  };

  return (
    <>
      <Container>
        <PrimaryText>Messages Manager</PrimaryText>
        <FormContainer>
          <FormDesc isDisplayPage>User Id</FormDesc>

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
          <Button
            style={{ marginRight: "1rem" }}
            onClick={(e) => {
              handleLoadMessages(e);
            }}
          >
            Load
          </Button>
          <Button onClick={() => setUserId("")}>Reset</Button>
        </FormContainer>

        {!loading ? <MessagesTabs userId={userId} />: (
        <Result
          icon={<Smiley />}
          title={
            "Please fill in a valid user id , and press the Load button to view your mesages"
          }
        />
      )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps, {
  deleteRecentSender,
  getMessagesByUserId,
  setAlert,
})(withRouter(MessagesManager));
