import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/dreamy-cute-smart-college-girl-female-student-hipster-red-beanie-yellow-hoodie-looking-thoughtful.jpg";

export default function Home() {
  const cardStyle = {
    borderRadius: "10px",
    border: "1px solid #eef2f6",
    boxShadow: "0 6px 18px rgba(22,37,68,0.04)",
    height: "100%",
  };

  const featureTitle = {
    fontSize: "1.02rem",
    fontWeight: 700,
    color: "#1f3d7a",
    marginBottom: "6px",
  };

  const featureText = {
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: 1.45,
  };

  const statsCard = {
    borderRadius: 10,
    padding: "18px",
    textAlign: "center",
    background: "#fff",
    boxShadow: "0 6px 18px rgba(22,37,68,0.04)",
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          padding: "70px 60px",
          color: "white",
        }}
      >
        {/* Text Box */}
        <div style={{ maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              marginBottom: "18px",
              lineHeight: "1.2",
            }}
          >
            Transform The Way You Manage Students
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.6",
              marginBottom: "28px",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            A powerful, intuitive platform for managing admissions, attendance,
            communication, analytics, and student engagement — all in one place.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link to="/">
              <Button
                style={{
                  backgroundColor: "#ff5a3c",
                  borderColor: "#ff5a3c",
                  padding: "12px 24px",
                  borderRadius: "8px",
                }}
              >
                Get Started
              </Button>
            </Link>

            <Link to="/about">
              <Button
                variant="light"
                style={{
                  padding: "12px 24px",
                  borderRadius: "8px",
                }}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Container style={{ paddingTop: 24, paddingBottom: 40 }}>
        {/* FEATURES */}
        <Row className="g-4 mb-4">
          <Col md={4}>
            <Card style={cardStyle}>
              <Card.Body>
                <div style={featureTitle}>Centralized Data</div>
                <div style={featureText}>
                  Store personal details, attendance, marks and documents in one
                  secure place — accessible to authorized staff.
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={cardStyle}>
              <Card.Body>
                <div style={featureTitle}>Automated Administration</div>
                <div style={featureText}>
                  Automate admissions, fee processing, timetables, and report
                  generation — save time and reduce errors.
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={cardStyle}>
              <Card.Body>
                <div style={featureTitle}>Student Portals</div>
                <div style={featureText}>
                  Give students real-time access to grades, notices and fee
                  statements from any device.
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* STATS */}
        <Row className="g-4 align-items-stretch mb-4">
          <Col md={4}>
            <div style={statsCard}>
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#21304a",
                }}
              >
                98%
              </div>
              <div style={{ color: "#666" }}>
                Admin time saved on routine tasks
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div style={statsCard}>
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#21304a",
                }}
              >
                24/7
              </div>
              <div style={{ color: "#666" }}>
                Student access from any device
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div style={statsCard}>
              <div
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "#21304a",
                }}
              >
                Real-time
              </div>
              <div style={{ color: "#666" }}>
                Reports & analytics for smarter decisions
              </div>
            </div>
          </Col>
        </Row>

        {/* WHAT WE DELIVER */}
        <Row className="align-items-center g-4 ">
          <Col md={8}>
            <Card style={cardStyle}>
              <Card.Body>
                <h5 style={{ marginBottom: 12, color: "#1f3d7a" }}>
                  What we deliver
                </h5>
                <p style={{ color: "#444", marginBottom: 0 }}>
                  A secure, intuitive platform to manage the entire student
                  lifecycle — enrollment, attendance, assessments, fees and
                  communication. We prioritize data privacy, ease of use, and
                  meaningful analytics so administrators can improve outcomes
                  and parents can stay informed.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
