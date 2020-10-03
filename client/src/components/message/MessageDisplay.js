import React from "react";
import { Card, CardsContainer, CardBody, Li, P } from "../../styles";
import { deleteMessage } from "../../actions/message";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getReceiverOrSenderName } from "./helper";

const MessagesDisplay = ({
  messages,
  type,
  deleteMessage,
  users: { usersList },
}) => {
  const handleDelete = async (messageId) => {
    if (window.confirm("Are you sure you want to delete this message?"))
      await deleteMessage(messageId);
  };

  return (
    <CardsContainer>
      {messages.map((message, index) => {
        const name = getReceiverOrSenderName(usersList, type, message);
        return (
          <Card
            key={index}
            title={name}
            headStyle={{
              borderBottom: "1px solid #c7c7c7",
            }}
          >
            <>
              {" "}
              <CardBody>
                <Li>
                  {<P>{message.subject}</P>}
                  <ul>{message.message}</ul>
                  <ul style={{ fontSize: "medium" }}>
                    {new Date(message.createdAt).toLocaleString()}
                  </ul>
                </Li>
                <FontAwesomeIcon
                  style={{ alignSelf: "center" }}
                  icon={faTrash}
                  color={"black"}
                  size={"2x"}
                  cursor="pointer"
                  onClick={() => {
                    handleDelete(message._id);
                  }}
                />{" "}
              </CardBody>
            </>
          </Card>
        );
      })}
    </CardsContainer>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { deleteMessage })(MessagesDisplay);
