import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../assets/logo.png";

export default function AppNavbar() {
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "About us", to: "/about" },
    { label: "Contact us", to: "/contact" },
    { label: "Login/Register", to: "/auth" },
  ];

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "#1b1f24",
        padding: "0.6rem 1rem",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
      variant="dark"
      sticky="top"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "40px", width: "40px", marginRight: "10px" }}
          />
          <span
            style={{ color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}
          >
            Techgenius Academy
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: "20px" }}>
            {links.map((link) => (
              <Nav.Link
                key={link.to}
                as={Link}
                to={link.to}
                style={{
                  color: location.pathname === link.to ? "#3b82f6" : "#fff",
                  fontWeight: 500,
                  padding: "0.5rem 0",
                  borderBottom:
                    location.pathname === link.to
                      ? "2px solid #3b82f6"
                      : "2px solid transparent",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    location.pathname === link.to ? "#3b82f6" : "#fff")
                }
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
