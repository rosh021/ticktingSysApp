import React from "react";
import Form from "react-bootstrap/Form";
import "../Components.css";

export const RegisterForm = () => {
  return (
    <Form className="RegisterForm">
      <h4 className="RegisterForm__heading text-center">
        Register Your Account
      </h4>
      <hr />
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label className="required">First Name</Form.Label>
        <Form.Control type="text" placeholder="first name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Middle Name</Form.Label>
        <Form.Control type="text" placeholder="middle name if any" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className="required">Last Name</Form.Label>
        <Form.Control type="text" placeholder="last name" required />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className="required">Phone</Form.Label>
        <Form.Control type="number" placeholder="phone number" required />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className="required">Email Address</Form.Label>
        <Form.Control type="email" placeholder="email address" required />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className="required">Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="date of birth" required />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className="required">Residential Address</Form.Label>
        <Form.Control type="text" placeholder="your current address" required />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className="required">Postal Address</Form.Label>
        <Form.Control type="text" placeholder="your postal address" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        Select
        <Form.Select aria-label="Default select example">
          <option>Choose one </option>
          <option value="1">Admin</option>
          <option value="2">User</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className="required">Password</Form.Label>
        <Form.Control type="password" placeholder="password" required />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label className="required"> Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="confirm password" required />
      </Form.Group>

      <button className="loginBtn mt-2" type="submit">
        signUp
      </button>
      <p className="text-end mt-3">
        Already have account ? <a href="#">Login</a>
      </p>
    </Form>
  );
};
