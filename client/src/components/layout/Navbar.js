import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUserFriends,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { NavSpan, Nav, NavUl } from "../../styles";
import { Modal, Space } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";


const Navbar = ({ users: { usersList } }) => {
  const UsersContent = usersList.map((user) => (
        <ul key={user._id}>
          <li>name : {user.name}</li>
          <CopyToClipboard text={user._id}>
          <li>
            id : {user._id}{" "}
            <FontAwesomeIcon
              icon={faCopy}
              style={{ marginLeft: "0.2rem" }}
              size={"2x"}
            />
          </li>
          </CopyToClipboard>
        </ul>
  ));

  const Info = () => {
    Modal.info({
      title: "Static Users - For Development Only",
      content: UsersContent,
      onOk() {},
    });
  };
  const Links = (
    <NavUl>
      <li>
        <Link to="/create-message">
          <NavSpan>CREATE</NavSpan>
        </Link>
      </li>
      <li>
        <Link to="/view-messages">
          <NavSpan>VIEW</NavSpan>
        </Link>
      </li>
      {usersList && usersList.length > 0 && (
        <li>
          <Space>
            <FontAwesomeIcon
              icon={faUserFriends}
              color={"white"}
              onClick={Info}
              size={"2x"}
              style={{ marginLeft: "1rem" }}
            />
          </Space>{" "}
        </li>
      )}
    </NavUl>
  );
  return (
    <Nav>
      <h1>
        <Link to="/">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </h1>
      <>{Links}</>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(Navbar);
