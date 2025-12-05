import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

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

  const highlightTitle = {
    color: "#ff5a3c",
    fontWeight: 700,
    fontSize: "1.1rem",
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
            <Card style={cardStyle}>
              <Card.Body>
                <div style={highlightTitle}>Mission</div>
                <div style={{ marginTop: "10px", color: "#333", lineHeight: 1.5 }}>
                  To empower educational institutions by providing a comprehensive,
                  digital platform that simplifies student lifecycle management from
                  enrollment to graduation.
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12}>
            <Card style={cardStyle}>
              <Card.Body>
                <div style={highlightTitle}>Vision</div>
                <div style={{ marginTop: "10px", color: "#333", lineHeight: 1.5 }}>
                  To be the leading provider of innovative student management solutions
                  that enhance efficiency, improve communication, and support academic
                  excellence in a digital-first world.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* What we do */}
        <Row className="g-4 mb-4">
          <Col lg={7} md={12}>
            <Card style={cardStyle}>
              <Card.Body>
                <div style={sectionTitle}>What we do</div>
                <ListGroup variant="flush">
                  <ListGroup.Item style={listItemStyle}>
                    <strong>Centralized Data Management:</strong> Create a single,
                    secure database for all student information, including personal details,
                    academic history, and attendance records.
                  </ListGroup.Item>

                  <ListGroup.Item style={listItemStyle}>
                    <strong>Automate Administrative Tasks:</strong> Streamline processes like
                    admissions, fee collection, and report generation, reducing manual effort
                    and errors.
                  </ListGroup.Item>

                  <ListGroup.Item style={listItemStyle}>
                    <strong>Enhance Communication:</strong> Provide dedicated portals for students
                    and parents to access real-time updates, grades, and announcements.
                  </ListGroup.Item>

                  <ListGroup.Item style={listItemStyle}>
                    <strong>Provide Data Insights:</strong> Generate real-time reports and analytics
                    to help administrators make informed decisions about student performance and
                    institutional strategy.
                  </ListGroup.Item>

                  <ListGroup.Item style={listItemStyle}>
                    <strong>Ensure Security and Compliance:</strong> Implement robust security
                    features to protect sensitive data and ensure compliance with relevant regulations.
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          {/* Benefits & Commitment */}
          <Col lg={5} md={12}>
            <Card style={cardStyle} className="mb-3">
              <Card.Body>
                <div style={sectionTitle}>Benefits for users</div>

                <div style={{ marginBottom: "10px" }}>
                  <div style={{ fontWeight: 700, color: "#2b4170" }}>For Students</div>
                  <div style={smallNote}>
                    24/7 access to grades, attendance, schedules, and academic records from any device.
                  </div>
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <div style={{ fontWeight: 700, color: "#2b4170" }}>For Parents</div>
                  <div style={smallNote}>
                    Easy online admission processes, real-time updates on their child's progress,
                    and a simple way to manage payments.
                  </div>
                </div>

                <div style={{ marginBottom: "2px" }}>
                  <div style={{ fontWeight: 700, color: "#2b4170" }}>For Administrators</div>
                  <div style={smallNote}>
                    Reduced administrative burden, improved data accuracy, and valuable insights to
                    enhance institutional effectiveness.
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card style={cardStyle}>
              <Card.Body>
                <div style={sectionTitle}>Our commitment</div>

                <div style={{ marginBottom: "8px" }}>
                  <strong>Innovation:</strong>
                  <div style={smallNote}>
                    Continuously evolving the platform to meet the dynamic needs of modern education.
                  </div>
                </div>

                <div style={{ marginBottom: "8px" }}>
                  <strong>Security:</strong>
                  <div style={smallNote}>
                    Prioritizing the security and privacy of student data through advanced encryption and access controls.
                  </div>
                </div>

                <div>
                  <strong>Support:</strong>
                  <div style={smallNote}>
                    Providing comprehensive support to ensure seamless implementation and ongoing user satisfaction.
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
