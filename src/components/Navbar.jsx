import React, { useState } from "react";
import profileImg from "../assets/vite.jpg";

const Navbar = ({ onResumeClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{
      background: "rgba(8, 8, 12, 0.8)",
      backdropFilter: "blur(15px)",
      borderBottom: "1px solid var(--border-color)"
    }}>
      <div className="container">
        <a href="#home" className="navbar-brand fw-bold d-flex align-items-center" style={{ color: "var(--text-color)" }}>
          <img
            src={profileImg}
            alt="Prince Singh"
            className="rounded-circle me-2"
            style={{
              width: "35px",
              height: "35px",
              objectFit: "cover",
              border: "2px solid var(--accent-1)"
            }}
          />
          Prince Singh
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="d-none d-md-block" 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "#f1f5f9",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: 0
          }}
        >
          ☰
        </button>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#experience" style={{ color: "var(--text-secondary)", transition: "color 0.3s" }} onMouseEnter={(e) => e.target.style.color = "var(--accent-1)"} onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}>Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills" style={{ color: "var(--text-secondary)", transition: "color 0.3s" }} onMouseEnter={(e) => e.target.style.color = "var(--accent-1)"} onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}>Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects" style={{ color: "var(--text-secondary)", transition: "color 0.3s" }} onMouseEnter={(e) => e.target.style.color = "var(--accent-1)"} onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}>Projects</a></li>
            <li className="nav-item">
              <button
                onClick={onResumeClick}
                className="btn btn-outline-info ms-lg-3 px-4 rounded-pill"
                style={{
                  background: "transparent",
                  border: "2px solid var(--accent-1)",
                  color: "var(--accent-1)",
                  transition: "all 0.3s ease",
                  fontSize: "0.95rem",
                  fontWeight: "600"
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "var(--accent-1)";
                  e.target.style.color = "var(--bg-color)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = "var(--accent-1)";
                }}
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
