import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import AnimatedCard from "../../components/Animated card";

export default function Home() {
  const cardStyle = {
    borderRadius: "10px",
    border: "1px solid #eef2f6",
    boxShadow: "0 6px 18px rgba(22,37,68,0.04)",
    height: "100%",
    background: "white",
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
     <Carousel
  controls={true}
  indicators={true}
  interval={3000}
  pause="hover"
  fade
>

  {/* ---------------- SLIDE 1 (TEXT LEFT) ---------------- */}
  <Carousel.Item>
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "row",            // TEXT LEFT, IMAGE RIGHT
        alignItems: "center",
        padding: "120px 60px",
        color: "white",
      }}
    >
      {/* TEXT (LEFT) */}
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "18px" }}>
          Transform The Way You Manage Students
        </h1>

        <p style={{ fontSize: "1.25rem", opacity: 0.9, marginBottom: "28px" }}>
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
            <Button variant="light" style={{ padding: "12px 24px", borderRadius: "8px" }}>
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </Carousel.Item>

  {/* ---------------- SLIDE 2 (TEXT RIGHT) ---------------- */}
  <Carousel.Item>
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.10), rgba(0,0,0,0.10)), url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "row-reverse",     // TEXT RIGHT, IMAGE LEFT
        alignItems: "center",
        padding: "120px 60px",
        color: "white",
      }}
    >
      {/* TEXT (RIGHT) */}
      <div style={{ maxWidth: "600px", textAlign: "right" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "18px" }}>
          Engage Students Anytime, Anywhere
        </h1>

        <p style={{ fontSize: "1.25rem", opacity: 0.9, marginBottom: "28px" }}>
          Real-time access to grades, attendance, notices and more — from any device.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
        >
          <Link to="/contact">
            <Button
              style={{
                backgroundColor: "#ff5a3c",
                borderColor: "#ff5a3c",
                padding: "12px 24px",
                borderRadius: "8px",
              }}
            >
              Contact Us
            </Button>
          </Link>

          <Link to="/about">
            <Button variant="light" style={{ padding: "12px 24px", borderRadius: "8px" }}>
              Explore Features
            </Button>
          </Link>
        </div>
      </div>

      
    </div>
  </Carousel.Item>
</Carousel>


      {/* ---------------- MAIN CONTENT ---------------- */}
      <Container style={{ paddingTop: 24, paddingBottom: 40 }}>
        {/* FEATURES */}
        <Row className="g-4 mb-4">
          <Col md={4}>
            <Card style={cardStyle}>
              <AnimatedCard>
                <div style={featureTitle}>Centralized Data</div>
                <div style={featureText}>
                  Store personal details, attendance, marks and documents in one secure place.
                </div>
              </AnimatedCard>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={cardStyle}>
              <AnimatedCard>
                <div style={featureTitle}>Automated Administration</div>
                <div style={featureText}>
                  Automate admissions, fee processing, timetables, and generate reports.
                </div>
              </AnimatedCard>
            </Card>
          </Col>

          <Col md={4}>
            <Card style={cardStyle}>
              <AnimatedCard>
                <div style={featureTitle}>Student Portals</div>
                <div style={featureText}>
                  Students can check grades, notices, and fee status anytime.
                </div>
              </AnimatedCard>
            </Card>
          </Col>
        </Row>

        {/* STATS */}
        <Row className="g-4 align-items-stretch mb-4">
          <Col md={4}>
            <div style={statsCard}>
              <AnimatedCard>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#21304a" }}>
                  98%
                </div>
                <div style={{ color: "#666" }}>Admin time saved</div>
              </AnimatedCard>
            </div>
          </Col>

          <Col md={4}>
            <div style={statsCard}>
              <AnimatedCard>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#21304a" }}>
                  24/7
                </div>
                <div style={{ color: "#666" }}>Student access</div>
              </AnimatedCard>
            </div>
          </Col>

          <Col md={4}>
            <div style={statsCard}>
              <AnimatedCard>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#21304a" }}>
                  Real-time
                </div>
                <div style={{ color: "#666" }}>Analytics & reports</div>
              </AnimatedCard>
            </div>
          </Col>
        </Row>

        {/* WHAT WE DELIVER */}
        <Row className="align-items-center g-4 ">
          <Col md={8}>
            <Card style={cardStyle}>
              <AnimatedCard>
                <h5 style={{ marginBottom: 12, color: "#1f3d7a" }}>
                  What we deliver
                </h5>
                <p style={{ color: "#444", marginBottom: 0 }}>
                  A secure, intuitive platform to manage admissions, attendance,
                  assessments, fees and communication — improving outcomes and
                  helping parents stay informed.
                </p>
              </AnimatedCard>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
