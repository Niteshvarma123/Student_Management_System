import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Sample Data
  const dashboardCards = [
    { title: "Total Students", value: "250", desc: "Registered students" },
    { title: "Total Teachers", value: "20", desc: "Registered teachers" },
    { title: "Classes", value: "12", desc: "Active classes" },
    { title: "Fees Collected", value: "₹5,00,000", desc: "This semester" },
    { title: "Attendance Avg", value: "88%", desc: "Overall" },
    { title: "Pending Registrations", value: "3", desc: "New requests" },
  ];

  const studentTable = [
    { name: "Prudhvi", roll: "123", class: "10th", status: "Active" },
    { name: "Rohit", roll: "124", class: "10th", status: "Active" },
    { name: "Kavya", roll: "125", class: "9th", status: "Pending" },
  ];

  const teacherTable = [
    { name: "Kavya", empId: "T001", subject: "Math", status: "Active" },
    { name: "Ramesh", empId: "T002", subject: "Science", status: "Active" },
  ];

  const renderDashboardCards = () => (
    <div className="cards-container">
      {dashboardCards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.title}</h3>
          <h1>{card.value}</h1>
          <p>{card.desc}</p>
        </div>
      ))}
    </div>
  );

  const renderStudentTable = () => (
    <div className="table-container">
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentTable.map((s, idx) => (
            <tr key={idx}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.class}</td>
              <td>{s.status}</td>
              <td>
                <button>Edit</button> <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderTeacherTable = () => (
    <div className="table-container">
      <h2>Teachers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teacherTable.map((t, idx) => (
            <tr key={idx}>
              <td>{t.name}</td>
              <td>{t.empId}</td>
              <td>{t.subject}</td>
              <td>{t.status}</td>
              <td>
                <button>Edit</button> <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderAddStudentForm = () => (
    <div className="form-card">
      <h2>Add Student</h2>
      <form>
        <input type="number" placeholder="Roll No" required />
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="number" placeholder="Phone" required />
        <input type="number" placeholder="Total Fee" required />
        <input type="number" placeholder="Paid" required />
        <input type="number" placeholder="Unpaid" required />
        <input type="text" placeholder="Address" required />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );

  const renderAddTeacherForm = () => (
    <div className="form-card">
      <h2>Add Teacher</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Employee ID" required />
        <input type="text" placeholder="Subject" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="text" placeholder="Contact No" required />
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Admin</h2>
        <ul>
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => {
              setActiveTab("dashboard");
            }}
          >
            📊 Dashboard
          </li>
          <li
            className={activeTab === "students" ? "active" : ""}
            onClick={() => {
              setActiveTab("students");
            }}
          >
            👨‍🎓 Students
          </li>
          <li
            className={activeTab === "teachers" ? "active" : ""}
            onClick={() => {
              setActiveTab("teachers");
            }}
          >
            👩‍🏫 Teachers
          </li>
          <li
            className={activeTab === "addStudent" ? "active" : ""}
            onClick={() => {
              setActiveTab("addStudent");
            }}
          >
            ➕ Add Student
          </li>
          <li
            className={activeTab === "addTeacher" ? "active" : ""}
            onClick={() => {
              setActiveTab("addTeacher");
            }}
          >
            ➕ Add Teacher
          </li>
          <li className="logout">🚪 Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="tab-title">{activeTab.toUpperCase()}</h1>

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
