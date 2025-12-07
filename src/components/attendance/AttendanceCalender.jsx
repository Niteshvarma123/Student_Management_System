import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:8080/api/attendance"; // Spring Boot backend

// status -> color
const STATUS_COLORS = {
  PRESENT: "#10B981", // green
  ABSENT: "#EF4444",  // red
  HOLIDAY: "#3B82F6", // blue
  NONE: "#E5E7EB",    // grey (no status)
};

export default function AttendanceCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [attendance, setAttendance] = useState({}); // { '2025-12-01': 'PRESENT', ... }
  const [loading, setLoading] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-11

  // Format date as yyyy-MM-dd
  const formatDate = (d) =>
    d.toISOString().slice(0, 10);

  const fetchAttendance = async () => {
    setLoading(true);
    try {
      const resp = await fetch(
        `${API_BASE}?year=${year}&month=${month + 1}` // month 1-12
      );
      if (!resp.ok) throw new Error("Failed to fetch");
      const data = await resp.json(); // [{date:'2025-12-01', status:'PRESENT'}, ...]
      const map = {};
      data.forEach((item) => {
        map[item.date] = item.status;
      });
      setAttendance(map);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month]);

  // Build calendar grid
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDay = firstDayOfMonth.getDay(); // 0 = Sun
  const daysInMonth = lastDayOfMonth.getDate();

  const weeks = [];
  let current = 1 - startDay; // so that first row starts on Sunday

  while (current <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      if (current < 1 || current > daysInMonth) {
        week.push(null);
      } else {
        week.push(current);
      }
      current++;
    }
    weeks.push(week);
  }

  const handlePrevMonth = () => {
    const d = new Date(year, month - 1, 1);
    setCurrentDate(d);
  };

  const handleNextMonth = () => {
    const d = new Date(year, month + 1, 1);
    setCurrentDate(d);
  };

  // Cycle status when clicking a date
  const cycleStatus = (currentStatus) => {
    if (!currentStatus || currentStatus === "NONE") return "PRESENT";
    if (currentStatus === "PRESENT") return "ABSENT";
    if (currentStatus === "ABSENT") return "HOLIDAY";
    if (currentStatus === "HOLIDAY") return "NONE";
    return "PRESENT";
  };

  const handleDayClick = async (day) => {
    if (!day) return;
    const selectedDate = new Date(year, month, day);
    const key = formatDate(selectedDate);
    const oldStatus = attendance[key] || "NONE";
    const newStatus = cycleStatus(oldStatus);

    // Optimistic update
    setAttendance((prev) => ({
      ...prev,
      [key]: newStatus === "NONE" ? undefined : newStatus,
    }));

    try {
      const resp = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: key,
          status: newStatus,
        }),
      });
      if (!resp.ok) {
        throw new Error("Failed to save");
      }
    } catch (e) {
      console.error(e);
      // rollback on error
      setAttendance((prev) => ({
        ...prev,
        [key]: oldStatus === "NONE" ? undefined : oldStatus,
      }));
    }
  };

  // Inline styles
  const cardStyle = {
    borderRadius: 12,
    border: "1px solid #E5E7EB",
    padding: 16,
    background: "#FFFFFF",
    boxShadow: "0 6px 18px rgba(22,37,68,0.04)",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  };

  const navBtnStyle = {
    border: "1px solid #E5E7EB",
    borderRadius: 999,
    padding: "4px 10px",
    background: "#FFFFFF",
    cursor: "pointer",
    fontSize: "0.8rem",
  };

  const monthLabelStyle = {
    fontWeight: 700,
    fontSize: "1rem",
    color: "#111827",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: 4,
    fontSize: "0.8rem",
  };

  const cellHeaderStyle = {
    textAlign: "center",
    padding: "6px 0",
    color: "#6B7280",
    fontWeight: 600,
  };

  const cellStyle = (status) => ({
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    border: "1px solid #E5E7EB",
    cursor: "pointer",
    fontSize: "0.85rem",
    backgroundColor: STATUS_COLORS[status || "NONE"],
    color: status ? "#FFFFFF" : "#374151",
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
  });

  const legendItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: "0.8rem",
    color: "#4B5563",
  };

  const legendDotStyle = (color) => ({
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: color,
  });


  const loadingTextStyle = {
    fontSize: "0.8rem",
    color: "#6B7280",
    marginTop: 6,
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <div style={monthLabelStyle}>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={navBtnStyle} onClick={handlePrevMonth}>
            ◀
          </button>
          <button style={navBtnStyle} onClick={handleNextMonth}>
            ▶
          </button>
        </div>
      </div>

      <div style={gridStyle}>
        {/* Weekday headers */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} style={cellHeaderStyle}>
            {d}
          </div>
        ))}

        {/* Days */}
        {weeks.map((week, wi) => (
          <React.Fragment key={wi}>
            {week.map((day, di) => {
              if (!day) {
                return <div key={di} />;
              }
              const d = new Date(year, month, day);
              const key = formatDate(d);
              const status = attendance[key] || "NONE";

              return (
                <div
                  key={di}
                  style={cellStyle(status)}
                  onClick={() => handleDayClick(day)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 18px rgba(15,23,42,0.12)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {day}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {loading && <div style={loadingTextStyle}>Loading attendance…</div>}

      {/* Legend */}
      <div
        style={{
          marginTop: 10,
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={legendItemStyle}>
          <span style={legendDotStyle(STATUS_COLORS.PRESENT)}></span> Present
        </div>
        <div style={legendItemStyle}>
          <span style={legendDotStyle(STATUS_COLORS.ABSENT)}></span> Absent
        </div>
        <div style={legendItemStyle}>
          <span style={legendDotStyle(STATUS_COLORS.HOLIDAY)}></span> Holiday
        </div>
        <div style={legendItemStyle}>
          <span style={legendDotStyle(STATUS_COLORS.NONE)}></span> No status
        </div>
      </div>

      <div style={{ marginTop: 6, fontSize: "0.75rem", color: "#6B7280" }}>
        {/* Tip: Click on a date to cycle: Present → Absent → Holiday → Clear. */}
      </div>
    </div>
  );
}
