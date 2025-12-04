import React, { useState } from "react";
import axios from "axios";

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

  const buttonSecondary = {
    backgroundColor: "#3AAFA9", // Teal Green
    borderColor: "#3AAFA9",
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
          btnRegister={buttonSecondary}
        />
      )}
      {activeTab === "teacher" && (
        <UserForm
          type="Teacher"
          cardStyle={cardStyle}
          btnLogin={buttonPrimary}
          btnRegister={buttonSecondary}
        />
      )}
      {activeTab === "admin" && (
        <AdminForm cardStyle={cardStyle} btnLogin={buttonPrimary} />
      )}
    </div>
  );
}

function UserForm({ type, cardStyle, btnLogin, btnRegister }) {
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
        <button className="btn w-100 mb-3" style={btnLogin}>
          Login
        </button>
      </form>

      <h5>{type} Register</h5>
      <form>
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
        />
        <button className="btn w-100" style={btnRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

// Admin form
function AdminForm({ cardStyle, btnLogin }) {
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/admin/login",
        admin
      );

      alert("Admin Login Successful!");
      console.log(res.data);

      // Example: if backend returns token
      // localStorage.setItem("adminToken", res.data.token);
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
          name="email"
          className="form-control mb-2"
          placeholder="Email"
          value={admin.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          className="form-control mb-2"
          placeholder="Password"
          value={admin.password}
          onChange={handleChange}
        />

        <button className="btn w-100" style={btnLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
