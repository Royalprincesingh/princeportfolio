import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VanillaTilt from "vanilla-tilt";
import { Typewriter } from "react-simple-typewriter";
import "./style.css";

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((skill, index) => {
      if (skill) {
        VanillaTilt.init(skill, {
          max: 10,
          speed: 300,
          glare: true,
          "max-glare": 0.2,
          scale: 1.02,
        });
      }
    });
  }, []);

  // All skills with enhanced data for badge cloud
  const skills = [
    { name: "Java", icon: "☕", color: "#ed8b00", glowColor: "rgba(237, 139, 0, 0.6)", category: "Backend" },
    { name: "Python", icon: "🐍", color: "#3776ab", glowColor: "rgba(55, 118, 171, 0.6)", category: "AI/ML" },
    { name: "JavaScript", icon: "⚡", color: "#f7df1e", glowColor: "rgba(247, 223, 30, 0.6)", category: "Frontend" },
    { name: "React", icon: "⚛️", color: "#61dafb", glowColor: "rgba(97, 218, 251, 0.6)", category: "Frontend" },
    { name: "Node.js", icon: "🟢", color: "#68a063", glowColor: "rgba(104, 160, 99, 0.6)", category: "Backend" },
    { name: "MongoDB", icon: "🍃", color: "#47a248", glowColor: "rgba(71, 162, 72, 0.6)", category: "Database" },

    { name: "HTML", icon: "🌐", color: "#e34f26", glowColor: "rgba(227, 79, 38, 0.6)", category: "Frontend" },
    { name: "CSS", icon: "🎨", color: "#1572b6", glowColor: "rgba(21, 114, 182, 0.6)", category: "Frontend" },
    { name: "Git", icon: "📚", color: "#f05032", glowColor: "rgba(240, 80, 50, 0.6)", category: "Tools" },
    { name: "OpenCV", icon: "👁️", color: "#5c3ee8", glowColor: "rgba(92, 62, 232, 0.6)", category: "AI/ML" },
    { name: "Machine Learning", icon: "🤖", color: "#ff6b35", glowColor: "rgba(255, 107, 53, 0.6)", category: "AI/ML" }
  ];

  const getSkillStyle = (skill) => ({
    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
    border: `1px solid ${skill.color}40`,
    color: skill.color,
    padding: "12px 20px",
    borderRadius: "25px",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    boxShadow: `0 2px 10px ${skill.color}20`,
    backdropFilter: "blur(10px)",
    position: "relative",
    overflow: "hidden"
  });

  const getHoverStyle = (skill) => ({
    transform: "translateY(-3px) scale(1.05)",
    boxShadow: `0 8px 25px ${skill.glowColor}`,
    borderColor: skill.color,
    background: `linear-gradient(135deg, ${skill.color}30, ${skill.color}20)`
  });

  return (
    <section id="skills" className="py-5" data-aos="fade-up" style={{ position: "relative" }}>
      <Container>
        <h2 className="fw-bold text-center mb-5" data-aos="fade-down" style={{
          color: "var(--text-color)",
          marginBottom: "3rem"
        }}>
          Tech Stack & Expertise
        </h2>

        {/* AI/ML Special Section with Typewriter */}
        <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="200">
          <div style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border-color)",
            borderRadius: "15px",
            padding: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
            boxShadow: "0 0 30px rgba(146, 95, 240, 0.1)"
          }}>
            <h4 style={{ color: "var(--accent-2)", marginBottom: "1rem" }}>
              🤖 AI & Machine Learning Specialist
            </h4>
            <p style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              fontFamily: "monospace",
              minHeight: "1.5rem"
            }}>
              <Typewriter
                words={[
                  "Trained ML models to classify suspicious behavior...",
                  "Built computer vision systems with OpenCV...",
                  "Engineered AI-powered proctoring solutions...",
                  "Applied facial recognition algorithms...",
                  "Established real-time behavior analysis systems..."
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </p>
          </div>
        </div>

        {/* Animated Tech Badge Cloud */}
        <div className="skills-cloud" data-aos="fade-up" data-aos-delay="400" style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "3rem"
        }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className="skill-badge"
              style={getSkillStyle(skill)}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, getHoverStyle(skill));
              }}
              onMouseLeave={(e) => {
                Object.assign(e.target.style, getSkillStyle(skill));
              }}
              data-aos="zoom-in"
              data-aos-delay={500 + index * 50}
            >
              <span style={{
                fontSize: "1.2rem",
                marginRight: "8px",
                display: "inline-block",
                animation: "float 3s ease-in-out infinite"
              }}>
                {skill.icon}
              </span>
              {skill.name}
              <div style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, ${skill.color}20, transparent)`,
                animation: "shine 2s infinite"
              }}></div>
            </div>
          ))}
        </div>

        {/* Category Legend */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="800">
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "2rem"
          }}>
            {[
              { name: "AI/ML", color: "#ff6b35" },
              { name: "Frontend", color: "#61dafb" },
              { name: "Backend", color: "#ed8b00" },
              { name: "Database", color: "#47a248" },
              { name: "Tools", color: "#f05032" }
            ].map((cat, index) => (
              <div key={index} style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "0.85rem",
                color: "var(--text-secondary)"
              }}>
                <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: cat.color
                }}></div>
                {cat.name}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .skill-badge:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .skills-cloud {
            gap: 10px;
          }

          .skill-badge {
            padding: 8px 15px !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
