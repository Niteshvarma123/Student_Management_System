import React, { useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import AttendanceCalendar from "../../components/attendance/AttendanceCalender"; // keep your path

export default function TeacherDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard"); // 'dashboard' | 'attendance' | 'marks' | 'profile'

  // Layout styles
  const layoutStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#F3F4F6",
  };

  const sidebarStyle = {
    width: 220,
    backgroundColor: "#111827",
    color: "#F9FAFB",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px 16px",
  };

  const sidebarTopStyle = {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  };

  const sidebarTitleStyle = {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: 8,
  };

  const sidebarItemStyle = (isActive) => ({
    padding: "10px 12px",
    borderRadius: 10,
    fontSize: "0.9rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    backgroundColor: isActive ? "rgba(55, 65, 81, 0.95)" : "transparent",
    color: isActive ? "#FFFFFF" : "#E5E7EB",
    border: isActive ? "1px solid rgba(251, 191, 36, 0.4)" : "1px solid transparent",
    transition: "all 0.15s ease",
  });

  const bulletStyle = {
    width: 6,
    height: 6,
    borderRadius: "50%",
    backgroundColor: "#FBBF24",
  };

  const sidebarFooterStyle = {
    borderTop: "1px solid #1F2937",
    paddingTop: 12,
    marginTop: 12,
  };

  const logoutStyle = {
    padding: "8px 10px",
    borderRadius: 10,
    fontSize: "0.9rem",
    cursor: "pointer",
    color: "#FCA5A5",
  };

  // Main content container
  const pageStyle = {
    paddingTop: 24,
    paddingBottom: 32,
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
  };

  const headerRowStyle = {
    marginBottom: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#1F3D7A",
  };

  const subtitleStyle = {
    fontSize: "0.95rem",
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
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#9CA3AF",
    padding: "8px 0",
    borderBottom: "1px solid #E5E7EB",
  };

  const tableRowStyle = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
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

  // Dummy logout
  const handleLogout = () => {
    alert("Logout clicked (wire this to auth later)");
  };

  // Different main content based on active section
  const renderContent = () => {
    if (activeSection === "attendance") {
      return (
        <Row className="g-3">
          <Col lg={8}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Attendance Calendar</span>
                <span style={sectionLinkStyle}>This Month</span>
              </div>
              <AttendanceCalendar />
            </div>
          </Col>
          <Col lg={4}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Summary</span>
              </div>
              <p style={smallMutedText}>
                Click on a date in the calendar to mark Present (green), Absent (red) or Holiday (blue).
              </p>
              <p style={smallMutedText}>
                You can extend this section later to show counts per month, export attendance, etc.
              </p>
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
                <span style={sectionTitleStyle}>Marks Overview</span>
                <span style={sectionLinkStyle}>View all</span>
              </div>

              <div style={tableHeaderStyle}>
                <span>Student</span>
                <span>Class</span>
                <span>Exam</span>
                <span>Marks</span>
              </div>

              <div style={tableRowStyle}>
                <span>Rohit Sharma</span>
                <span>Maths - G10</span>
                <span>Unit Test 1</span>
                <span>
                  <span style={chipStyle("rgba(16,185,129,0.1)", "#059669")}>86 / 100</span>
                </span>
              </div>

              <div style={tableRowStyle}>
                <span>Ananya Verma</span>
                <span>Physics - G11</span>
                <span>Mid Term</span>
                <span>
                  <span style={chipStyle("rgba(59,130,246,0.1)", "#1D4ED8")}>74 / 100</span>
                </span>
              </div>

              <div style={tableRowStyle}>
                <span>Rahul Jain</span>
                <span>CS - G12</span>
                <span>Lab Assessment</span>
                <span>
                  <span style={chipStyle("rgba(251,191,36,0.1)", "#B45309")}>Pending</span>
                </span>
              </div>
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
              <p style={smallMutedText}>Role: Mathematics Teacher</p>
              <p style={smallMutedText}>Email: john.doe@example.com</p>
              <p style={smallMutedText}>Phone: +91 98765 43210</p>
            </div>
          </Col>
        </Row>
      );
    }

    // Default: Dashboard (stats + classes + schedule + small calendar card)
    return (
      <>
        {/* Stats Row */}
        <Row className="g-3 mb-4">
          <Col md={3} sm={6}>
            <div style={statCardStyle}>
              <span style={statLabelStyle}>Total Students</span>
              <span style={statValueStyle}>200</span>
              <span style={statChipStyle}>+12 this month</span>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div style={statCardStyle}>
              <span style={statLabelStyle}>Active Classes</span>
              <span style={statValueStyle}>06</span>
              <span style={{ ...smallMutedText, marginTop: 4 }}>3 online • 3 offline</span>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div style={statCardStyle}>
              <span style={statLabelStyle}>Attendance</span>
              <span style={statValueStyle}>23</span>
              <span style={{ ...smallMutedText, marginTop: 4 }}>Present today</span>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <div style={statCardStyle}>
              <span style={statLabelStyle}>Attendance</span>
              <span style={statValueStyle}>5</span>
              <span style={{ ...smallMutedText, marginTop: 4 }}>Absent today</span>
            </div>
          </Col>
        </Row>

        {/* Classes + Attendance Calendar */}
        <Row className="g-3">
          <Col lg={8}>
            <div style={{ ...sectionCardStyle, marginBottom: 16 }}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>My Classes</span>
                <span style={sectionLinkStyle}>View all</span>
              </div>

              <div style={tableHeaderStyle}>
                <span>Class</span>
                <span>Students</span>
                <span>Next Session</span>
                <span>Progress</span>
              </div>

              <div style={tableRowStyle}>
                <span>Maths - Grade 10</span>
                <span>32</span>
                <span>Today, 10:00 AM</span>
                <span>
                  <ProgressBar now={76} style={{ height: 6, borderRadius: 999 }} />
                </span>
              </div>

              <div style={tableRowStyle}>
                <span>Physics - Grade 11</span>
                <span>24</span>
                <span>Tomorrow, 9:30 AM</span>
                <span>
                  <ProgressBar
                    now={54}
                    variant="info"
                    style={{ height: 6, borderRadius: 999 }}
                  />
                </span>
              </div>

              <div style={tableRowStyle}>
                <span>Computer Science - Grade 12</span>
                <span>18</span>
                <span>Fri, 11:15 AM</span>
                <span>
                  <ProgressBar
                    now={91}
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
                <span style={sectionTitleStyle}>Attendance (This Month)</span>
              </div>
              <AttendanceCalendar />
            </div>
          </Col>
        </Row>

        {/* Schedule */}
        <Row className="g-3" style={{ marginTop: 8 }}>
          <Col lg={12}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Upcoming Schedule</span>
              </div>

              <div style={listItemRow}>
                <div>
                  <div style={listTitle}>Maths - Grade 10</div>
                  <div style={smallMutedText}>Today • 10:00–10:45 AM</div>
                </div>
                <div style={listRightText}>Room 204</div>
              </div>

              <div style={listItemRow}>
                <div>
                  <div style={listTitle}>Parent Meeting</div>
                  <div style={smallMutedText}>Today • 4:00–4:30 PM</div>
                </div>
                <div style={listRightText}>Online</div>
              </div>

              <div style={listItemRow}>
                <div>
                  <div style={listTitle}>Physics - Grade 11</div>
                  <div style={smallMutedText}>Tomorrow • 9:30–10:15 AM</div>
                </div>
                <div style={listRightText}>Lab 1</div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <div style={layoutStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={sidebarTopStyle}>
          <div>
            <div style={sidebarTitleStyle}>Teacher Panel</div>
            <div style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>
              Manage your daily teaching workflow.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 12 }}>
            <div
              style={sidebarItemStyle(activeSection === "dashboard")}
              onClick={() => setActiveSection("dashboard")}
            >
              <span style={bulletStyle}></span>
              <span>Dashboard</span>
            </div>
            <div
              style={sidebarItemStyle(activeSection === "attendance")}
              onClick={() => setActiveSection("attendance")}
            >
              <span style={bulletStyle}></span>
              <span>Attendance</span>
            </div>
            <div
              style={sidebarItemStyle(activeSection === "marks")}
              onClick={() => setActiveSection("marks")}
            >
              <span style={bulletStyle}></span>
              <span>Marks</span>
            </div>
             <div
              style={sidebarItemStyle(activeSection === "profile")}
              onClick={() => setActiveSection("profile")}
            >
              <span style={bulletStyle}></span>
              <span>Profile</span>
            </div>
          </div>
        </div>

        <div style={sidebarFooterStyle}>
          <div style={logoutStyle} onClick={handleLogout}>
            ⎋ Logout
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1 }}>
        <Container style={pageStyle}>
          <div style={headerRowStyle}>
            <div>
              <div style={titleStyle}>Teacher Dashboard</div>
              <div style={subtitleStyle}>
                Quick overview of your Students, Classes, and Attendance.
              </div>
            </div>
          </div>

          {renderContent()}
        </Container>
      </main>
    </div>
  );
}
