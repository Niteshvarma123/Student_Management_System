import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import AnimatedCard from "../../components/Animated card.jsx";
export default function About() {
  // Inline style objects (kept here so JSX is cleaner)
  const pageStyle = {
    minHeight: "70vh",
    paddingTop: "48px",
    paddingBottom: "48px",
    background: "linear-gradient(180deg, #ffffff 0%, #fbfbfc 100%)",
    display: "flex",
    alignItems: "flex-start",
  };

  const headerStyle = {
    color: "#1f3d7a",
    fontWeight: 700,
    fontSize: "1.8rem",
    marginBottom: "8px",
  };

  const leadStyle = {
    color: "#444",
    marginBottom: "20px",
    lineHeight: 1.4,
  };

  const cardStyle = {
    borderRadius: "12px",
    border: "1px solid #eef1f5",
    boxShadow: "0 6px 18px rgba(22, 37, 68, 0.06)",
  };

  const listItemStyle = {
    paddingLeft: "0.35rem",
    marginBottom: "10px",
    color: "#333",
  };

  const sectionTitle = {
    color: "#21304a",
    fontWeight: 700,
    fontSize: "1.05rem",
    marginBottom: "10px",
  };

  const smallNote = {
    color: "#666",
    fontSize: "0.95rem",
  };

  return (
    <Container fluid style={pageStyle}>
      <Container>
        {/* TOP BANNER */}
        <div
          style={{
            width: "100%",
            height: "260px",
            background:
              "linear-gradient(90deg, #491f7aff 0%, #7035b8ff 60%, #af63f1ff 100%)",
            borderRadius: "16px",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 40px",
            color: "#fff",
            boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
          }}
        >
          <div>
            <h2
              style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "8px" }}
            >
              About Our Techgenius academy
            </h2>
            <p style={{ fontSize: "1rem", opacity: 0.9 }}>
              Modern. Secure. Efficient. A platform built for education
              excellence.
            </p>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
            alt="about"
            style={{ width: "140px", opacity: 0.95 }}
          />
        </div>

        {/* Page header */}
        <Row className="mb-4">
          <Col md={8}>
            <div style={headerStyle}>About Us</div>
            <div style={leadStyle}>
              We provide a modern, secure and powerful Student Management System
              — built to simplify administrative workflows, improve
              communication, and support academic excellence.
            </div>
          </Col>
        </Row>

        {/* Mission & Vision cards */}
        <Row className="g-4 mb-4">
          <Col lg={6} md={12}>
            <AnimatedCard>
              <h4
                style={{
                  color: "#ef4444",
                  fontWeight: 700,
                  marginBottom: "12px",
                  fontSize: "1.25rem",
                }}
              >
                Mission
              </h4>
              <p
                style={{ color: "#374151", lineHeight: 1.6, fontSize: "1rem" }}
              >
                To empower educational institutions by providing a
                comprehensive, digital platform that simplifies student
                lifecycle management from enrollment to graduation.
              </p>
            </AnimatedCard>
          </Col>

          <Col lg={6} md={12}>
            <AnimatedCard>
              <h4
                style={{
                  color: "#ef4444",
                  fontWeight: 700,
                  marginBottom: "12px",
                  fontSize: "1.25rem",
                }}
              >
                Vision
              </h4>
              <p
                style={{ color: "#374151", lineHeight: 1.6, fontSize: "1rem" }}
              >
                To be the leading provider of innovative student management
                solutions that enhance efficiency, improve communication, and
                support academic excellence in a digital-first world.
              </p>
            </AnimatedCard>
          </Col>
        </Row>
        <br />

        {/* What we do */}
        <Row className="g-4 mb-4">
          {/* WHAT WE DO — FULL WIDTH */}
          <Row className="mb-4">
            <Col lg={12}>
              <Card
                style={cardStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Card.Body>
                  <div style={sectionTitle}>What we do</div>
                  <ListGroup variant="flush">
                    <ListGroup.Item style={listItemStyle}>
                      <strong>Centralized Data Management:</strong> Create a
                      single, secure database for all student information,
                      including personal details, academic history, and
                      attendance records.
                    </ListGroup.Item>

                    <ListGroup.Item style={listItemStyle}>
                      <strong>Automate Administrative Tasks:</strong> Streamline
                      processes like admissions, fee collection, and report
                      generation, reducing manual effort and errors.
                    </ListGroup.Item>

                    <ListGroup.Item style={listItemStyle}>
                      <strong>Enhance Communication:</strong> Provide dedicated
                      portals for students and teachers to access real-time
                      updates, grades, and announcements.
                    </ListGroup.Item>

                    <ListGroup.Item style={listItemStyle}>
                      <strong>Provide Data Insights:</strong> Generate real-time
                      reports and analytics to help administrators make informed
                      decisions about student performance and strategy.
                    </ListGroup.Item>

                    <ListGroup.Item style={listItemStyle}>
                      <strong>Ensure Security and Compliance:</strong> Implement
                      strong security features to protect sensitive data and
                      ensure regulatory compliance.
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* BENEFITS + COMMITMENT — SIDE BY SIDE */}
          <Row className="g-4 mb-4">
            {/* Benefits for users */}
            <Col lg={6} md={12}>
              <Card
                style={cardStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Card.Body>
                  <div style={sectionTitle}>Benefits for users</div>

                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontWeight: 700, color: "#1e293b" }}>
                      For Students
                    </div>
                    <div style={smallNote}>
                      24/7 access to grades, attendance, schedules, and academic
                      records from any device.
                    </div>
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <div style={{ fontWeight: 700, color: "#1e293b" }}>
                      For Teachers
                    </div>
                    <div style={smallNote}>
                      Easy online academic updates, real-time performance
                      tracking, and streamlined communication tools.
                    </div>
                  </div>

                  <div>
                    <div style={{ fontWeight: 700, color: "#1e293b" }}>
                      For Administrators
                    </div>
                    <div style={smallNote}>
                      Reduced administrative burden, improved data accuracy, and
                      stronger decision-making support.
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Our Commitment */}
            <Col lg={6} md={12}>
              <Card
                style={cardStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Card.Body>
                  <div style={sectionTitle}>Our commitment</div>

                  <div style={{ marginBottom: "12px" }}>
                    <strong>Innovation:</strong>
                    <div style={smallNote}>
                      Continuously evolving the platform to meet the dynamic
                      needs of modern institutions.
                    </div>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <strong>Security:</strong>
                    <div style={smallNote}>
                      Protecting student data with modern encryption and secure
                      access controls.
                    </div>
                  </div>

                  <div>
                    <strong>Support:</strong>
                    <div style={smallNote}>
                      Providing reliable assistance to ensure smooth
                      implementation and long-term satisfaction.
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
}
