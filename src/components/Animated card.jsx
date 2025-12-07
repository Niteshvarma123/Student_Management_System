import React, { useState } from "react";

export default function AnimatedCard({ title, text, children }) {
  const [hover, setHover] = useState(false);

  const baseStyle = {
    borderRadius: "12px",
    border: "1px solid #eef2f6",
    background: "white",
    padding: "22px",
    height: "100%",
    transition: "all 0.28s cubic-bezier(.2,.8,.2,1)",
    cursor: "pointer",
    transform: hover ? "translateY(-8px) scale(1.01)" : "translateY(0px) scale(1)",
    boxShadow: hover
      ? "0 14px 32px rgba(22,37,68,0.16)"
      : "0 6px 18px rgba(22,37,68,0.06)",
  };

  return (
    <div
      style={baseStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {title && (
        <div style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 8, color: "#1f3d7a" }}>
          {title}
        </div>
      )}

      {text && (
        <p style={{ fontSize: "0.95rem", lineHeight: 1.5, color: "#444", marginBottom: 12 }}>
          {text}
        </p>
      )}

      {children}
    </div>
  );
}
