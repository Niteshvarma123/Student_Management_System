// StudentDashboard.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ProgressBar,
} from "react-bootstrap";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("dashboard");
  // 'dashboard' | 'courses' | 'attendance' | 'marks' | 'payments' | 'profile'

  /** LAYOUT & SIDEBAR STYLES **/
  const userName = localStorage.getItem("userName") || "User";

  const layoutStyle = {
    display: "flex",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#EEF2F6",
    overflow: "hidden",
  };

  const sidebarStyle = {
    width: 230,
    background: "linear-gradient( #591f7aff 0%, #9a1dd8ff 100%)",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "24px 18px",
    fontFamily: "Inter, sans-serif", // Smooth clean font
  };

  const sidebarTopStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  };

  const sidebarTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: 8,
  };

  const sidebarItemStyle = (isActive) => ({
    padding: "12px 14px",
    borderRadius: 12,
    fontSize: "0.92rem",
    fontWeight: isActive ? 600 : 400,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.85)", // brighter
    background: isActive ? "rgba(255,255,255,0.18)" : "transparent",
    transition: "all 0.25s ease",
    letterSpacing: "0.3px",
    ":hover": {
      background: "rgba(255,255,255,0.25)",
      color: "#FFFFFF",
    },
  });

  const iconStyle = (isActive) => ({
    fontSize: "1.05rem",
    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)",
    transition: "0.2s ease",
  });

  // const bulletStyle = {
  //   width: 6,
  //   height: 6,
  //   borderRadius: "50%",
  //   backgroundColor: "#3B82F6",
  // };

  const sidebarFooterStyle = {
    borderTop: "1px solid #1F2937",
    paddingTop: 12,
    marginTop: 12,
  };

  const logoutStyle = {
    padding: "10px 16px",
    borderRadius: 12,
    fontSize: "0.95rem",
    fontWeight: 600,
    cursor: "pointer",
    color: "#FFFFFF",
    background: "rgba(255, 69, 58, 0.9)", // slightly reddish
    textAlign: "center",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  };

  /** MAIN CONTENT STYLES **/

  const pageStyle = {
    paddingTop: 24,
    paddingBottom: 32,
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%", // main takes all remaining width
  };

  const headerRowStyle = {
    marginBottom: 18,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  };

  const bannerStyle = {
    borderRadius: 18,
    padding: "18px 20px",
    background:
      "linear-gradient(90deg, #591f7aff 0%, #bb3bf6ff 45%, #9a1dd8ff 100%)",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  };

  const bannerTitleStyle = {
    fontSize: "1.4rem",
    fontWeight: 700,
    marginBottom: 4,
  };

  const bannerSubtitleStyle = {
    fontSize: "0.9rem",
    opacity: 0.95,
  };

  const bannerRightStyle = {
    fontSize: "2.4rem",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: 900,
    color: "#111827",
  };

  const subtitleStyle = {
    fontSize: "0.85rem",
    color: "#6B7280",
  };

  const statCardStyle = {
    borderRadius: 12,
    border: "1px solid #F4F6F8",
    padding: "16px 18px",
    boxShadow: "0 6px 18px rgba(22,37,68,0.04)",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    height: "100%",
  };

  const statLabelStyle = {
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    color: "#6B7280",
  };

  const statValueStyle = {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#111827",
  };

  const statChipStyle = {
    fontSize: "0.75rem",
    padding: "2px 8px",
    borderRadius: 999,
    background: "rgba(16,185,129,0.12)",
    color: "#059669",
    alignSelf: "flex-start",
  };

  const sectionCardStyle = {
    borderRadius: 14,
    border: "1px solid #EEF2F6",
    background: "white",
    boxShadow: "0 6px 18px rgba(22,37,68,0.04)",
    padding: 18,
    height: "100%",
  };

  const sectionHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  };

  const sectionTitleStyle = {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#111827",
  };

  const sectionLinkStyle = {
    fontSize: "0.8rem",
    color: "#4B5563",
    cursor: "pointer",
  };

  const tableHeaderStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#9CA3AF",
    padding: "8px 0",
    borderBottom: "1px solid #E5E7EB",
  };

  const tableRowStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    fontSize: "0.9rem",
    padding: "10px 0",
    borderBottom: "1px solid #F3F4F6",
    alignItems: "center",
  };

  const chipStyle = (bg, color) => ({
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: 999,
    fontSize: "0.75rem",
    background: bg,
    color: color,
  });

  const smallMutedText = {
    fontSize: "0.8rem",
    color: "#6B7280",
  };

  const listItemRow = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "8px 0",
    borderBottom: "1px solid #F3F4F6",
  };

  const listTitle = {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#111827",
  };

  const listRightText = {
    fontSize: "0.8rem",
    color: "#6B7280",
  };

  /** LOGOUT HANDLER **/

  const handleLogout = async () => {
    try {
      // Call backend logout endpoint
      await axios.post("http://localhost:8080/logout"); // Replace with your backend URL

      // Clear any stored user info
      localStorage.removeItem("token"); // if using JWT
      localStorage.removeItem("userName");

      // Redirect to auth page
      navigate("/auth");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  /** MAIN CONTENT BASED ON ACTIVE SECTION **/

  const renderContent = () => {
    if (activeSection === "courses") {
      return (
        <Row className="g-3">
          <Col lg={8}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Enrolled Courses</span>
                <span style={sectionLinkStyle}>View all</span>
              </div>

              <div style={tableHeaderStyle}>
                <span>Course</span>
                <span>Code</span>
                <span>Progress</span>
              </div>

              <div style={tableRowStyle}>
                <span>Object Oriented Programming</span>
                <span>CSE201</span>
                <span>
                  <ProgressBar
                    now={72}
                    style={{ height: 6, borderRadius: 999 }}
                  />
                </span>
              </div>

              <div style={tableRowStyle}>
                <span>Database Management Systems</span>
                <span>CSE210</span>
                <span>
                  <ProgressBar
                    now={54}
                    variant="info"
                    style={{ height: 6, borderRadius: 999 }}
                  />
                </span>
              </div>

              <div style={tableRowStyle}>
                <span>Discrete Mathematics</span>
                <span>MTH205</span>
                <span>
                  <ProgressBar
                    now={88}
                    variant="success"
                    style={{ height: 6, borderRadius: 999 }}
                  />
                </span>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Today&apos;s Classes</span>
              </div>

              <div style={listItemRow}>
                <div>
                  <div style={listTitle}>OOP Lab</div>
                  <div style={smallMutedText}>10:00–11:30 AM • Lab 3</div>
                </div>
                <div style={listRightText}>Present</div>
              </div>

              <div style={listItemRow}>
                <div>
                  <div style={listTitle}>DBMS</div>
                  <div style={smallMutedText}>1:30–2:30 PM • Room 204</div>
                </div>
                <div style={listRightText}>Upcoming</div>
              </div>
            </div>
          </Col>
        </Row>
      );
    }

    if (activeSection === "marks") {
      return (
        <Row className="g-3">
          <Col lg={12}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Marks & Grades</span>
                <span style={sectionLinkStyle}>Download Marksheet</span>
              </div>

              <div style={tableHeaderStyle}>
                <span>Course</span>
                <span>Exam</span>
                <span>Marks</span>
              </div>

              <div style={tableRowStyle}>
                <span>OOP</span>
                <span>Mid Term</span>
                <span>
                  <span style={chipStyle("rgba(16,185,129,0.1)", "#059669")}>
                    86 / 100
                  </span>
                </span>
              </div>

              <div style={tableRowStyle}>
                <span>DBMS</span>
                <span>Unit Test</span>
                <span>
                  <span style={chipStyle("rgba(59,130,246,0.1)", "#1D4ED8")}>
                    78 / 100
                  </span>
                </span>
              </div>

              <div style={tableRowStyle}>
                <span>Discrete Maths</span>
                <span>Mid Term</span>
                <span>
                  <span style={chipStyle("rgba(251,191,36,0.1)", "#B45309")}>
                    Pending
                  </span>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      );
    }

    if (activeSection === "payments") {
      return (
        <Row className="g-3">
          <Col lg={6}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Fee Summary</span>
              </div>
              <p style={smallMutedText}>Total Fee: ₹ 80,000</p>
              <p style={smallMutedText}>Paid: ₹ 60,000</p>
              <p style={smallMutedText}>Pending: ₹ 20,000</p>

              <Button
                style={{
                  marginTop: 12,
                  backgroundColor: "#FF5A3C",
                  borderColor: "#FF5A3C",
                  borderRadius: 999,
                  padding: "8px 18px",
                  fontSize: "0.9rem",
                }}
              >
                Pay Now
              </Button>
            </div>
          </Col>

          <Col lg={6}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Recent Payments</span>
              </div>

              <div style={listItemRow}>
                <div>
                  <div style={listTitle}>Semester Fee</div>
                  <div style={smallMutedText}>₹ 40,000 • 12 Aug 2025</div>
                </div>
                <div style={listRightText}>Success</div>
              </div>

              <div style={listItemRow}>
                <div>
                  <div style={listTitle}>Hostel Fee</div>
                  <div style={smallMutedText}>₹ 20,000 • 01 Jul 2025</div>
                </div>
                <div style={listRightText}>Success</div>
              </div>
            </div>
          </Col>
        </Row>
      );
    }

    if (activeSection === "attendance") {
      return (
        <Row className="g-3">
          <Col lg={12}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Attendance Summary</span>
                <span style={sectionLinkStyle}>This Semester</span>
              </div>

              <Row className="g-3">
                <Col md={4}>
                  <Card style={{ ...statCardStyle, boxShadow: "none" }}>
                    <span style={statLabelStyle}>Overall</span>
                    <span style={statValueStyle}>92%</span>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ ...statCardStyle, boxShadow: "none" }}>
                    <span style={statLabelStyle}>OOP</span>
                    <span style={statValueStyle}>88%</span>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card style={{ ...statCardStyle, boxShadow: "none" }}>
                    <span style={statLabelStyle}>DBMS</span>
                    <span style={statValueStyle}>95%</span>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      );
    }

    if (activeSection === "profile") {
      return (
        <Row className="g-3">
          <Col lg={6}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Profile</span>
              </div>
              <p style={smallMutedText}>Name: John Doe</p>
              <p style={smallMutedText}>Roll No: 21CSE034</p>
              <p style={smallMutedText}>Program: B.Tech Computer Science</p>
              <p style={smallMutedText}>Year: 3rd Year</p>
              <p style={smallMutedText}>Email: john.doe@example.com</p>
            </div>
          </Col>
        </Row>
      );
    }

    // DEFAULT: DASHBOARD OVERVIEW
    return (
      <>
        {/* Stats Row */}
        <Row className="g-3 mb-3">
          <Col md={3} sm={6}>
            <div style={statCardStyle}>
              <span style={statLabelStyle}>CGPA</span>
              <span style={statValueStyle}>8.6</span>
              <span style={statChipStyle}>Good standing</span>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div style={statCardStyle}>
              <span style={statLabelStyle}>Credits Completed</span>
              <span style={statValueStyle}>96</span>
              <span style={{ ...smallMutedText, marginTop: 4 }}>
                24 remaining
              </span>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div style={statCardStyle}>
              <span style={statLabelStyle}>Attendance</span>
              <span style={statValueStyle}>92%</span>
              <span style={{ ...smallMutedText, marginTop: 4 }}>
                Above minimum
              </span>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div style={statCardStyle}>
              <span style={statLabelStyle}>Fee Pending</span>
              <span style={statValueStyle}>₹ 20K</span>
              <span style={{ ...smallMutedText, marginTop: 4 }}>
                Due next month
              </span>
            </div>
          </Col>
        </Row>

        {/* Courses & Notices */}
        <Row className="g-3">
          <Col lg={8}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Enrolled Courses</span>
                <span style={sectionLinkStyle}>View all</span>
              </div>

              <div style={tableHeaderStyle}>
                <span>Course</span>
                <span>Code</span>
                <span>ECTS</span>
              </div>

              <div style={tableRowStyle}>
                <span>Object Oriented Programming</span>
                <span>CSE201</span>
                <span>4</span>
              </div>

              <div style={tableRowStyle}>
                <span>Database Management Systems</span>
                <span>CSE210</span>
                <span>3</span>
              </div>

              <div style={tableRowStyle}>
                <span>Discrete Mathematics</span>
                <span>MTH205</span>
                <span>3</span>
              </div>
            </div>
          </Col>

          <Col lg={4}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Notices</span>
              </div>

              <div style={listItemRow}>
                <div>
                  <div style={listTitle}>Mid-term Exam</div>
                  <div style={smallMutedText}>Starts from 2nd October</div>
                </div>
              </div>

              <div style={listItemRow}>
                <div>
                  <div style={listTitle}>Holiday</div>
                  <div style={smallMutedText}>
                    15th August – Independence Day
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  };

  /** JSX RETURN **/

  return (
    <div style={layoutStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={sidebarTopStyle}>
          <div>
            <div style={sidebarTitleStyle}>Student Panel</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginTop: 20,
            }}
          >
            <div
              style={sidebarItemStyle(activeSection === "dashboard")}
              onClick={() => setActiveSection("dashboard")}
            >
              <span style={iconStyle(activeSection === "dashboard")}>🧭</span>
              <span>Dashboard</span>
            </div>
            <div
              style={sidebarItemStyle(activeSection === "courses")}
              onClick={() => setActiveSection("courses")}
            >
              <span style={iconStyle(activeSection === "courses")}>📄</span>
              <span>Courses</span>
            </div>
            <div
              style={sidebarItemStyle(activeSection === "attendance")}
              onClick={() => setActiveSection("attendance")}
            >
              <span style={iconStyle(activeSection === "attendance")}>📆</span>
              <span>Attendance</span>
            </div>
            <div
              style={sidebarItemStyle(activeSection === "marks")}
              onClick={() => setActiveSection("marks")}
            >
              <span style={iconStyle(activeSection === "marks")}>📊</span>
              <span>Marks</span>
            </div>
            <div
              style={sidebarItemStyle(activeSection === "payments")}
              onClick={() => setActiveSection("payments")}
            >
              <span style={iconStyle(activeSection === "payments")}>💰</span>
              <span>Payment Info</span>
            </div>
            <div
              style={sidebarItemStyle(activeSection === "profile")}
              onClick={() => setActiveSection("profile")}
            >
              <span style={iconStyle(activeSection === "profile")}>👤</span>
              <span>Profile</span>
            </div>
          </div>
        </div>

        <div style={sidebarFooterStyle}>
          <div
            style={logoutStyle}
            onClick={handleLogout}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255, 69, 58, 1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255, 69, 58, 0.9)")
            }
          >
            ⎋ Logout
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1 }}>
        <Container fluid style={pageStyle}>
          <div style={headerRowStyle}>
            {/* Banner */}
            <div style={bannerStyle}>
              <div>
                <p style={bannerTitleStyle}>Welcome Back, {userName}!</p>
                <p style={bannerSubtitleStyle}>
                  Here’s a quick snapshot of your academics today.
                </p>
              </div>
              <div style={bannerRightStyle}>🎓</div>
            </div>

            {/* Small text below banner */}
            <div>
              <p style={titleStyle}>Student Dashboard</p>
              <p style={subtitleStyle}>
                Track your CGPA, attendance, courses, marks, and fee status in
                one place.
              </p>
            </div>
          </div>

          {renderContent()}
        </Container>
      </main>
    </div>
  );
}