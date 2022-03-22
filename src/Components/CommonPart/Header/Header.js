import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/Logo.svg";

const Header = () => {
  return (
    <div className="nav-part">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 nav-menu"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to="/home"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "goldenrod" : "white",
                  };
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "goldenrod" : "white",
                  };
                }}
              >
                Shop
              </NavLink>
              <NavLink
                to="/order"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "goldenrod" : "white",
                  };
                }}
              >
                Order Review
              </NavLink>
              <NavLink
                to="/inventory"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "goldenrod" : "white",
                  };
                }}
              >
                Manage Inventory
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
