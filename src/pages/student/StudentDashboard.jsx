import React, { useState } from "react";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Student</h2>
        <ul>
          <li
            className={!activeTab ? "active" : ""}
            onClick={() => setActiveTab(null)}
          >
            🏠 Home
          </li>
          <li onClick={() => setActiveTab("fees")}>💰 Fees</li>
          <li onClick={() => setActiveTab("attendance")}>📅 Attendance</li>
          <li onClick={() => setActiveTab("marks")}>📊 Marks</li>
          <li className="logout">🚪 Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Home Screen */}
        {!activeTab && (
          <div className="card-container">
            <div className="section-card" onClick={() => setActiveTab("profile")}>
              My Profile
            </div>
            <div className="section-card" onClick={() => setActiveTab("fees")}>
              Fees
            </div>
            <div className="section-card" onClick={() => setActiveTab("attendance")}>
              Attendance
            </div>
            <div className="section-card" onClick={() => setActiveTab("marks")}>
              Marks
            </div>
          </div>
        )}

        {/* Tab Details */}
        {activeTab === "profile" && (
          <div className="detail-card">
            <h2>My Profile</h2>
            <p>Name: John Doe</p>
            <p>Roll No: 12345</p>
            <p>Branch: CSE</p>
          </div>
        )}

        {activeTab === "fees" && (
          <div className="detail-card">
            <h2>Fees Info</h2>
            <p>Total: ₹50,000</p>
            <p>Paid: ₹40,000</p>
            <p>Due: ₹10,000</p>
          </div>
        )}

        {activeTab === "attendance" && (
          <div className="detail-card">
            <h2>Attendance</h2>
            <p>Present: 160 / 180</p>
            <p>Percentage: 88.8%</p>
          </div>
        )}

        {activeTab === "marks" && (
          <div className="detail-card">
            <h2>Marks</h2>
            <p>Math: 90</p>
            <p>Science: 85</p>
            <p>Computer: 95</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default StudentDashboard;
