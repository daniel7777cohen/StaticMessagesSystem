import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faEnvelope,
  faUserFriends,
  faCopy,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { NavSpan, Nav, NavUl } from "../../styled-components/styles";
import { Modal, Space } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { logout } from "../../store/actions/auth";

const Navbar = ({ users: { usersList }, logout, isAuthenticated }) => {

  
  const Users = () => (
    <>
      {usersList && usersList.length > 0 && (
        <li>
          <Space>
            <FontAwesomeIcon
              icon={faUserFriends}
              color={"white"}
              onClick={Info}
              size={"2x"}
              style={{ marginRight: "0.2rem" }}
            />
          </Space>{" "}
        </li>
      )}
    </>
  );

  const Info = () => {
    Modal.info({
      title: "Static Users - For Development Only",
      content: UsersContent,
    });
  };

  const UsersContent = usersList.map((user) => (
    <ul key={user._id}>
      <li>name : {user.name}</li>
      <li>email : {user.email}</li>

      <CopyToClipboard text={user._id}>
        <li
          onClick={() =>
            window.alert(`${user.name}'s id was coppied to clipboard`)
          }
        >
          id : {user._id}{" "}
          <FontAwesomeIcon
            icon={faCopy}
            style={{ marginLeft: "0.2rem" }}
            size={"1x"}
          />
        </li>
      </CopyToClipboard>
    </ul>
  ));

  
  const Links = (
    <NavUl>
      <li>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          color="white"
          style={{ marginRight: "-0.6rem" }}
          size="sm"
        />
        <Link onClick={logout} to="/login">
          <NavSpan>LOGOUT</NavSpan>
        </Link>
      </li>
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
    </NavUl>
  );



  return (
    <Nav>
      <h1>
        <Link to="/">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="1x"
            style={{ marginTop: "0.8rem" }}
          />
        </Link>
      </h1>
      {Users()}
      <>
        {isAuthenticated ? (
          Links
        ) : (
          <Link to="/login">
            <NavSpan>LOGIN</NavSpan>
            <FontAwesomeIcon
              icon={faSignInAlt}
              style={{ marginLeft: "0.1rem" }}
            />
          </Link>
        )}
      </>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
