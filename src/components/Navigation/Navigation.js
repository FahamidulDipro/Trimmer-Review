import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Trimmer Review</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"mx-2 text-dark text-decoration-none"}>
              Home
            </NavLink>
            <NavLink
              to="/reviews"
              className={"mx-2 text-dark text-decoration-none"}
            >
              Reviews
            </NavLink>
            <NavLink
              to="/dashboard"
              className={"mx-2 text-dark text-decoration-none"}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/blogs"
              className={"mx-2 text-dark text-decoration-none"}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className={"mx-2 text-dark text-decoration-none"}
            >
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
