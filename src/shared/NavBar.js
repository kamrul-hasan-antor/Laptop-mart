import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loadedUser, setLoadedUser] = useState([]);

  useEffect(() => {
    fetch(`https://laptop-mart-server-rho.vercel.app/user?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setLoadedUser(data));
  }, [user?.email]);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

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
            {/* <NavLink to="/services" className="pe-3 text-light nav-link">
              Brands
            </NavLink> */}
            <NavLink to="/blogs" className="pe-3 text-light nav-link">
              Blogs
            </NavLink>

            {/* {!user ? (
              ""
            ) : (
              <NavLink to="/myReviews" className="pe-3 text-primary nav-link">
                My Reviews
              </NavLink>
            )}*/}
            {loadedUser[0]?.userType === "buyer" ? (
              <NavLink to="/myOrders" className="pe-3 text-light nav-link">
                My orders
              </NavLink>
            ) : (
              ""
            )}
            {loadedUser[0]?.userType === "admin" ? (
              <>
                <NavLink to="/allSelers" className="pe-3 text-light nav-link">
                  All Sellers
                </NavLink>
                <NavLink to="/allBuyers" className="pe-3 text-light nav-link">
                  All Buyers
                </NavLink>
              </>
            ) : (
              ""
            )}
            {loadedUser[0]?.userType === "seller" ? (
              <>
                <NavLink to="/addProduct" className="pe-3 text-light nav-link">
                  Add Product
                </NavLink>
                <NavLink to="/myProducts" className="pe-3 text-light nav-link">
                  My Products
                </NavLink>
              </>
            ) : (
              ""
            )}

            {user ? (
              <NavLink
                to="/login"
                onClick={handleSignOut}
                className="pe-3 text-light nav-link"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login" className="pe-3 text-light nav-link">
                Login
              </NavLink>
            )}
            {user ? (
              ""
            ) : (
              <NavLink to="/register" className="pe-3 text-light nav-link">
                Register
              </NavLink>
            )}
            <NavLink className="pe-2 fw-semibold text-light nav-link">
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
            </NavLink>
            <NavLink>{user?.category}</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
