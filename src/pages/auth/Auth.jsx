import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("student");

  const cardStyle = {
    backgroundColor: "#FCE2C5", // Warm Sand
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  const buttonPrimary = {
    backgroundColor: "#FF6F3C", // Solar Orange
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
        <UserForm
          type="Student"
          cardStyle={cardStyle}
          btnLogin={buttonPrimary}
        />
      )}
      {activeTab === "teacher" && (
        <UserForm
          type="Teacher"
          cardStyle={cardStyle}
          btnLogin={buttonPrimary}
        />
      )}
      {activeTab === "admin" && (
        <AdminForm cardStyle={cardStyle} btnLogin={buttonPrimary} />
      )}
    </div>
  );
}

function UserForm({ type, cardStyle, btnLogin }) {
  return (
    <div style={cardStyle}>
      <h5>{type} Login</h5>
      <form className="mb-3">
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
        />
        <button className="btn w-100" style={btnLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

// Admin form
function AdminForm({ cardStyle, btnLogin }) {
  const [admin, setAdmin] = useState({
    adminemail: "",
    adminpassword: "",
  });

  const navigate = useNavigate(); // ⭐ Needed for redirect

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/auth/login", admin);

      // alert("Admin Login Successful!");
      console.log(res.data);

      // Example: Save token if needed
      // localStorage.setItem("adminToken", res.data.token);

      navigate("/admin/dashboard"); // ⭐ Redirect after success
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
