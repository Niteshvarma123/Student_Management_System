import React from "react";

export default function AdminDashboard() {
  const cardStyle = {
    backgroundColor: "#FCE2C5", // Warm Sand
    borderRadius: "10px",
    padding: "20px",
    color: "#333333",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
  };

  const tableStyle = {
    backgroundColor: "#FCE2C5",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
    padding: "15px",
  };

  const headerStyle = {
    backgroundColor: "#1E2F2F", // Deep Forest (navbar/table header)
    color: "#F9F9F9",
  };

  const editBtn = { backgroundColor: "#FF6F3C", color: "#F9F9F9" }; // Solar Orange
  const deleteBtn = { backgroundColor: "#3AAFA9", color: "#F9F9F9" }; // Teal Green

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ color: "#333333" }}>
        Admin Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="row mb-4">
        {["Total Students", "Total Teachers", "Total Classes"].map(
          (title, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div style={cardStyle}>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: "24px" }}>{i * 10 + 50}</div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Students Table */}
      <h4 style={{ color: "#333333" }}>Students</h4>
      <div style={tableStyle}>
        <table className="table">
          <thead style={headerStyle}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "John Doe", email: "john@example.com", cls: "10A" },
              { name: "Jane Smith", email: "jane@example.com", cls: "10B" },
            ].map((stu, i) => (
              <tr key={i}>
                <td>{stu.name}</td>
                <td>{stu.email}</td>
                <td>{stu.cls}</td>
                <td>
                  <button className="btn btn-sm me-2" style={editBtn}>
                    Edit
                  </button>
                  <button className="btn btn-sm" style={deleteBtn}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
