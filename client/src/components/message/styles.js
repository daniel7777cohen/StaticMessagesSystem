import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link as Link_ } from "react-router-dom";
import { Card as Card_ } from "antd";

export const Container = styled.div`
  margin-top: 5rem;
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
`;

export const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  font: inherit;
  background: #17a2b8;
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
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
