import React, { useState } from "react";
import {
  PrimaryText,
  Container,
  Input,
  FormDesc,
  FormGroup,
  FormContainer,
  Button,
  Smiley,
  ButtonsContainer,
} from "../styled-components/styles";
import { connect } from "react-redux";
import MessagesTabs from "../components/message/MessagesTabs";
import { getMessagesByUserId } from "../store/actions/message";
import Spinner from "../components/layout/Spinner";
import { setAlert } from "../store/actions/alert";
import { Result } from "antd";

const MessagesManager = ({
  setAlert,
  getMessagesByUserId,
  message: { loading },
}) => {
  const [userId, setUserId] = useState("");
  const [isLoadClicked, setIsLoadClicked] = useState(false);

  const handleLoad = async (e) => {
    e.preventDefault();
    if (!userId) setAlert("User id field cannot be blank", "danger");
    else {
      await getMessagesByUserId(userId);
      setIsLoadClicked(false);
    }
  };

  return (
    <>
      <Container>
        <PrimaryText>Messages Manager</PrimaryText>
        {isLoadClicked && <Spinner />}
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
          <ButtonsContainer>
            <Button
              style={{ marginRight: "1rem" }}
              onClick={(e) => {
                setIsLoadClicked(true);
                handleLoad(e);
              }}
            >
              Load
            </Button>
            <Button onClick={() => setUserId("")}>Reset</Button>
          </ButtonsContainer>
        </FormContainer>

        {!loading ? (
          <MessagesTabs />
        ) : (
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
  getMessagesByUserId,
  setAlert,
})(MessagesManager);
