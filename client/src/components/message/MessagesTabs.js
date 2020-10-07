import React from "react";
import { Tabs } from "antd";
import MessagesDisplay from "./MessageDisplay";
import { TotalMessages } from "../../styled-components/styles";
import { connect } from "react-redux";
import { Result } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const MessagesTabs = ({ message: { loading, messages }, userId }) => {
  const { TabPane } = Tabs;
  const { sent, received } = messages;

  return (
    <>
      {sent.length > 0 || received.length > 0 ? (
        <Tabs style={{ justifyContent: "center" }} defaultActiveKey="sent">
          <TabPane
            tab={<TotalMessages>Sent : {sent.length}</TotalMessages>}
            key="sent"
          >
            <MessagesDisplay messages={sent} type={"sent"}></MessagesDisplay>
          </TabPane>
          <TabPane
            tab={<TotalMessages>Received : {received.length}</TotalMessages>}
            key="received"
          >
            <MessagesDisplay
              messages={received}
              type={"received"}
            ></MessagesDisplay>
          </TabPane>
        </Tabs>
      ) : (
        <Result
          icon={null}
          title={`User ${userId} has no messages to display. To create one , press the CREATE tab`}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps)(MessagesTabs);
