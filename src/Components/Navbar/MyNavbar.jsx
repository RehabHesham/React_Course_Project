import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Posts</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="text-light btn" to="/home">
              Home
            </NavLink>
            <NavLink className="text-light btn" to="/login">
              Login
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
