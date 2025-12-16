import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TeacherDashboard() {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("profile"); // 'dashboard' | 'attendance' | 'marks' | 'profile'
  const [editingMarkId, setEditingMarkId] = useState(null);
  const [editedMark, setEditedMark] = useState({});
  const handleEditClick = (mark) => {
    setEditingMarkId(mark.mid); // ✅ correct key
    setEditedMark({ ...mark });
  };

  const handleMarkChange = (e) => {
    setEditedMark({ ...editedMark, [e.target.name]: e.target.value });
  };

  const handleSaveMark = async () => {
    try {
      await axios.put(
        `http://localhost:8080/marks/update/${editingMarkId}`,
        editedMark
      );

      // refresh marks after update
      const res = await axios.get("http://localhost:8080/marks/all");
      setMarks(res.data);

      setEditingMarkId(null);
      alert("Marks updated successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to update marks");
    }
  };

  // Profile
  const [teacher, setTeacher] = useState({
    temail: "",
    tname: "",
  });

  useEffect(() => {
    const temail = localStorage.getItem("temail");

    if (!temail) {
      console.error("Teacher email missing in localStorage");
      return;
    }

    axios
      .get(`http://localhost:8080/teacher/${temail}`)
      .then((res) => setTeacher(res.data))
      .catch((err) =>
        console.error("Teacher profile fetch failed", err.response || err)
      );
  }, []);

  // Marks
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/marks/all")
      .then((res) => setMarks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const calculateTotal = (m) => {
    return (
      (Number(m.marks1) || 0) +
      (Number(m.marks2) || 0) +
      (Number(m.marks3) || 0)
    );
  };

  const calculatePercentage = (m) => {
    const total = calculateTotal(m);
    const maxTotal = 300; // 3 subjects × 100
    return ((total / maxTotal) * 100).toFixed(2);
  };

  // Layout styles
  const layoutStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#F3F4F6",
  };

  const sidebarStyle = {
    width: 240,
    background: "linear-gradient(180deg, #4F46E5 0%, #6366F1 100%)", // purple gradient
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "24px 16px",
    fontFamily: "Inter, sans-serif",
    boxShadow: "2px 0 12px rgba(0,0,0,0.05)",
  };

  // const sidebarTopStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: 16,
  // };

  // const sidebarSubTitleStyle = {
  //   fontSize: "0.85rem",
  //   color: "rgba(255,255,255,0.7)",
  // };

  const sidebarItemStyle = (isActive) => ({
    padding: "12px 16px",
    borderRadius: 12,
    fontSize: "0.95rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
    color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.8)",
    fontWeight: isActive ? 600 : 500,
    transition: "all 0.2s ease",
  });

  // const bulletStyle = {
  //   width: 6,
  //   height: 6,
  //   borderRadius: "50%",
  //   backgroundColor: "#FBBF24",
  // };

  const sidebarFooterStyle = {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: 16,
    marginTop: 16,
  };

  const logoutStyle = {
    padding: "10px 16px",
    borderRadius: 12,
    fontSize: "0.95rem",
    fontWeight: 600,
    cursor: "pointer",
    color: "#FFFFFF",
    background: "#EF4444", // red button
    textAlign: "center",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
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

  const tableHeaderStyle = {
    display: "grid",
    gridTemplateColumns:
      "0.5fr 1fr 2fr 1.5fr 1fr 1.5fr 1fr 1.5fr 1fr 1fr 1fr 1fr",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#4B5563", // darker gray
    fontWeight: 600, // optional, make it bold
    padding: "8px 0",
    borderBottom: "1px solid #E5E7EB",
    background: "#F9FAFB",
  };

  const tableRowStyle = {
    display: "grid",
    gridTemplateColumns:
      "0.5fr 1fr 2fr 1.5fr 1fr 1.5fr 1fr 1.5fr 1fr 1fr 1fr 1fr",
    fontSize: "0.9rem",
    padding: "10px 0",
    borderBottom: "1px solid #F3F4F6",
    alignItems: "center",
  };

  // const chipStyle = (bg, color) => ({
  //   display: "inline-block",
  //   padding: "4px 10px",
  //   borderRadius: 999,
  //   fontSize: "0.75rem",
  //   background: bg,
  //   color: color,
  // });

  // Dummy logout
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/logout");
    } catch (error) {
      console.error(error);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("temail");
    navigate("/auth");
  };

  // Different main content based on active section
  const renderContent = () => {
    if (activeSection === "profile") {
      return (
        <Row className="g-4">
          {/* Profile Card */}
          <Col lg={4}>
            <div
              style={{
                ...sectionCardStyle,
                textAlign: "center",
                paddingTop: 32,
                paddingBottom: 28,
                background:
                  "linear-gradient(180deg, rgba(99,102,241,0.08), #ffffff 65%)",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  margin: "0 auto 16px",
                  boxShadow: "0 12px 28px rgba(79,70,229,0.35)",
                }}
              >
                {teacher.tname ? teacher.tname.charAt(0).toUpperCase() : "T"}
              </div>

              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "#111827",
                }}
              >
                {teacher.tname}
              </div>

              <div
                style={{
                  fontSize: "0.85rem",
                  color: "#6B7280",
                  marginTop: 4,
                }}
              >
                Faculty Member
              </div>

              <div
                style={{
                  marginTop: 14,
                  fontSize: "0.85rem",
                  color: "#374151",
                  wordBreak: "break-word",
                }}
              >
                {teacher.temail}
              </div>
            </div>
          </Col>

          {/* Details Card */}
          <Col lg={8}>
            <div style={sectionCardStyle}>
              <div style={sectionHeaderStyle}>
                <span style={sectionTitleStyle}>Profile Information</span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 18,
                }}
              >
                {[
                  { label: "Full Name", value: teacher.tname },
                  { label: "Email Address", value: teacher.temail },
                  { label: "Role", value: "Teacher" },
                  { label: "Department", value: "Full Stack Java & Python" },
                  { label: "Account Status", value: "Active", status: true },
                  { label: "Joined On", value: "—" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "14px 16px",
                      borderRadius: 12,
                      background: "#F9FAFB",
                      border: "1px solid #EEF2F6",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#6B7280",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: 6,
                      }}
                    >
                      {item.label}
                    </div>

                    {item.status ? (
                      <span
                        style={{
                          padding: "4px 12px",
                          borderRadius: 999,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          background: "rgba(16,185,129,0.15)",
                          color: "#059669",
                        }}
                      >
                        Active
                      </span>
                    ) : (
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "#111827",
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
          <div style={tableHeaderStyle}>
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
            <span>Action</span>
          </div>

          {/* Table Data */}
          {marks.length === 0 ? (
            <p>No marks available</p>
          ) : (
            marks.map((m) => (
              <div key={m.mid} style={tableRowStyle}>
                <span>{m.mid}</span>
                <span>{m.srollno}</span>
                <span>{m.studentname}</span>

                <span>{m.subject1}</span>
                <span>
                  {editingMarkId === m.mid ? (
                    <input
                      name="marks1"
                      type="number"
                      value={editedMark.marks1}
                      onChange={handleMarkChange}
                      style={{ width: 60 }}
                    />
                  ) : (
                    m.marks1
                  )}
                </span>

                <span>{m.subject2}</span>
                <span>
                  {editingMarkId === m.mid ? (
                    <input
                      name="marks2"
                      type="number"
                      value={editedMark.marks2}
                      onChange={handleMarkChange}
                      style={{ width: 60 }}
                    />
                  ) : (
                    m.marks2
                  )}
                </span>

                <span>{m.subject3}</span>
                <span>
                  {editingMarkId === m.mid ? (
                    <input
                      name="marks3"
                      type="number"
                      value={editedMark.marks3}
                      onChange={handleMarkChange}
                      style={{ width: 60 }}
                    />
                  ) : (
                    m.marks3
                  )}
                </span>

                {/* TOTAL (frontend calculated) */}
                <span style={{ fontWeight: 700 }}>
                  {editingMarkId === m.mid
                    ? Number(editedMark.marks1 || 0) +
                      Number(editedMark.marks2 || 0) +
                      Number(editedMark.marks3 || 0)
                    : calculateTotal(m)}
                </span>
                {/* PERCENTAGE */}
                <span style={{ fontWeight: 600 }}>
                  {editingMarkId === m.mid
                    ? (
                        ((Number(editedMark.marks1 || 0) +
                          Number(editedMark.marks2 || 0) +
                          Number(editedMark.marks3 || 0)) /
                          300) *
                        100
                      ).toFixed(2) + "%"
                    : calculatePercentage(m) + "%"}
                </span>

                {/* ACTION */}
                <span>
                  {editingMarkId === m.mid ? (
                    <button
                      onClick={handleSaveMark}
                      style={{
                        background: "#16A34A",
                        color: "#fff",
                        border: "none",
                        padding: "4px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(m)}
                      style={{
                        background: "#4F46E5",
                        color: "#fff",
                        border: "none",
                        padding: "4px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                  )}
                </span>
              </div>
            ))
          )}
        </div>
      );
    }

    // Default: Dashboard (stats + classes + schedule + small calendar card)
    return null;
  };

  return (
    <div style={layoutStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* PROFILE FIRST */}
          <div
            style={sidebarItemStyle(activeSection === "profile")}
            onClick={() => setActiveSection("profile")}
          >
            <span>👤</span>
            <span>Profile</span>
          </div>

          <div
            style={sidebarItemStyle(activeSection === "marks")}
            onClick={() => setActiveSection("marks")}
          >
            <span>📊</span>
            <span>Marks</span>
          </div>
        </div>

        <div style={sidebarFooterStyle}>
          <div
            style={logoutStyle}
            onClick={handleLogout}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#DC2626")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#EF4444")}
          >
            ⎋ Logout
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1 }}>
        <Container style={pageStyle}>
          <div style={headerRowStyle}>
            <div>
              <div style={titleStyle}>
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </div>
            </div>
          </div>
          {renderContent()}
        </Container>
      </main>
    </div>
  );
}
