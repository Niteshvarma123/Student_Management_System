import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../assets/logo.png";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#333333" }} variant="dark">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "20%",
              marginRight: "10px",
            }}
          />
          <span style={{ color: "#F9F9F9", fontWeight: "bold" }}>
            Student MS
          </span>
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: "#F9F9F9" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#F9F9F9" }}>
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: "#F9F9F9" }}>
              Contact us
            </Nav.Link>
            <Nav.Link as={Link} to="/auth" style={{ color: "#F9F9F9" }}>
              Login/Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
