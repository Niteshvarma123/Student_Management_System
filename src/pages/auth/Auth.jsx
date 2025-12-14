import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // --- LAYOUT STYLES ---
  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
background: "linear-gradient(135deg, #7C3AED 0%, #86d9ffff 40%, #ed3ae4ff 100%)",
    fontFamily:
      "'Poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  };

  const cardWrapper = {
    width: "100%",
    maxWidth: "1200px",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 25px 60px rgba(15,23,42,0.8)",
    display: "flex",
    background: "#0b1120",
  };

  const leftPane = {
    flex: 1,
    padding: "32px 32px",
    background: "#020617",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const rightPaneBase = {
    flex: 1.2,
    padding: "32px 36px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#f9fafb",
    position: "relative",
  };

  // --- BANNER CONTENT PER TAB ---
  const getBannerConfig = () => {
    if (activeTab === "student") {
      return {
        bg: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 40%, #6366f1 100%)",
        title: "Welcome to the student portal",
        subtitle:
          "Access your courses, fees, results and updates in one place.",
        bigLabel: "S",
        tag: "Student Access",
      };
    }
    if (activeTab === "teacher") {
      return {
        bg: "linear-gradient(135deg, #0f766e 0%, #14b8a6 40%, #22c55e 100%)",
        title: "Welcome, teacher",
        subtitle:
          "Manage classes, attendance, assignments and student progress.",
        bigLabel: "T",
        tag: "Teacher Console",
      };
    }
    return {
      // admin
      bg: "linear-gradient(135deg, #b91c1c 0%, #f97316 40%, #facc15 100%)",
      title: "Admin control center",
      subtitle:
        "Configure departments, users and analytics for your institute.",
      bigLabel: "A",
      tag: "Admin Panel",
    };
  };

  const bannerConfig = getBannerConfig();

  // --- COMMON STYLES ---
  // const brandText = {
  //   fontSize: "1.2rem",
  //   fontWeight: 700,
  //   color: "#e5e7eb",
  //   marginBottom: 24,
  // };

  const loginTitle = {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: 8,
  };

  const loginSubtitle = {
    fontSize: "0.9rem",
    color: "#9ca3af",
    marginBottom: 24,
  };

  const tabRow = {
    display: "flex",
    gap: 8,
    marginBottom: 24,
    background: "#020617",
    padding: "4px",
    borderRadius: "999px",
    border: "1px solid #1f2937",
  };

  const tabButton = (isActive) => ({
    flex: 1,
    border: "none",
    borderRadius: "999px",
    padding: "8px 10px",
    fontSize: "0.85rem",
    cursor: "pointer",
    background: isActive ? "#6366f1" : "transparent",
    color: isActive ? "#f9fafb" : "#9ca3af",
    fontWeight: isActive ? 600 : 400,
    transition: "all 0.16s ease",
  });

  const formControl = {
    background: "#020617",
    border: "1px solid #1f2937",
    borderRadius: "999px",
    fontSize: "0.85rem",
    padding: "9px 14px",
    color: "#e5e7eb",
    width: "100%",
    marginBottom: 12,
    outline: "none",
  };

  const primaryButton = {
    width: "100%",
    border: "none",
    borderRadius: "999px",
    padding: "9px 14px",
    fontSize: "0.9rem",
    fontWeight: 600,
    background: "#6366f1",
    color: "#f9fafb",
    marginTop: 8,
    cursor: "pointer",
  };

  const smallLinkRow = {
    marginTop: 10,
    fontSize: "0.8rem",
    color: "#9ca3af",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const smallLink = {
    color: "#c4b5fd",
    cursor: "pointer",
  };

  // --- BANNER STYLES ---
  const bannerTitle = {
    fontSize: "1.8rem",
    fontWeight: 700,
    marginBottom: 8,
  };

  const bannerSubtitle = {
    fontSize: "0.9rem",
    color: "rgba(249,250,251,0.9)",
    maxWidth: "320px",
    marginBottom: 24,
  };

  const tagStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.75rem",
    padding: "4px 10px",
    borderRadius: "999px",
    background: "rgba(15,23,42,0.18)",
    marginBottom: 12,
  };

  const circleMonogram = {
    position: "absolute",
    right: 32,
    bottom: 32,
    width: 96,
    height: 96,
    borderRadius: "40px",
    background: "rgba(15,23,42,0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.8rem",
    fontWeight: 700,
  };

  const ghostShapes = {
    position: "absolute",
    inset: 0,
    opacity: 0.14,
    pointerEvents: "none",
  };

  return (
    <div style={pageStyle}>
      <div style={cardWrapper}>
        {/* LEFT: LOGIN */}
        <div style={leftPane}>
          <div>
            <div style={loginTitle}>Login</div>
            <div style={loginSubtitle}>Enter your account details</div>

            {/* Tabs */}
            <div style={tabRow}>
              <button
                type="button"
                style={tabButton(activeTab === "student")}
                onClick={() => setActiveTab("student")}
              >
                Student
              </button>
              <button
                type="button"
                style={tabButton(activeTab === "teacher")}
                onClick={() => setActiveTab("teacher")}
              >
                Teacher
              </button>
              <button
                type="button"
                style={tabButton(activeTab === "admin")}
                onClick={() => setActiveTab("admin")}
              >
                Admin
              </button>
            </div>

            {/* FORM (same fields, label changes) */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  let res;
                  if (activeTab === "student") {
                    res = await axios.post(
                      "http://localhost:8080/student/slogin",
                      { semail: email, spassword: password }
                    );
                    if (res.data === "Login Successful") {
                      navigate("/student/dashboard");
                    } else {
                      alert(res.data);
                    }
                  } else if (activeTab === "teacher") {
                    res = await axios.post(
                      "http://localhost:8080/auth/tlogin",
                      { temail: email, tpassword: password }
                    );
                    if (res.data === "Login Successful") {
                      navigate("/teacher/dashboard");
                    } else {
                      alert(res.data);
                    }
                  } else if (activeTab === "admin") {
                    res = await axios.post("http://localhost:8080/auth/login", {
                      adminemail: email,
                      adminpassword: password,
                    });
                    if (res.data === "Login Successful") {
                      navigate("/admin/dashboard");
                    } else {
                      alert(res.data);
                    }
                  }
                } catch (err) {
                  alert("Login Failed!");
                  console.error(err);
                }
              }}
            >
              <label for="em" style={{ fontWeight: "700" }}>
                Email Address:
              </label>
              <input
                type="email"
                placeholder="Email"
                id="em"
                style={formControl}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="ps" style={{ fontWeight: "700" }}>
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                style={formControl}
                id="ps"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div style={smallLinkRow}>
                <span style={smallLink}>Forgot password?</span>
              </div>

              <button type="submit" style={primaryButton}>
                Login
              </button>
            </form>
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: "0.8rem",
              color: "#6b7280",
            }}
          >
            © {new Date().getFullYear()} SMS Portal
          </div>
        </div>

        {/* RIGHT: BANNER */}
        <div style={{ ...rightPaneBase, background: bannerConfig.bg }}>
          {/* Glass shapes */}
          <svg
            style={ghostShapes}
            viewBox="0 0 400 300"
            preserveAspectRatio="xMidYMid slice"
          >
            <circle cx="70" cy="60" r="60" fill="#ffffff" />
            <rect
              x="220"
              y="40"
              width="120"
              height="80"
              rx="24"
              fill="#ffffff"
            />
            <rect
              x="60"
              y="180"
              width="180"
              height="80"
              rx="26"
              fill="#ffffff"
            />
          </svg>

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={tagStyle}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "999px",
                  background: "#22c55e",
                }}
              ></span>
              {bannerConfig.tag}
            </div>

            <h2 style={bannerTitle}>{bannerConfig.title}</h2>
            <p style={bannerSubtitle}>{bannerConfig.subtitle}</p>

            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(249,250,251,0.9)",
              }}
            >
              Login to view your{" "}
              {activeTab === "student" &&
                "subjects, fees, results, and notices."}
              {activeTab === "teacher" &&
                "class schedule, attendance, and student performance."}
              {activeTab === "admin" &&
                "institution data, manage users, and configure settings."}
            </p>
          </div>

          <div style={circleMonogram}>{bannerConfig.bigLabel}</div>
        </div>
      </div>
    </div>
  );
}
