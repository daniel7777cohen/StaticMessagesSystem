import React from "react";
import { Card, CardsContainer, Button, Li, P } from "../../styles";
import { deleteMessage } from "../../actions/message";
import { connect } from "react-redux";

const MessagesDisplay = ({ messages, type, deleteMessage }) => {
  const handleDelete = async (messageId) => {
    await deleteMessage(messageId);
  };
  return (
    <CardsContainer>
      {messages.map((message, index) => {
        return (
          <Card
            key={index}
            title={`User Id : ${
              type === "received"
                ? `${message.senderId}`
                : `${message.receiverId}`
            }  `}
            headStyle={{ borderBottom: "1px solid #c7c7c7" }}
          >
            <>
              {" "}
              <div>
                <Li>
                  {<P>{message.subject}</P>}
                  <ul>{message.message}</ul>
                  <ul>{new Date(message.createdAt).toLocaleString()}</ul>
                </Li>
              </div>
              <Button
                onClick={() => {
                  handleDelete(message._id);
                }}
                isDangerButton
              >
                Delete
              </Button>
            </>
          </Card>
        );
      })}
    </CardsContainer>
  );
};

export default connect(null, { deleteMessage })(MessagesDisplay);
