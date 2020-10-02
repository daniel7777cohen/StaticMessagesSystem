import styled from "styled-components";
import { Link as Link_ } from "react-router-dom";
import { Card as Card_ } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import LandingBackground from "./image/LandingBackground.jpg";

export const Container = styled.div`
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

export const FormGroup = styled.div`
  margin: 1.2rem 0;
`;

export const FormText = styled.h3`
  display: block;
  margin-top: 2rem;
  color: #888;
`;

export const PrimaryText = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #17a2b8;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  font: inherit;
  color: #fff;
  display: inline-block;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  margin: 0.5rem 0;
  background: ${({ isDangerButton }) => (isDangerButton ? "red" : " #17a2b8")};
`;

export const Link = styled(Link_)`
  font: inherit;
  background: #f4f4f4;
  display: inline-block;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  margin: 0.5rem 0;
  color: #333;
`;

export const Card = styled(Card_)`
  &&& .ant-card .ant-card-bordered {
    width: 100%;
  }
  margin-bottom: 1rem;
  background-color: #f1f1f1;
  border-radius: 25px;
  font-family: cursive;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalMessages = styled.span`
  font-weight: bold;
`;

export const Smiley = styled(SmileOutlined)`
  &&& {
    color: #17a2b8;
  }
`;

export const AlertText = styled.div`
  padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: ${({ alertType }) =>
    alertType === "danger" ? "#dc3545" : " #28a745"};
  color: #fff;
  font-size: 1rem;
  line-height: 1.6;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
`;

export const AlertsContainer = styled.div``;

export const LandingBackgroundImg = styled.section`
  position: relative;
  background: url(${LandingBackground}) no-repeat center center/cover;
  height: 100vh;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  font-size: large;
`;

export const P = styled.p`
  align-self: center;
  font-size: x-large;
`;

export const NavSpan = styled.span`
  font-weight: bold;
`;

export const AppContainer = styled.section`
  max-width: 1100px;
  padding: 0 2rem;
  margin-bottom: 0.1rem;
  margin-top: 5rem;
`;


export const NavUl = styled.ul`
  display: flex;
  list-style: none;
`;

export const Nav = styled.nav`
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
  background-color:black;
  
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