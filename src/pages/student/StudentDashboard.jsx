import React, { useState } from "react";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [movingText] = useState("Student Dashboard");

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Student</h2>

        <ul>
          <li
            className={activeTab === "home" ? "active" : ""}
            onClick={() => setActiveTab("home")}
          >
            🏠 Home
          </li>

          <li
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            👤 My Profile
          </li>

          <li
            className={activeTab === "attendance" ? "active" : ""}
            onClick={() => setActiveTab("attendance")}
          >
            📅 Attendance
          </li>

          <li
            className={activeTab === "marks" ? "active" : ""}
            onClick={() => setActiveTab("marks")}
          >
            📊 Marks
          </li>

          <li className="logout">🚪 Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="tab-title">{movingText.toUpperCase()}</h1>

        {/* HOME — shows cards */}
        {activeTab === "home" && (
          <div className="cards-container">
            <div className="card" onClick={() => setActiveTab("profile")}>
              <h3>My Profile</h3>
              <p>View your details</p>
            </div>

            <div className="card" onClick={() => setActiveTab("attendance")}>
              <h3>Attendance</h3>
              <p>Track your presence</p>
            </div>

            <div className="card" onClick={() => setActiveTab("marks")}>
              <h3>Marks</h3>
              <p>View exam performance</p>
            </div>
          </div>
        )}

        {/* Profile */}
        {activeTab === "profile" && (
          <div className="detail-card">
            <h2>My Profile</h2>

            <table className="profile-table">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{/* Insert DB name here */} John Doe</td>
                </tr>

                <tr>
                  <th>Roll No</th>
                  <td>{/* Insert DB roll here */} 12345</td>
                </tr>

                <tr>
                  <th>Branch</th>
                  <td>{/* Insert DB branch here */} CSE</td>
                </tr>

                <tr>
                  <th>Email</th>
                  <td>{/* Insert DB email here */} johndoe@gmail.com</td>
                </tr>

                <tr>
                  <th>Phone</th>
                  <td>{/* Insert DB phone here */} 9876543210</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Fees */}
        {activeTab === "fees" && (
          <div className="detail-card">
            <h2>Fees Info</h2>
            <p>Total: ₹50,000</p>
            <p>Paid: ₹40,000</p>
            <p>Due: ₹10,000</p>
          </div>
        )}

        {/* Attendance */}
        {activeTab === "attendance" && (
          <div className="detail-card">
            <h2>Attendance</h2>
            <p>Present: 160 / 180</p>
            <p>Percentage: 88.8%</p>
          </div>
        )}

        {/* Marks */}
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
