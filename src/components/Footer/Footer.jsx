import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111", color: "#ccc" }}>
      <Container className="py-4">
        <Row>
          {/* ABOUT */}
          <Col md={4} className="mb-3">
            <h5 style={{ color: "#ff5a3c", fontWeight: "700" }}>
              Techgenius academy
            </h5>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
              A centralized platform to manage student information, academic
              records, and communication efficiently for institutions and
              students.
            </p>
          </Col>

          {/* QUICK LINKS */}
          <Col md={4} className="mb-3">
            <h6 style={{ color: "#fff", fontWeight: "600" }}>Quick Links</h6>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              <li>
                <Link to="/" style={linkStyle}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={linkStyle}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" style={linkStyle}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/auth" style={linkStyle}>
                  Login
                </Link>
              </li>
            </ul>
          </Col>

          {/* CONTACT */}
          <Col md={4} className="mb-3">
            <h6 style={{ color: "#fff", fontWeight: "600" }}>Contact Us</h6>
            <p style={{ marginBottom: "8px" }}>📧 techgenius@example.com</p>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
              📍 Flat No: 501, 5th Floor, Amsri Faust Building, Sarojini Devi
              Rd, near Reliance Digital Mall, Regimental Bazaar, Shivaji Nagar,
              Secunderabad, Telangana – 500003
            </p>
          </Col>
        </Row>

        <hr style={{ borderColor: "#333" }} />

        {/* COPYRIGHT */}
        <Row>
          <Col className="text-center">
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              © {new Date().getFullYear()} Student Management System. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const linkStyle = {
  color: "#ccc",
  textDecoration: "none",
};
