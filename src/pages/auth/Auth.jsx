import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("student");

  const cardStyle = {
    backgroundColor: "#FCE2C5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  const buttonPrimary = {
    backgroundColor: "#FF6F3C",
    borderColor: "#FF6F3C",
    color: "#F9F9F9",
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center" style={{ color: "#333333" }}>
        Login / Register
      </h2>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "student" ? "active" : ""}`}
            onClick={() => setActiveTab("student")}
          >
            Student
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "teacher" ? "active" : ""}`}
            onClick={() => setActiveTab("teacher")}
          >
            Teacher
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "admin" ? "active" : ""}`}
            onClick={() => setActiveTab("admin")}
          >
            Admin
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      {activeTab === "student" && (
        <StudentForm cardStyle={cardStyle} btnLogin={buttonPrimary} />
      )}
      {activeTab === "teacher" && (
        <TeacherForm cardStyle={cardStyle} btnLogin={buttonPrimary} />
      )}
      {activeTab === "admin" && (
        <AdminForm cardStyle={cardStyle} btnLogin={buttonPrimary} />
      )}
    </div>
  );
}

/* ===============================
      STUDENT LOGIN FORM 
================================ */
function StudentForm({ cardStyle, btnLogin }) {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    semail: "",
    spassword: "",
  });

  const handleChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/student/slogin",
        student
      );

      console.log("Student Login:", res.data);
      // alert("Student Login Successful!");

      navigate("/student/dashboard");
    } catch (err) {
      alert("Student Login Failed!");
      console.error(err);
    }
  };

  return (
    <div style={cardStyle}>
      <h5>Student Login</h5>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="semail"
          className="form-control mb-2"
          placeholder="Email"
          value={student.semail}
          onChange={handleChange}
        />

        <input
          type="password"
          name="spassword"
          className="form-control mb-2"
          placeholder="Password"
          value={student.spassword}
          onChange={handleChange}
        />

        <button className="btn w-100" style={btnLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

/* ===============================
      TEACHER LOGIN FORM 
================================ */
function TeacherForm({ cardStyle, btnLogin }) {
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({
    temail: "",
    tpassword: "",
  });

  const handleChange = (e) =>
    setTeacher({ ...teacher, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/auth/tlogin",
        teacher
      );

      console.log("Teacher Login:", res.data);
      // alert("Teacher Login Successful!");

      navigate("/teacher/dashboard");
    } catch (err) {
      alert("Teacher Login Failed!");
      console.error(err);
    }
  };

  return (
    <div style={cardStyle}>
      <h5>Teacher Login</h5>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="temail"
          className="form-control mb-2"
          placeholder="Email"
          value={teacher.temail}
          onChange={handleChange}
        />

        <input
          type="password"
          name="tpassword"
          className="form-control mb-2"
          placeholder="Password"
          value={teacher.tpassword}
          onChange={handleChange}
        />

        <button className="btn w-100" style={btnLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

/* ===============================
          ADMIN LOGIN FORM 
================================ */
function AdminForm({ cardStyle, btnLogin }) {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    adminemail: "",
    adminpassword: "",
  });

  const handleChange = (e) =>
    setAdmin({ ...admin, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/auth/login", admin);

      console.log("Admin Login:", res.data);
      // alert("Admin Login Successful!");

      navigate("/admin/dashboard");
    } catch (err) {
      alert("Admin Login Failed!");
      console.error(err);
    }
  };

  return (
    <div style={cardStyle}>
      <h5>Admin Login</h5>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="adminemail"
          className="form-control mb-2"
          placeholder="Email"
          value={admin.adminemail}
          onChange={handleChange}
        />

        <input
          type="password"
          name="adminpassword"
          className="form-control mb-2"
          placeholder="Password"
          value={admin.adminpassword}
          onChange={handleChange}
        />

        <button className="btn w-100" style={btnLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
