import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar className="full_dark sticky-top" expand="lg">
      <Container>
        <NavLink to="/" className="fs-2 fw-bold text-dark nav-link">
          Laptop Mart
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="w-100 d-block d-md-flex justify-content-end align-items-center">
            <NavLink to="/" className="pe-3 text-dark nav-link">
              Home
            </NavLink>
            <NavLink to="/services" className="pe-3 text-dark nav-link">
              Services
            </NavLink>
            <NavLink to="/blogs" className="pe-3 text-dark nav-link">
              Blogs
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
