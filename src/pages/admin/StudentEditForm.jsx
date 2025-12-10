import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentEditForm() {
  const { srollno } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    sname: "",
    semail: "",
    sphone: "",
    stotalfee: "",
    spaid: "",
    sunpaid: "",
    saddress: "",
  });

  // Fetch student data
  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${srollno}`)
      .then((res) => setStudent(res.data))
      .catch((err) => {
        console.error("Failed to load student:", err);
        alert("Failed to load student data");
      });
  }, [srollno]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/student/update/${srollno}`,
        student
      );
      alert("Student updated successfully!");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update student");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Edit Student</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>Name</label>
          <input
            name="sname"
            value={student.sname}
            onChange={handleChange}
            placeholder="Name"
            style={styles.input}
            required
          />

          <label>Email</label>
          <input
            name="semail"
            value={student.semail}
            onChange={handleChange}
            placeholder="Email"
            style={styles.input}
            type="email"
            required
          />

          <label>Phone</label>
          <input
            name="sphone"
            value={student.sphone}
            onChange={handleChange}
            placeholder="Phone"
            style={styles.input}
            type="tel"
            required
          />

          <label>Total Fee</label>
          <input
            name="stotalfee"
            value={student.stotalfee}
            onChange={handleChange}
            placeholder="Total Fee"
            style={styles.input}
            type="number"
            required
          />

          <label>Paid</label>
          <input
            name="spaid"
            value={student.spaid}
            onChange={handleChange}
            placeholder="Paid"
            style={styles.input}
            type="number"
            required
          />

          <label>Unpaid</label>
          <input
            name="sunpaid"
            value={student.sunpaid}
            onChange={handleChange}
            placeholder="Unpaid"
            style={styles.input}
            type="number"
            required
          />

          <label>Address</label>
          <input
            name="saddress"
            value={student.saddress}
            onChange={handleChange}
            placeholder="Address"
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 0", // space from header/footer
    background: "#f0f2f5",
  },
  card: {
    width: "480px",
    padding: "35px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
  },
  button: {
    padding: "12px",
    marginTop: "10px",
    background: "#4A90E2",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.2s",
  },
};
