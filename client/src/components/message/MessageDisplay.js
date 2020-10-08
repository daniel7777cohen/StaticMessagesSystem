import React from "react";
import {
  Card,
  CardsContainer,
  CardBody,
  Li,
  P,
} from "../../styled-components/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getReceiverOrSenderName } from "./helper";

const MessagesDisplay = ({
  messages,
  type,
  handleDelete
}) => {

  return (
    <>
      <CardsContainer>
        {messages.map((message, index) => {
          const name = getReceiverOrSenderName(type, message);
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
                      handleDelete(message._id,type);
                    }}
                  />{" "}
                </CardBody>
              </>
            </Card>
          );
        })}
      </CardsContainer>
    </>
  );
};



export default MessagesDisplay;
