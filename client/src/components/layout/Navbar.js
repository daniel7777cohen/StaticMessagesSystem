import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Popover } from "antd";
import { NavSpan ,Nav,NavUl} from "../../styles";



const Navbar = ({ users: { usersList } }) => {
  const UsersContent = usersList.map((user) => (
    <ul key={user._id}>
      <li>name : {user.name}</li>
      <li>id : {user._id}</li>
    </ul>
  ));

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
          <Popover
            content={UsersContent}
            title="Static Users - For Development Only"
          >
            <FontAwesomeIcon icon={faUserFriends} color={"white"}/>
          </Popover>
        </li>
      )}
    </NavUl>
  );
  return (
    <Nav>
      <h1>
        <Link to="/">
          <FontAwesomeIcon icon={faEnvelope} /> Messages App
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
