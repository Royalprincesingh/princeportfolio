import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="portfolio-wrapper bg-dark text-light">
      <div className="glow-bg"></div>

      {/* Floating Download CV Button */}
      <a
        href="/princesinghresume.pdf"
        download="Prince_Singh_Resume.pdf"
        className="floating-cv-btn"
        style={{
          position: "fixed",
          top: "50%",
          right: "20px",
          zIndex: 1000,
          background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
          color: "var(--text-color)",
          padding: "12px 20px",
          borderRadius: "25px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.9rem",
          boxShadow: "0 4px 20px rgba(0, 210, 255, 0.3)",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "center",
          writingMode: "vertical-rl",
          textOrientation: "mixed"
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-50%) rotate(-90deg) scale(1.05)";
          e.target.style.boxShadow = "0 8px 30px rgba(0, 210, 255, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(-50%) rotate(-90deg) scale(1)";
          e.target.style.boxShadow = "0 4px 20px rgba(0, 210, 255, 0.3)";
        }}
      >
        📄 Download CV
      </a>

      <Navbar onResumeClick={handleShowResume} />
      <main className="main-content">
        <Hero />
        <Experience />
        <Skills />

        {/* Certifications Marquee */}
        <section className="py-4" data-aos="fade-up">
          <div className="container">
            <h4 className="text-center mb-4" style={{ color: "var(--text-color)" }}>
              🏆 Professional Certifications
            </h4>
            <div className="certifications-marquee" style={{
              overflow: "hidden",
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              borderRadius: "10px",
              padding: "1rem",
              position: "relative"
            }}>
              <div className="marquee-content" style={{
                display: "flex",
                animation: "scroll 20s linear infinite"
              }}>
                {[
                  { name: "Oracle Cloud Infrastructure Generative AI Professional", icon: "☁️", color: "#ed8b00" },
                  { name: "Microsoft Certified: Azure AI Engineer Associate", icon: "🔷", color: "#0078d4" },
                  { name: "Oracle Cloud Infrastructure Generative AI Professional", icon: "☁️", color: "#ed8b00" },
                  { name: "Microsoft Certified: Azure AI Engineer Associate", icon: "🔷", color: "#0078d4" },
                  { name: "Oracle Cloud Infrastructure Generative AI Professional", icon: "☁️", color: "#ed8b00" },
                  { name: "Microsoft Certified: Azure AI Engineer Associate", icon: "🔷", color: "#0078d4" }
                ].map((cert, index) => (
                  <div
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 200}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "0 2rem",
                      whiteSpace: "nowrap",
                      color: cert.color,
                      fontSize: "0.95rem",
                      fontWeight: "600",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{cert.icon}</span>
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }

            .certifications-marquee:hover .marquee-content {
              animation-play-state: paused;
            }

            @media (max-width: 768px) {
              .marquee-content {
                font-size: 0.8rem;
              }
            }
          `}</style>
        </section>

        <Projects />
        <Contact />
      </main>
      <Footer />
      <Resume show={showResume} handleClose={handleCloseResume} />
    </div>
  );
}

export default App;
