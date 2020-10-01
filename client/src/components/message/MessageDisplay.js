import React from "react";
import moment from "moment";
import { Card, CardsContainer } from "./styles";
const MessagesDisplay = ({ messages, type }) => {
  return (
    <CardsContainer>
      {messages.map((message, index) => {
        const dateString = moment
          .unix(message.createdAt)
          .format("MM/DD/YYYY hh:mm A");

        return (
          <Card key={index}
            title={`User Id : ${
              type === "received"
                ? `${message.senderId}`
                : `${message.receiverId}`
            }  `}
          >
            <>
              {" "}
              <div>
                <li >
                  {<p>{message.subject}</p>}
                  <ul>{message.message}</ul>
                  <ul>{dateString}</ul>
                </li>
              </div>
            </>
          </Card>
        );
      })}
    </CardsContainer>
  );
};

export default MessagesDisplay;
