import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import MessagesDisplay from "./MessageDisplay";
import { getReceivedMessages, getSentMessages } from "./helper";
import { Result } from "antd";
import { TotalMessages, Smiley } from "../../styles";

const MessagesTabs = ({ messages, userId }) => {
  const { TabPane } = Tabs;
  const [sent, setSent] = useState([]);
  const [received, setReceived] = useState([]);

  useEffect(() => {
    setReceived(getReceivedMessages(messages, userId));
    setSent(getSentMessages(messages, userId));
  }, [messages, userId]);
  function callback(key) {}

  return (
    <>
      {userId ? (
          <Tabs style={{justifyContent:"center"}} defaultActiveKey="sent" onChange={callback}>
            <TabPane
              tab={<TotalMessages>Sent : {sent.length}</TotalMessages>}
              key="sent"
            >
              {sent.length > 0 ? (
                <MessagesDisplay
                  messages={sent}
                  type={"sent"}
                ></MessagesDisplay>
              ) : (
                <div>There are no sent messages </div>
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
                <div>There are no received Messages </div>
              )}
            </TabPane>
          </Tabs>
      ) : (
        <Result
          icon={<Smiley />}
          title={"Please Fill in a valid user id to view your mesages"}
        />
      )}
    </>
  );
};

export default MessagesTabs;
