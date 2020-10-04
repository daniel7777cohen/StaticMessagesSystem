import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import MessagesDisplay from "./MessageDisplay";
import { getSortedMessagesByUserId } from "./helper";
import { Result } from "antd";
import { TotalMessages, Smiley, P } from "../../styled-components/styles";

const MessagesTabs = ({ messages, userId }) => {
  const { TabPane } = Tabs;
  const [sent, setSent] = useState([]);
  const [received, setReceived] = useState([]);

  useEffect(() => {
    setReceived(getSortedMessagesByUserId(messages, userId, "receiverId"));
    setSent(getSortedMessagesByUserId(messages, userId, "senderId"));
  }, [messages, userId]);

  return (
    <>
      {userId ? (
        <Tabs
          style={{ justifyContent: "center" }}
          defaultActiveKey="sent"
        >
          <TabPane
            tab={<TotalMessages>Sent : {sent.length}</TotalMessages>}
            key="sent"
          >
            {sent.length > 0 ? (
              <MessagesDisplay messages={sent} type={"sent"}></MessagesDisplay>
            ) : (
              <P>
                No sent messages. <br/> Check the id, or create a new message.
              </P>
            )}
          </TabPane>
          <TabPane
            tab={<TotalMessages>Received : {received.length}</TotalMessages>}
            key="received"
          >
            {received.length > 0 ? (
              <MessagesDisplay
                messages={received}
                type={"received"}
              ></MessagesDisplay>
            ) : (
              <P>
                No received messages. <br/> Check the id, or create a new
                message.
              </P>
            )}
          </TabPane>
        </Tabs>
      ) : (
        <Result
          icon={<Smiley />}
          title={"Please fill in a valid user id to view your mesages"}
        />
      )}
    </>
  );
};

export default MessagesTabs;
