import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg"  fixed="top" >
      <Container>
        <Navbar.Brand href="/"><b style={{fontSize:'30px',color:'peru'}}>Trimmer Review</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={({isActive})=>(isActive?'active-link':'link')}>
              Home
            </NavLink>
            <NavLink
              to="/reviews"
              className={({isActive})=>(isActive?'active-link':'link')}
            >
              Reviews
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({isActive})=>(isActive?'active-link':'link')}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/blogs"
              className={({isActive})=>(isActive?'active-link':'link')}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive})=>(isActive?'active-link':'link')}
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
