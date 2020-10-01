import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

const Nav = styled.nav`
  marign-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;

  a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 0.25rem;
    &:hover {
      color: #17a2b8;
    }
  }

  h1 {
    margin-bottom: 1rem;
  }
`;

const Navbar = () => {
  const guestLinks = (
    <Ul>
      <li>
        <Link to="/create-message">Send Message</Link>
      </li>
      <li>
        <Link to="/view-messages">View Messages</Link>
      </li>
    </Ul>
  );
  return (
    <Nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <FontAwesomeIcon icon={faCode} />
          StaticChatApp
        </Link>
      </h1>
      <>{guestLinks}</>
    </Nav>
  );
};

export default Navbar;
