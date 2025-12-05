import React, { useState } from "react";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const dashboardCards = [
    { title: "Total Students", value: "120", desc: "In current semester" },
    { title: "Attendance Today", value: "92%", desc: "Class average" },
    { title: "Assignments Pending", value: "8", desc: "Needs review" },
  ];

  const studentCards = [
    { name: "Prudhvi", class: "10th Grade", status: "Active" },
    { name: "Rohit", class: "10th Grade", status: "Active" },
    { name: "Kavya", class: "9th Grade", status: "Review" },
  ];

  const attendanceCards = [
    { date: "02 Dec 2025", present: 115, absent: 5 },
    { date: "03 Dec 2025", present: 110, absent: 10 },
  ];

  const resultsCards = [
    { exam: "Mid Term", avg: "78%", top: "96%" },
    { exam: "Final Exam", avg: "82%", top: "99%" },
  ];

  const renderCards = () => {
    if (activeTab === "dashboard") {
      return dashboardCards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <h1>{card.value}</h1>
          <p>{card.desc}</p>
        </div>
      ));
    }
    if (activeTab === "students") {
      return studentCards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.name}</h3>
          <p>Class: {card.class}</p>
          <p>Status: {card.status}</p>
        </div>
      ));
    }
    if (activeTab === "attendance") {
      return attendanceCards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.date}</h3>
          <p>Present: {card.present}</p>
          <p>Absent: {card.absent}</p>
        </div>
      ));
    }
    if (activeTab === "results") {
      return resultsCards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.exam}</h3>
          <p>Average: {card.avg}</p>
          <p>Top Score: {card.top}</p>
        </div>
      ));
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Teacher</h2>
        <ul>
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activeTab === "students" ? "active" : ""}
            onClick={() => setActiveTab("students")}
          >
            Students
          </li>
          <li
            className={activeTab === "attendance" ? "active" : ""}
            onClick={() => setActiveTab("attendance")}
          >
            Attendance
          </li>
          <li
            className={activeTab === "results" ? "active" : ""}
            onClick={() => setActiveTab("results")}
          >
            Results
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="tab-title">{activeTab.toUpperCase()}</h1>

        <div className="cards-container">{renderCards()}</div>
      </div>
    </div>
  );
};

export default TeacherDashboard;