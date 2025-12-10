import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentEditForm() {
  const { id } = useParams();
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

  // ------------ FETCH STUDENT BY ID -------------
  useEffect(() => {
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((res) => setStudent(res.data))
      .catch(() => alert("Failed to load student"));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // ------------- UPDATE STUDENT ------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Try main endpoint
      await axios.put(`http://localhost:8080/students/${id}`, student);

      alert("Student updated successfully!");
      navigate("/admin-dashboard");
    } catch (err) {
      // SECOND TRY – fallback for backend difference
      try {
        await axios.put(`http://localhost:8080/student/update/${id}`, student);

        alert("Student updated successfully!");
        navigate("/admin-dashboard");
      } catch (err2) {
        alert("Failed to edit student — tell me the backend URL!");
      }
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Edit Student</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="sname"
            value={student.sname}
            onChange={handleChange}
            placeholder="Name"
            style={styles.input}
          />

          <input
            name="semail"
            value={student.semail}
            onChange={handleChange}
            placeholder="Email"
            style={styles.input}
          />

          <input
            name="sphone"
            value={student.sphone}
            onChange={handleChange}
            placeholder="Phone"
            style={styles.input}
          />

          <input
            name="stotalfee"
            value={student.stotalfee}
            onChange={handleChange}
            placeholder="Total Fee"
            style={styles.input}
          />

          <input
            name="spaid"
            value={student.spaid}
            onChange={handleChange}
            placeholder="Paid"
            style={styles.input}
          />

          <input
            name="sunpaid"
            value={student.sunpaid}
            onChange={handleChange}
            placeholder="Unpaid"
            style={styles.input}
          />

          <input
            name="saddress"
            value={student.saddress}
            onChange={handleChange}
            placeholder="Address"
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
}

// ---------------- STYLES ----------------
const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f7f7f7",
  },
  card: {
    width: "420px",
    padding: "30px",
    borderRadius: "15px",
    background: "white",
    boxShadow: "0px 5px 15px rgba(0,0,0,0.15)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    marginTop: "10px",
    background: "#4A90E2",
    border: "none",
    color: "white",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
