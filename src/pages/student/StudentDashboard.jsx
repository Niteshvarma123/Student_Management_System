// StudentDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("profile");
  const [student, setStudent] = useState({
    srollno: "",
    sname: "",
    semail: "",
    sphone: "",
    saddress: "",
  });
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [marks, setMarks] = useState([]);
  const [attendanceList, setAttendanceList] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // today by default

  const srollno = localStorage.getItem("srollno");
  const userName = localStorage.getItem("userName") || "User";
  const userEmail = localStorage.getItem("semail");

  // Profile
  // useEffect(() => {
  //   if (!semail) return;

  //   axios
  //     .get(`http://localhost:8080/student/${semail}`)
  //     .then((res) => {
  //       console.log("Student data:", res.data);
  //       setStudent(res.data);
  //       localStorage.setItem("semail",res.data.semail);
  //     })
  //     .catch((err) => {
  //       console.error("Student profile fetch failed", err.response || err);
  //       setLoadingProfile(false);
  //     });
  // }, [semail]);

  /** Fetch attendance whenever date changes */
  useEffect(() => {
    if (!srollno || !date) return;

    axios
      .get(`http://localhost:8080/attendance/student/${srollno}?date=${date}`)
      .then((res) => setAttendanceList(res.data))
      .catch((err) => console.error("Attendance fetch failed:", err));
  }, [srollno, date]);

  /** LAYOUT & SIDEBAR STYLES **/
  const calculateTotal = (m) =>
    (Number(m.marks1) || 0) + (Number(m.marks2) || 0) + (Number(m.marks3) || 0);

  const calculatePercentage = (m) => {
    const total = calculateTotal(m);
    return ((total / 300) * 100).toFixed(2); // assuming 3 subjects each 100 marks
  };

  // Add this state at the top with other states
  const [feeData, setFeeData] = useState({
    totalFee: 0,
    paidFee: 0,
    recentPayments: [],
  });

  // Fetch fee data from backend
  useEffect(() => {
    if (!srollno) return;

    axios
      .get(`http://localhost:8080/payments/student/${srollno}`)
      .then((res) => {
        if (res.data) {
          setFeeData({
            totalFee: res.data.totalFee || 0,
            paidFee: res.data.paidFee || 0,
            recentPayments: res.data.recentPayments || [],
          });
        }
      })
      .catch((err) => console.error("Fee data fetch failed:", err));
  }, [srollno]);

  // marks
  useEffect(() => {
    if (!srollno) return;

    axios
      .get(`http://localhost:8080/marks/student/${srollno}`)
      .then((res) => setMarks(res.data))
      .catch((err) => console.error("Marks fetch failed:", err));
  }, [srollno]);

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

  const profileLabel = {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#6B7280",
    marginBottom: 4,
  };

  const profileValue = {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#111827",
    background: "#F9FAFB",
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #E5E7EB",
  };

  /** LOGOUT HANDLER **/

  const handleLogout = async () => {
    try {
      // Call backend logout endpoint
      await axios.post("http://localhost:8080/student/slogout"); // Replace with your backend URL

      // Clear any stored user info
      localStorage.removeItem("token");
      localStorage.removeItem("srollno");
      localStorage.removeItem("userName");
      sessionStorage.clear();
      navigate("/auth");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  /** MAIN CONTENT BASED ON ACTIVE SECTION **/

  const renderContent = () => {
    if (activeSection === "profile") {
      if (loadingProfile) {
        return <p style={{ color: "#6B7280" }}>Loading profile...</p>;
      }

      return (
        <Row className="g-3">
          {/* LEFT CARD */}
          <Col lg={4}>
            <div
              style={{ ...sectionCardStyle, textAlign: "center", padding: 28 }}
            >
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#9a1dd8ff,#591f7aff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "2.2rem",
                  fontWeight: 700,
                  margin: "0 auto 14px",
                }}
              >
                {student.sname ? student.sname.charAt(0).toUpperCase() : "S"}
              </div>

              <h5 style={{ fontWeight: 700 }}>{student.sname || "—"}</h5>
              <p style={{ fontSize: "0.8rem", color: "#6B7280" }}>
                Roll No: <strong>{student.srollno || "—"}</strong>
              </p>
            </div>
          </Col>

          {/* RIGHT DETAILS */}
          <Col lg={8}>
            <div style={{ ...sectionCardStyle, padding: 24 }}>
              <span style={sectionTitleStyle}>Profile Information</span>

              <Row className="g-3 mt-2">
                <Col md={6}>
                  <div style={profileLabel}>Roll Number</div>
                  <div style={profileValue}>{student.srollno || "—"}</div>
                </Col>

                <Col md={6}>
                  <div style={profileLabel}>Full Name</div>
                  <div style={profileValue}>{student.sname || "—"}</div>
                </Col>

                <Col md={6}>
                  <div style={profileLabel}>Email</div>
                  <div style={profileValue}>{student.semail || "—"}</div>
                </Col>

                <Col md={6}>
                  <div style={profileLabel}>Phone</div>
                  <div style={profileValue}>{student.sphone || "—"}</div>
                </Col>

                <Col md={12}>
                  <div style={profileLabel}>Address</div>
                  <div style={profileValue}>{student.saddress || "—"}</div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      );
    }

    if (activeSection === "marks") {
      return (
        <div style={{ ...sectionCardStyle, padding: 20 }}>
          <div style={sectionHeaderStyle}>
            <span style={sectionTitleStyle}>Marks Overview</span>
          </div>

          {/* Table Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "0.5fr 1fr 2fr 1.5fr 1fr 1.5fr 1fr 1.5fr 1fr 1fr 1fr",
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#4B5563",
              fontWeight: 600,
              padding: "8px 0",
              borderBottom: "1px solid #E5E7EB",
              background: "#F9FAFB",
            }}
          >
            <span>ID</span>
            <span>Roll No</span>
            <span>Student</span>
            <span>Sub 1</span>
            <span>M1</span>
            <span>Sub 2</span>
            <span>M2</span>
            <span>Sub 3</span>
            <span>M3</span>
            <span>Total</span>
            <span>%</span>
          </div>

          {/* Table Rows */}
          {marks.length === 0 ? (
            <p style={{ marginTop: 12 }}>No marks available</p>
          ) : (
            marks.map((m) => (
              <div
                key={m.mid}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "0.5fr 1fr 2fr 1.5fr 1fr 1.5fr 1fr 1.5fr 1fr 1fr 1fr",
                  fontSize: "0.9rem",
                  padding: "10px 0",
                  borderBottom: "1px solid #F3F4F6",
                  alignItems: "center",
                }}
              >
                <span>{m.mid}</span>
                <span>{m.srollno}</span>
                <span>{m.studentname}</span>
                <span>{m.subject1}</span>
                <span>{m.marks1}</span>
                <span>{m.subject2}</span>
                <span>{m.marks2}</span>
                <span>{m.subject3}</span>
                <span>{m.marks3}</span>
                <span style={{ fontWeight: 700 }}>{calculateTotal(m)}</span>
                <span style={{ fontWeight: 600 }}>
                  {calculatePercentage(m)}%
                </span>
              </div>
            ))
          )}
        </div>
      );
    }

    if (activeSection === "payments") {
      const { totalFee, paidFee, recentPayments } = feeData;
      const unpaidFee = totalFee - paidFee;

      return (
        <Row className="g-3">
          {/* Total Fee */}
          <Col lg={4}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Total Fee</span>
              </div>
              <p style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                ₹ {totalFee}
              </p>
            </div>
          </Col>

          {/* Paid Fee */}
          <Col lg={4}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Paid</span>
              </div>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#16A34A",
                }}
              >
                ₹ {paidFee}
              </p>
            </div>
          </Col>

          {/* Unpaid Fee */}
          <Col lg={4}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Unpaid</span>
              </div>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#DC2626",
                }}
              >
                ₹ {unpaidFee}
              </p>
              {unpaidFee > 0 && (
                <Button
                  style={{
                    marginTop: 12,
                    backgroundColor: "#FF5A3C",
                    borderColor: "#FF5A3C",
                    borderRadius: 999,
                    padding: "8px 18px",
                    fontSize: "0.9rem",
                  }}
                  onClick={() => alert("Redirect to payment gateway")}
                >
                  Pay Now
                </Button>
              )}
            </div>
          </Col>

          {/* Recent Payments Table */}
          <Col lg={12}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Recent Payments</span>
              </div>

              {recentPayments.length === 0 ? (
                <p style={smallMutedText}>No recent payments.</p>
              ) : (
                recentPayments.map((p, index) => (
                  <div key={index} style={listItemRow}>
                    <div>
                      <div style={listTitle}>{p.feeType}</div>
                      <div style={smallMutedText}>
                        ₹ {p.amount} • {p.date}
                      </div>
                    </div>
                    <div style={listRightText}>{p.status}</div>
                  </div>
                ))
              )}
            </div>
          </Col>
        </Row>
      );
    }

    if (activeSection === "attendance") {
      return (
        <div style={{ ...sectionCardStyle, padding: 20 }}>
          <div style={sectionHeaderStyle}>
            <span style={sectionTitleStyle}>Attendance</span>

            {/* Date Picker */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "1px solid #D1D5DB",
                fontSize: "0.85rem",
              }}
            />
          </div>

          {/* ===== TABLE HEADER (SAME AS TEACHER STYLE) ===== */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#4B5563",
              fontWeight: 600,
              padding: "8px 0",
              borderBottom: "1px solid #E5E7EB",
              background: "#F9FAFB",
            }}
          >
            <span>Roll No</span>
            <span>Date</span>
            <span>Status</span>
          </div>

          {/* ===== TABLE BODY ===== */}
          {attendanceList.length === 0 ? (
            <div
              style={{
                padding: "20px 0",
                textAlign: "center",
                color: "#6B7280",
                fontSize: "0.9rem",
              }}
            >
              Attendance records will appear here.
            </div>
          ) : (
            attendanceList.map((a) => (
              <div
                key={a.aid}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  fontSize: "0.9rem",
                  padding: "10px 0",
                  borderBottom: "1px solid #F3F4F6",
                  alignItems: "center",
                }}
              >
                <span>{a.srollno}</span>
                <span>{a.dateattendance}</span>
                <span
                  style={{
                    fontWeight: 600,
                    color: a.status === "present" ? "#16A34A" : "#DC2626",
                  }}
                >
                  {a.status}
                </span>
              </div>
            ))
          )}
        </div>
      );
    }

    // DEFAULT: DASHBOARD OVERVIEW

    return (
      <div style={{ color: "#6B7280", padding: 20 }}>
        Select a section from the sidebar.
      </div>
    );
  };

  /** JSX RETURN **/

  return (
    <div style={layoutStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* PROFILE — TOP */}
          <div
            style={sidebarItemStyle(activeSection === "profile")}
            onClick={() => setActiveSection("profile")}
          >
            <span>👤</span>
            <span>Profile</span>
          </div>

          {/* ATTENDANCE */}
          <div
            style={sidebarItemStyle(activeSection === "attendance")}
            onClick={() => setActiveSection("attendance")}
          >
            <span>📆</span>
            <span>Attendance</span>
          </div>

          {/* MARKS */}
          <div
            style={sidebarItemStyle(activeSection === "marks")}
            onClick={() => setActiveSection("marks")}
          >
            <span>📊</span>
            <span>Marks</span>
          </div>

          {/* PAYMENTS — RESTORED */}
          <div
            style={sidebarItemStyle(activeSection === "payments")}
            onClick={() => setActiveSection("payments")}
          >
            <span>💰</span>
            <span>Payments</span>
          </div>
        </div>

        {/* LOGOUT */}
        <div style={sidebarFooterStyle}>
          <div style={logoutStyle} onClick={handleLogout}>
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
              </div>
              <div style={bannerRightStyle}>🎓</div>
            </div>

            {/* Small text below banner */}
            <div>
              <p style={titleStyle}>Student Profile</p>
              <p style={subtitleStyle}>
                View your academic and personal information.
              </p>
            </div>
          </div>

          {renderContent()}
        </Container>
      </main>
    </div>
  );
}
