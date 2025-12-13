import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaPlus,
  FaSignOutAlt,
} from "react-icons/fa";

const sidebarItems = [
  { icon: <FaTachometerAlt />, label: "Dashboard", tab: "dashboard" },
  { icon: <FaUserGraduate />, label: "Students", tab: "students" },
  { icon: <FaChalkboardTeacher />, label: "Teachers", tab: "teachers" },
  { icon: <FaPlus />, label: "Add Student", tab: "addStudent" },
  { icon: <FaPlus />, label: "Add Teacher", tab: "addTeacher" },
];
const styles = {
  dashboard: {
    display: "flex",
    height: "100vh",
    textAlign: "center",
    overflowX: "hidden",
    background: "#f4f6f9",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "240px",
    background: "#1e2a38",
    color: "#fff",
    padding: "20px",
  },
  logo: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "20px",
  },
  sidebarList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  sidebarItem: {
    padding: "14px",
    cursor: "pointer",
    borderRadius: "6px",
    fontSize: "16px",
    transition: "0.3s",
    marginBottom: "6px",
  },
  sidebarItemActive: {
    background: "#3b4a60",
  },
  logout: {
    marginTop: "180px",
    background: "#d72828",
  },
  mainContent: {
    flex: 1,
    padding: "30px",
    background: "#f5f7fa",
    overflowY: "auto",
    overflowX: "hidden",
  },
  tabTitle: {
    fontSize: "50px",
    fontWeight: "bold",
    color: "#071319",
    textAlign: "center",
    textShadow:
      "0 0 10px rgba(225, 223, 240, 0.301), 0 0 20px rgba(7, 17, 23, 0.6)",
    marginBottom: "20px",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  card: {
    flex: "0 0 48%",
    background: "#87ceeb",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s, boxShadow 0.3s",
    boxSizing: "border-box",
  },
  cardTitle: {
    margin: 0,
    fontSize: "22px",
    color: "#444",
  },
  cardValue: {
    marginTop: "8px",
    fontSize: "30px",
    color: "#0078ff",
  },
  cardDesc: {
    marginTop: "5px",
    fontSize: "14px",
    color: "#555",
  },
  tableContainer: {
    overflowX: "auto",
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    padding: "12px",
    border: "1px solid #ccc",
    textAlign: "center",
    backgroundColor: "#1e2a38",
    color: "#fff",
  },
  td: {
    padding: "12px",
    border: "1px solid #ccc",
    textAlign: "center",
  },
  buttonBase: {
    padding: "5px 10px",
    margin: "2px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.2s",
  },
  editButton: {
    backgroundColor: "#4caf50",
    color: "#fff",
  },
  deleteButton: {
    backgroundColor: "#d72828",
    color: "#fff",
  },
  formCard: {
    background: "#b0d1d0",
    padding: "25px",
    borderRadius: "10px",
    width: "60%",
    maxWidth: "500px",
    margin: "40px auto",
    textAlign: "center",
    boxShadow: "0 3px 15px rgba(0, 0, 0, 0.2)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  formButton: {
    backgroundColor: "#0078ff",
    color: "#fff",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "8px",
  },
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [hoveredCard, setHoveredCard] = useState(null);

  // ---------------- STUDENT STATES ----------------
  const [studentList, setStudentList] = useState([]);

  const [student, setStudent] = useState({
    srollno: "",
    sname: "",
    semail: "",
    spassword: "",
    sphone: "",
    stotalfee: "",
    spaid: "",
    sunpaid: "",
    saddress: "",
  });

  // ---------------- TEACHER STATES ----------------
  const [teacherList, setTeacherList] = useState([]);

  const [teacher, setTeacher] = useState({
    tname: "",
    temployeeid: "",
    tsubject: "",
    temail: "",
    tpassword: "",
    tphone: "",
  });

  // ---------------- FETCH STUDENTS ----------------
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/student/all");
      setStudentList(res.data || []);
    } catch (error) {
      console.error("Failed to fetch students:", error);
      setStudentList([]);
    }
  };

  // ---------------- FETCH TEACHERS ----------------
  const fetchTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/teacher/tall");
      setTeacherList(res.data || []);
    } catch (error) {
      console.error("Failed to fetch teachers:", error);
      setTeacherList([]);
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchTeachers();
  }, []);

  // ---------------- STUDENT HANDLERS ----------------
  const handleStudentChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleStudentSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/student/add", student);
      alert("Student Registered Successfully!");

      setStudent({
        srollno: "",
        sname: "",
        semail: "",
        spassword: "",
        sphone: "",
        stotalfee: "",
        spaid: "",
        sunpaid: "",
        saddress: "",
      });

      fetchStudents();
    } catch (err) {
      console.error(err);
      alert("Failed to register student");
    }
  };

  const handleDeleteStudent = async (stu) => {
    try {
      await axios.delete(`http://localhost:8080/student/delete/${stu.srollno}`);
      alert("Student deleted successfully");
      fetchStudents();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete student");
    }
  };

  // ---------------- TEACHER HANDLERS ----------------
  const handleTeacherChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleTeacherSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/teacher/add", teacher);
      alert("Teacher Registered Successfully!");

      setTeacher({
        tname: "",
        temployeeid: "",
        tsubject: "",
        temail: "",
        tpassword: "",
        tphone: "",
      });

      fetchTeachers();
    } catch (err) {
      console.error(err);
      alert("Failed to register teacher");
    }
  };

  const handleDeleteTeacher = async (teacher) => {
    try {
      await axios.delete(
        `http://localhost:8080/teacher/delete/${teacher.temployeeid}`
      );
      alert("Teacher deleted successfully");
      fetchTeachers(); // refresh table
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete teacher");
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      // Call backend logout endpoint
      await axios.post("http://localhost:8080/auth/logout");

      // Clear any stored tokens/session info
      localStorage.removeItem("token"); // adjust key if needed
      sessionStorage.clear();

      // Redirect to login/auth page
      navigate("/auth");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  // ---------------- DASHBOARD CARDS ----------------
  const dashboardCards = [
    {
      title: "Total Students",
      value: studentList.length,
      desc: "Registered students",
    },
    {
      title: "Total Teachers",
      value: teacherList.length,
      desc: "Registered teachers",
    },
    { title: "Classes", value: "12", desc: "Active classes" },
    { title: "Fees Collected", value: student.spaid, desc: "This semester" },
    { title: "Attendance Avg", value: "88%", desc: "Overall" },
    { title: "Pending Registrations", value: "3", desc: "New requests" },
  ];

  // ---------------- RENDER STUDENT TABLE ----------------
  const renderStudentTable = () => (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Roll No</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Total Fee</th>
            <th style={styles.th}>Paid</th>
            <th style={styles.th}>Unpaid</th>
            <th style={styles.th}>Address</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentList.length === 0 ? (
            <tr>
              <td style={styles.td} colSpan="9">
                No students found.
              </td>
            </tr>
          ) : (
            studentList.map((stu) => (
              <tr key={stu.srollno}>
                <td style={styles.td}>{stu.srollno}</td>
                <td style={styles.td}>{stu.sname}</td>
                <td style={styles.td}>{stu.semail}</td>
                <td style={styles.td}>{stu.sphone}</td>
                <td style={styles.td}>{stu.stotalfee}</td>
                <td style={styles.td}>{stu.spaid}</td>
                <td style={styles.td}>{stu.sunpaid}</td>
                <td style={styles.td}>{stu.saddress}</td>

                <td style={styles.td}>
                  <button
                    style={{ ...styles.buttonBase, ...styles.editButton }}
                    onClick={() => navigate(`/edit/student/${stu.srollno}`)}
                  >
                    Edit
                  </button>

                  <button
                    style={{ ...styles.buttonBase, ...styles.deleteButton }}
                    onClick={() => handleDeleteStudent(stu)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  // ---------------- RENDER TEACHER TABLE ----------------
  const renderTeacherTable = () => (
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Password</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teacherList.length === 0 ? (
            <tr>
              <td style={styles.td} colSpan="4">
                No teachers found.
              </td>
            </tr>
          ) : (
            teacherList.map((t) => (
              <tr key={t.temployeeid}>
                <td style={styles.td}>{t.tname}</td>
                <td style={styles.td}>{t.temail}</td>
                <td style={styles.td}>{t.tpassword}</td>

                <td style={styles.td}>
                  <button
                    style={{ ...styles.buttonBase, ...styles.editButton }}
                    onClick={() => navigate(`/edit/teacher/${t.temployeeid}`)}
                  >
                    Edit
                  </button>

                  <button
                    style={{ ...styles.buttonBase, ...styles.deleteButton }}
                    onClick={() => handleDeleteTeacher(t)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  // ---------------- ADD STUDENT FORM ----------------
  const renderAddStudentForm = () => (
    <div style={{ ...styles.formCard, background: "#f0f4f8" }}>
      {/* <h2 style={{ marginBottom: "20px", color: "#333" }}>Add Student</h2> */}
      <form style={styles.form} onSubmit={handleStudentSubmit}>
        {Object.keys(student).map((key) => (
          <div
            key={key}
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <label
              style={{ marginBottom: "6px", fontWeight: "600", color: "#444" }}
            >
              {key
                .replace(/^s/, "")
                .replace(/([A-Z])/g, " $1")
                .toUpperCase()}
            </label>
            <input
              type={
                key.includes("email")
                  ? "email"
                  : key.includes("password")
                  ? "password"
                  : key.includes("phone") ||
                    key.includes("roll") ||
                    key.includes("fee") ||
                    key.includes("paid") ||
                    key.includes("unpaid")
                  ? "number"
                  : "text"
              }
              name={key}
              placeholder={`Enter ${key.replace(/^s/, "").toLowerCase()}`}
              required
              style={{
                ...styles.input,
                border: "1px solid #ccc",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                transition: "0.2s",
              }}
              value={student[key]}
              onChange={handleStudentChange}
            />
          </div>
        ))}
        <button
          type="submit"
          style={{
            ...styles.formButton,
            backgroundColor: "#0078ff",
            marginTop: "15px",
          }}
        >
          Add Student
        </button>
      </form>
    </div>
  );

  // ---------------- ADD TEACHER FORM ----------------
  const renderAddTeacherForm = () => (
    <div style={{ ...styles.formCard, background: "#f0f4f8" }}>
      {/* <h2 style={{ marginBottom: "20px", color: "#333" }}>Add Teacher</h2> */}
      <form style={styles.form} onSubmit={handleTeacherSubmit}>
        {Object.keys(teacher).map((key) => (
          <div
            key={key}
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <label
              style={{ marginBottom: "6px", fontWeight: "600", color: "#444" }}
            >
              {key
                .replace(/^t/, "")
                .replace(/([A-Z])/g, " $1")
                .toUpperCase()}
            </label>
            <input
              type={
                key.includes("email")
                  ? "email"
                  : key.includes("password")
                  ? "password"
                  : key.includes("phone")
                  ? "number"
                  : "text"
              }
              name={key}
              placeholder={`Enter ${key.replace(/^t/, "").toLowerCase()}`}
              required
              style={{
                ...styles.input,
                border: "1px solid #ccc",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                transition: "0.2s",
              }}
              value={teacher[key]}
              onChange={handleTeacherChange}
            />
          </div>
        ))}
        <button
          type="submit"
          style={{
            ...styles.formButton,
            backgroundColor: "#0078ff",
            marginTop: "15px",
          }}
        >
          Add Teacher
        </button>
      </form>
    </div>
  );

  // const sidebarItemStyle = (tab) => ({
  //   ...styles.sidebarItem,
  //   ...(activeTab === tab ? styles.sidebarItemActive : {}),
  // });

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Admin</h2>
        <ul style={styles.sidebarList}>
          {sidebarItems.map((item) => (
            <li
              key={item.tab}
              style={{
                ...styles.sidebarItem,
                ...(activeTab === item.tab ? styles.sidebarItemActive : {}),
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              onClick={() => setActiveTab(item.tab)}
            >
              {item.icon}
              {item.label}
            </li>
          ))}
          <li
            style={{
              ...styles.sidebarItem,
              ...styles.logout,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.tabTitle}>{activeTab.toUpperCase()}</h1>
        {activeTab === "dashboard" && (
          <div style={styles.cardsContainer}>
            {dashboardCards.map((card, index) => {
              const isHovered = hoveredCard === index;
              return (
                <div
                  key={index}
                  style={{
                    ...styles.card,
                    transform: isHovered
                      ? "translateY(-5px)"
                      : "translateY(0px)",
                    boxShadow: isHovered
                      ? "0 8px 20px rgba(0,0,0,0.2)"
                      : "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <h3 style={styles.cardTitle}>{card.title}</h3>
                  <h1 style={styles.cardValue}>{card.value}</h1>
                  <p style={styles.cardDesc}>{card.desc}</p>
                </div>
              );
            })}
          </div>
        )}
        {activeTab === "students" && renderStudentTable()}
        {activeTab === "teachers" && renderTeacherTable()}
        {activeTab === "addStudent" && renderAddStudentForm()}
        {activeTab === "addTeacher" && renderAddTeacherForm()}
      </div>
    </div>
  );
};

export default AdminDashboard;
