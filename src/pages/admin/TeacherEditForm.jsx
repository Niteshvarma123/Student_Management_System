import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function TeacherEditForm() {
  const { temail } = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    tname: "",
    temail: "",
    tpassword: "",
  });

  // Fetch teacher data
  useEffect(() => {
    axios
      .get(`http://localhost:8080/teacher/${temail}`)
      .then((res) => setTeacher(res.data))
      .catch((err) => {
        console.error("Failed to load teacher:", err);
        alert("Failed to load teacher data");
      });
  }, [temail]);

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8080/teacher/update/${temail}`,
        teacher
      );
      alert("Teacher updated successfully!");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update teacher");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Edit Teacher</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label>Name</label>
          <input
            name="tname"
            value={teacher.tname}
            onChange={handleChange}
            placeholder="Enter teacher name"
            style={styles.input}
            required
          />

          <label>Email</label>
          <input
            name="temail"
            value={teacher.temail}
            onChange={handleChange}
            placeholder="Enter teacher email"
            style={styles.input}
            type="email"
            required
          />

          <label>Password</label>
          <input
            name="tpassword"
            value={teacher.tpassword}
            onChange={handleChange}
            placeholder="Enter teacher password"
            style={styles.input}
            type="password"
            required
          />

          <button type="submit" style={styles.button}>
            Update Teacher
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
    padding: "60px 0",
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
