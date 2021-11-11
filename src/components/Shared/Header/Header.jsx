import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="header"
      >
        <Container>
          <Navbar.Brand className="logo">BuyCars.</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end nav-items">
            <Nav.Link as={Link} className="text-white" to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="text-white" to="/explore">
              Explore Cars
            </Nav.Link>
            {user?.email && (
              <Nav.Link as={Link} className="text-white" to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
            {user?.email ? (
              <Button onClick={logOut} className="text-white btn btn-danger">
                Logout
              </Button>
            ) : (
              <Nav.Link
                as={Link}
                className="text-white btn btn-danger"
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
