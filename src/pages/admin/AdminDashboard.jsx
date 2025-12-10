import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const styles = {
  dashboard: {
    display: "flex",
    height: "100vh",
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
  const [studentList, setStudentList] = useState([]);

  // Student form state
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

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/student/all");
      setStudentList(res.data || []);
    } catch (error) {
      console.error("Failed to fetch students:", error);
      setStudentList([]);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle input change
  const handleStudentChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // Add student
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
      fetchStudents(); // refresh table
    } catch (err) {
      console.error(err);
      alert("Failed to register student");
    }
  };

  // Delete student
  const handleDelete = async (stu) => {
    try {
      await axios.delete(
        `http://localhost:8080/students/${stu.id ?? stu.srollno}`
      );
      alert("Student deleted successfully");
      fetchStudents();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete student");
    }
  };

  const dashboardCards = [
    {
      title: "Total Students",
      value: studentList.length,
      desc: "Registered students",
    },
    { title: "Total Teachers", value: "20", desc: "Registered teachers" },
    { title: "Classes", value: "12", desc: "Active classes" },
    { title: "Fees Collected", value: student.spaid, desc: "This semester" },
    { title: "Attendance Avg", value: "88%", desc: "Overall" },
    { title: "Pending Registrations", value: "3", desc: "New requests" },
  ];

  const teacherTable = [
    { name: "Kavya", empId: "T001", subject: "Math", status: "Active" },
    { name: "Ramesh", empId: "T002", subject: "Science", status: "Active" },
  ];

  const renderDashboardCards = () => (
    <div style={styles.cardsContainer}>
      {dashboardCards.map((card, index) => {
        const isHovered = hoveredCard === index;
        return (
          <div
            key={index}
            style={{
              ...styles.card,
              transform: isHovered ? "translateY(-5px)" : "translateY(0px)",
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
  );

  const renderStudentTable = () => (
    <div style={styles.tableContainer}>
      <h2>Students</h2>
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
              <tr key={stu.id ?? stu.srollno}>
                <td style={styles.td}>{stu.rollNo ?? stu.srollno}</td>
                <td style={styles.td}>{stu.name ?? stu.sname}</td>
                <td style={styles.td}>{stu.email ?? stu.semail}</td>
                <td style={styles.td}>{stu.phone ?? stu.sphone}</td>
                <td style={styles.td}>{stu.totalFee ?? stu.stotalfee}</td>
                <td style={styles.td}>{stu.paid ?? stu.spaid}</td>
                <td style={styles.td}>{stu.unpaid ?? stu.sunpaid}</td>
                <td style={styles.td}>{stu.address ?? stu.saddress}</td>
                <td style={styles.td}>
                  <button
                    style={{ ...styles.buttonBase, ...styles.editButton }}
                    onClick={() =>
                      navigate(`/edit/student/${stu.id ?? stu.srollno}`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    style={{ ...styles.buttonBase, ...styles.deleteButton }}
                    onClick={() => handleDelete(stu)}
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

  const renderTeacherTable = () => (
    <div style={styles.tableContainer}>
      <h2>Teachers</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Employee ID</th>
            <th style={styles.th}>Subject</th>
            <th style={styles.th}>Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teacherTable.map((t, idx) => (
            <tr key={idx}>
              <td style={styles.td}>{t.name}</td>
              <td style={styles.td}>{t.empId}</td>
              <td style={styles.td}>{t.subject}</td>
              <td style={styles.td}>{t.status}</td>
              <td style={styles.td}>
                <button style={{ ...styles.buttonBase, ...styles.editButton }}>
                  Edit
                </button>
                <button
                  style={{ ...styles.buttonBase, ...styles.deleteButton }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderAddStudentForm = () => (
    <div style={styles.formCard}>
      <h2>Add Student</h2>
      <form style={styles.form} onSubmit={handleStudentSubmit}>
        {Object.keys(student).map((key) => (
          <input
            key={key}
            type={
              key.toLowerCase().includes("email")
                ? "email"
                : key.toLowerCase().includes("password")
                ? "password"
                : key.toLowerCase().includes("phone") ||
                  key.toLowerCase().includes("roll") ||
                  key.toLowerCase().includes("fee") ||
                  key.toLowerCase().includes("paid") ||
                  key.toLowerCase().includes("unpaid")
                ? "number"
                : "text"
            }
            name={key}
            placeholder={key}
            required
            style={styles.input}
            value={student[key]}
            onChange={handleStudentChange}
          />
        ))}
        <button type="submit" style={styles.formButton}>
          Add Student
        </button>
      </form>
    </div>
  );

  const renderAddTeacherForm = () => (
    <div style={styles.formCard}>
      <h2>Add Teacher</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Name" required style={styles.input} />
        <input
          type="text"
          placeholder="Employee ID"
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Subject"
          required
          style={styles.input}
        />
        <input type="email" placeholder="Email" required style={styles.input} />
        <input
          type="password"
          placeholder="Password"
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Contact No"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.formButton}>
          Add Teacher
        </button>
      </form>
    </div>
  );

  const sidebarItemStyle = (tab) => ({
    ...styles.sidebarItem,
    ...(activeTab === tab ? styles.sidebarItemActive : {}),
  });

  return (
    <div style={styles.dashboard}>
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Admin</h2>
        <ul style={styles.sidebarList}>
          <li
            style={sidebarItemStyle("dashboard")}
            onClick={() => setActiveTab("dashboard")}
          >
            📊 Dashboard
          </li>
          <li
            style={sidebarItemStyle("students")}
            onClick={() => setActiveTab("students")}
          >
            👨‍🎓 Students
          </li>
          <li
            style={sidebarItemStyle("teachers")}
            onClick={() => setActiveTab("teachers")}
          >
            👩‍🏫 Teachers
          </li>
          <li
            style={sidebarItemStyle("addStudent")}
            onClick={() => setActiveTab("addStudent")}
          >
            ➕ Add Student
          </li>
          <li
            style={sidebarItemStyle("addTeacher")}
            onClick={() => setActiveTab("addTeacher")}
          >
            ➕ Add Teacher
          </li>
          <li style={{ ...styles.sidebarItem, ...styles.logout }}>🚪 Logout</li>
        </ul>
      </div>

      <div style={styles.mainContent}>
        <h1 style={styles.tabTitle}>{activeTab.toUpperCase()}</h1>
        {activeTab === "dashboard" && renderDashboardCards()}
        {activeTab === "students" && renderStudentTable()}
        {activeTab === "teachers" && renderTeacherTable()}
        {activeTab === "addStudent" && renderAddStudentForm()}
        {activeTab === "addTeacher" && renderAddTeacherForm()}
      </div>
    </div>
  );
};

export default AdminDashboard;
