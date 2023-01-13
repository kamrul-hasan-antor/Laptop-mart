import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar className="full_dark sticky-top" expand="lg">
      <Container>
        <NavLink to="/" className="fs-2 fw-bold text-light nav-link">
          Laptop Mart
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="w-100 d-block d-md-flex justify-content-end align-items-center">
            <NavLink to="/" className="pe-3 text-light nav-link">
              Home
            </NavLink>
            <NavLink to="/services" className="pe-3 text-light nav-link">
              Services
            </NavLink>
            <NavLink to="/blogs" className="pe-3 text-light nav-link">
              Blogs
            </NavLink>
            {/* {!user ? (
              ""
            ) : (
              <NavLink to="/myReviews" className="pe-3 text-primary nav-link">
                My Reviews
              </NavLink>
            )}
            {!user ? (
              ""
            ) : (
              <NavLink to="/addServices" className="pe-3 text-primary nav-link">
                Add Services
              </NavLink>
            )}

            {user ? (
              <NavLink
                to="/login"
                onClick={handleSignOut}
                className="pe-3 text-primary nav-link"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login" className="pe-3 text-primary nav-link">
                Login
              </NavLink>
            )}
            {user ? (
              ""
            ) : (
              <NavLink to="/register" className="pe-3 text-primary nav-link">
                Register
              </NavLink>
            )}
            <NavLink className="pe-2 fw-semibold text-primary nav-link">
              {user ? "Hi," + user.displayName : ""}
            </NavLink>
            <NavLink className="pe-1 nav-link">
              {user ? (
                <img
                  className="user_logo rounded-circle"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                ""
              )}
            </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
