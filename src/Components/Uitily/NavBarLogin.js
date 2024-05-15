import React from "react";
import { Navbar, Container, FormControl, Nav } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { NavLink } from "react-router-dom";
const NavBarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img src={logo} className="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <NavLink
              to="/login"
              className="nav-text nav-link d-flex mt-3 justify-content-center"
            >
              <img src={login} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>دخول</p>
            </NavLink>
            <NavLink
              to="/cart"
              className="nav-text nav-link d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
