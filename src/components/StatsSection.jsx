import React from "react";

const StatsSection = () => {
const stats = [
    { label: "Projects Completed", value: 12, icon: "bi bi-rocket-takeoff-fill", color: "#00d2ff" },
    { label: "Certifications Earned", value: 13, icon: "bi bi-trophy-fill", color: "#925ff0" },
    { label: "Years of Experience", value: 3, icon: "bi bi-briefcase-fill", color: "#ff6b35" },
    { label: "Research Publications", value: 1, icon: "bi bi-journal-bookmark-fill", color: "#00d2ff" }
  ];

  return (
    <section className="py-5 stats-section" >
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-6 col-lg-3"  >
              <div
                className="stat-card"
                style={{
                  background: `linear-gradient(135deg, rgba(0, 210, 255, 0.05), rgba(146, 95, 240, 0.05))`,
                  border: `1px solid ${stat.color}30`,
                  borderRadius: "15px",
                  padding: "2rem",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                  e.currentTarget.style.boxShadow = `0 30px 60px ${stat.color}20`;
                  e.currentTarget.style.borderColor = `${stat.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = `${stat.color}30`;
                }}
              >
                {/* Animated background pulse */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle, ${stat.color}10, transparent)`,
                    
                    pointerEvents: "none"
                  }}
                />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{
                    fontSize: "2.8rem",
                    marginBottom: "0.5rem",
                    
                    color: stat.color
                  }}>
                    <i className={stat.icon}></i>
                  </div>
                  <div style={{
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    background: `linear-gradient(135deg, ${stat.color}, #00d2ff)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.5rem"
                  }}>
                    {stat.value}
                    {stat.label === "Years of Experience" && "+"}
                  </div>
                  <p style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    margin: 0
                  }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default StatsSection;
