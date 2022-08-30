import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Components.css";

export const LoginForm = () => {
  
  return (
    <Form className="loginForm">
      <h4 className="loginForm__heading">Welcome Back</h4>
      <hr />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <a href="#">Forget your Password ?</a>
      </Form.Group>
      <button className="loginBtn" type="submit">
        SignIn
      </button>
      <p className="text-end mt-2">
        Don't have account ? <a href="#">Register</a>
      </p>
    </Form>
  );
};
