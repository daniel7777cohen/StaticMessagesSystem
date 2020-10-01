import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import MessagesDisplay from "./MessageDisplay";
import { getReceivedMessages, getSentMessages } from "./helper";

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
    <Tabs defaultActiveKey="sent" onChange={callback}>
      <TabPane tab="Sent" key="sent">
        <MessagesDisplay messages={sent} type={"sent"}></MessagesDisplay>
      </TabPane>
      <TabPane tab="Received" key="received">
        <MessagesDisplay messages={received} type={"received"}></MessagesDisplay>{" "}
      </TabPane>
    </Tabs>
  );
};

export default MessagesTabs; //connect is needed for setting alerts ! on delete
