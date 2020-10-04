import styled from "styled-components";
import { Link as Link_ } from "react-router-dom";
import { Card as Card_ } from "antd";
import { SmileOutlined } from "@ant-design/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1rem;
  font-weight: 300;
  border: 1px solid #ccc;
  border-radius: ${({ isDisplayPage }) => (isDisplayPage ? "25px" : "0")};

  @media (max-width: 480px) {
    text-align: ${({ isDisplayPage }) => (isDisplayPage ? "center" : "left")};
  }
  @media (max-width: 768px) {
    text-align: ${({ isDisplayPage }) => (isDisplayPage ? "center" : "left")};
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1rem;
  font-weight: 300;
  border: 1px solid #ccc;
`;

export const FormGroup = styled.div`
  margin: 1.2rem 0;
`;

export const FormDesc = styled.h3`
  display: block;
  margin-top: 2rem;
  color: #888;
  @media (max-width: 480px) {
    align-self: center;
  }
  @media (max-width: 768px) {
    align-self: center;    
  }
`;
export const PrimaryText = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #1890ff;
  align-self: center;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.div`
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
  background-color: #1890ff;
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
  font-family: "Raleway", sans-serif;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
    color: #1890ff;
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

export const LandingBackgroundImg = styled.img`
  height: 100vh;
  width: 100%;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  font-size: large;
  @media (max-width: 480px) {
    align-items: center;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const P = styled.p`
  @media (max-width: 480px) {
    align-items: center;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
  font-size: x-large;
`;

export const NavSpan = styled.span`
  font-weight: bold;
`;

export const AppContainer = styled.section`
  padding: 0 2rem;
  margin-bottom: 0.1rem;
  margin-top: 5rem;
`;

export const NavUl = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 0.5rem;
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
  border-bottom: solid 1px;
  opacity: 0.9;
  background-color: black;

  a {
    color: #fff;
    padding: 0.45rem;
    margin: 0 0.25rem;
    &:hover {
      color: #1890ff;
    }
  }

  h1 {
    margin-bottom: 1rem;
  }
`;

export const CardBody = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FormCentered = styled.form`
  display: flex;
  flex-direction: column;
`;

export const GuideText = styled.div`
  font-size: medium;
  font-weight: 400;
  font-style: oblique;
  margin-top: 0.5rem;
`;
