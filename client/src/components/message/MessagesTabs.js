import React from "react";
import { Tabs } from "antd";
import MessagesDisplay from "./MessageDisplay";
import { TotalMessages } from "../../styled-components/styles";
import { connect } from "react-redux";
import { Result } from "antd";
import { deleteMessage } from "../../store/actions/message";

const MessagesTabs = ({ message: { messages }, username, deleteMessage }) => {
  const { TabPane } = Tabs;
  const { sent, received } = messages;

  const handleDelete = async (messageId, type) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      await deleteMessage(messageId, type);
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      {sent.length > 0 || received.length > 0 ? (
        <Tabs style={{ justifyContent: "center" }} defaultActiveKey="sent">
          <TabPane
            tab={<TotalMessages>Sent : {sent.length}</TotalMessages>}
            key="sent"
          >
            <MessagesDisplay
              messages={sent}
              type={"sent"}
              handleDelete={handleDelete}
            ></MessagesDisplay>
          </TabPane>
          <TabPane
            tab={<TotalMessages>Received : {received.length}</TotalMessages>}
            key="received"
          >
            <MessagesDisplay
              messages={received}
              type={"received"}
              handleDelete={handleDelete}
            ></MessagesDisplay>
          </TabPane>
        </Tabs>
      ) : (
        <Result
          icon={null}
          title={`User ${username} has no messages to display. To create one , press the CREATE tab`}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  message: state.message,
  username: state.auth.user.name,
});

export default connect(mapStateToProps, { deleteMessage })(MessagesTabs);
