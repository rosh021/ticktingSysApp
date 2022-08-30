import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../Layout.css";

export const Header = () => {
  return (
    <Navbar className="navbar" expand="md">
      <Container>
        <Navbar.Brand className="nav-link">PORTAL</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link href="#home" className="nav-link">
              Login
            </Nav.Link>
            <Nav.Link href="#features" className="nav-link">
              Register
            </Nav.Link>
            {/* <Nav.Link href="#pricing">Pricin</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
