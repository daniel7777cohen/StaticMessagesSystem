import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";
import {
  Container,
  PrimaryText,
  GuideText,
  FormDesc,
  FormGroup,
  Input,
  Button,
} from "../styled-components/styles";
import { loginFormValidations } from "./helper";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setForData] = useState({
    email: "",
    password: "",
  });

  const messageTextFormFields = [
    {
      label: "Email",
      field: "email",
      placeholder: "write your email here ...",
      name: "email",
    },
    {
      label: "Password",
      field: "password",
      placeholder: "write your password here ...",
      name: "password",
    },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setForData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = loginFormValidations(formData);
    if (isFormValid) login(email.trim().toLocaleLowerCase(), password.trim());
  };

  const { email, password } = formData;

  if (isAuthenticated) return <Redirect to="/" />;
  return (
    <Container>
      {" "}
      <PrimaryText>Login</PrimaryText>
      <GuideText>
        * Use the users icon and pick a valid email address.
      </GuideText>
      <form>
        {messageTextFormFields.map((formField, index) => {
          const { type, name, placeholder, field, label } = formField;
          return (
            <Fragment key={index}>
              <FormDesc>{label}</FormDesc>
              <FormGroup>
                <Input
                  type={type}
                  name={name}
                  onChange={(e) => handleChange(e)}
                  placeholder={placeholder}
                  value={formData[field]}
                />
              </FormGroup>
            </Fragment>
          );
        })}

        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
      </form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
