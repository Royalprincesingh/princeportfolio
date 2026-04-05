import React from "react";
import { Modal } from "react-bootstrap";

const Resume = ({ show, handleClose }) => {
  const sectionHeading = { color: "#1a1a2e", borderBottom: "2px solid #00d2ff", paddingBottom: "6px", marginBottom: "16px" };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      fullscreen 
      className="resume-modal"
      backdrop="static"
      centered
    >
      <Modal.Header 
        closeButton 
        className="bg-dark text-light border-secondary"
        style={{ padding: "1.5rem" }}
      >
        <Modal.Title className="fw-bold">Resume — Prince Singh</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-light p-0" style={{ maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{
          background: "#fff",
          color: "#222",
          minHeight: "100%",
          padding: "40px",
          fontFamily: "Georgia, serif",
          lineHeight: "1.6",
        }}>
          {/* Resume Header */}
          <div className="text-center mb-4 pb-4" style={{ borderBottom: "2px solid #00d2ff" }}>
            <h1 className="mb-1" style={{ fontSize: "2.2em", fontWeight: "bold", letterSpacing: "1px" }}>PRINCE SINGH</h1>
            <p className="mb-2" style={{ color: "#555", fontStyle: "italic" }}>Full Stack Developer | MERN Stack | AI/ML | Computer Vision</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap" style={{ fontSize: "0.9em", color: "#333" }}>
              <span>📞 +91-8858180597</span>
              <span>📧 <a href="mailto:princesinghsikata@gmail.com" style={{ color: "#333", textDecoration: "none" }}>princesinghsikata@gmail.com</a></span>
              <span>📍 Noida, India</span>
              <span>🔗 <a href="https://github.com/royalprincesingh" style={{ color: "#0077b5", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">GitHub</a></span>
              <span>💼 <a href="https://linkedin.com/in/royaliprincesingh" style={{ color: "#0077b5", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h3 style={sectionHeading}>PROFESSIONAL SUMMARY</h3>
            <p style={{ margin: 0 }}>
              Full Stack Developer with hands-on experience building production-ready MERN applications and AI-powered computer vision systems. Proficient in JavaScript, React, Node.js, and MongoDB, with a strong track record in designing secure authentication flows and optimizing backend performance. Currently pursuing B.Tech in Information Technology at AKTU (2022–2026), focused on writing clean, maintainable code and solving complex technical challenges.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <h3 style={sectionHeading}>EXPERIENCE</h3>

            <div className="mb-3">
              <div className="d-flex justify-content-between flex-wrap">
                <h5 className="mb-0"><strong>Full Stack Intern — Softpro India</strong></h5>
                <span style={{ color: "#555", fontSize: "0.9em" }}>Jun 2025 – Aug 2025</span>
              </div>
              <ul className="mt-2 ps-4" style={{ color: "#333" }}>
                <li>Architected and deployed a complete MERN stack application with a comprehensive REST API design.</li>
                <li>Executed JWT-based authentication with bcrypt password hashing for secure user sessions.</li>
                <li>Structured MongoDB schemas with strategic indexing on product listings and order collections.</li>
                <li>Engineered Express middleware for role-based access control supporting Admin, Farmer, and Buyer roles.</li>
                <li>Refined database queries and API performance through targeted index optimization.</li>
                <li>Launched the application on Firebase Hosting with an automated CI/CD pipeline via GitHub Actions.</li>
                <li>Conducted extensive QA testing to validate transaction integrity and data consistency.</li>
              </ul>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between flex-wrap">
                <h5 className="mb-0"><strong>Trainee — HCL Technologies</strong></h5>
                <span style={{ color: "#555", fontSize: "0.9em" }}>Jan 2024 – Mar 2025</span>
              </div>
              <ul className="mt-2 ps-4" style={{ color: "#333" }}>
                <li>Constructed enterprise-level Java web modules using JSP, Servlets, and JDBC.</li>
                <li>Applied CRUD operations with form-based user authentication and session management.</li>
                <li>Structured and optimized MySQL database schemas for reporting and analytics workflows.</li>
                <li>Authored SQL queries supporting business intelligence dashboards.</li>
                <li>Gained practical experience deploying applications to Apache Tomcat servers.</li>
                <li>Strengthened understanding of enterprise software development practices.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h3 style={sectionHeading}>EDUCATION</h3>
            <div className="mb-2">
              <div className="d-flex justify-content-between flex-wrap">
                <strong>Bachelor of Technology (B.Tech) — Information Technology</strong>
                <span style={{ color: "#555", fontSize: "0.9em" }}>Aug 2022 – Jun 2026</span>
              </div>
              <div style={{ color: "#555" }}>Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow</div>
            </div>
            <div className="mb-2">
              <div className="d-flex justify-content-between flex-wrap">
                <strong>Intermediate (Class 12)</strong>
                <span style={{ color: "#555", fontSize: "0.9em" }}>Jan 2022 – May 2022</span>
              </div>
              <div style={{ color: "#555" }}>P.N. National Public School</div>
            </div>
            <div>
              <div className="d-flex justify-content-between flex-wrap">
                <strong>High School (Class 10)</strong>
                <span style={{ color: "#555", fontSize: "0.9em" }}>Jan 2020 – May 2020</span>
              </div>
              <div style={{ color: "#555" }}>P.N. National Public School</div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <h3 style={sectionHeading}>PROJECTS</h3>

            <div className="mb-3">
              <h5 className="mb-1"><strong>Proctor AI</strong> <small style={{ color: "#555", fontWeight: "normal" }}>— AI-Powered Remote Exam Proctoring System</small></h5>
              <ul className="ps-4" style={{ color: "#333" }}>
                <li>Engineered a comprehensive remote proctoring system with real-time monitoring capabilities.</li>
                <li>Integrated face detection and recognition using OpenCV with facial landmark tracking.</li>
                <li>Established eye gaze tracking and blink detection for suspicious activity identification.</li>
                <li>Configured screen monitoring to detect application window changes and tab switching.</li>
                <li>Constructed an audio monitoring module analyzing voice presence and multiple speakers.</li>
                <li>Formulated a unified violation scoring pipeline with configurable detection thresholds.</li>
                <li>Assembled a Flask REST API backend for session management and alert logging.</li>
                <li>Produced a React-based admin dashboard for exam management and violation review.</li>
                <li>Launched the application on Firebase Hosting with secure authentication.</li>
              </ul>
            </div>

            <div className="mb-3">
              <h5 className="mb-1"><strong>Deepfake Detection System</strong> <small style={{ color: "#555", fontWeight: "normal" }}>— Computer Vision &amp; Machine Learning</small></h5>
              <ul className="ps-4" style={{ color: "#333" }}>
                <li>Engineered a real-time video analysis system for detecting synthetic media.</li>
                <li>Applied a multi-model ensemble approach for improved detection accuracy.</li>
                <li>Established 3D pose tracking and skeletal detection for behavioral analysis.</li>
                <li>Formulated a smart behavioral analytics pipeline with anomaly detection.</li>
                <li>Achieved production-ready performance for live video stream processing.</li>
              </ul>
            </div>

            <div className="mb-3">
              <h5 className="mb-1"><strong>Inventory Pro</strong> <small style={{ color: "#555", fontWeight: "normal" }}>— Enterprise Inventory Management System</small></h5>
              <ul className="ps-4" style={{ color: "#333" }}>
                <li>Constructed a mobile-responsive enterprise inventory tracking system.</li>
                <li>Integrated a barcode scanning interface for efficient product entry.</li>
                <li>Enabled real-time inventory synchronization across warehouse locations.</li>
                <li>Orchestrated complex state management for large product datasets.</li>
                <li>Produced an advanced analytics dashboard with actionable inventory insights.</li>
                <li>Deployed on Vercel with Firebase Firestore for real-time data synchronization.</li>
              </ul>
            </div>

            <div className="mb-3">
              <h5 className="mb-1"><strong>Prince Tech Blog</strong> <small style={{ color: "#555", fontWeight: "normal" }}>— High-Performance Developer Blog Platform</small></h5>
              <ul className="ps-4" style={{ color: "#333" }}>
                <li>Constructed a static-site-generated blog using the Astro framework for optimal performance.</li>
                <li>Automated SEO optimization with meta-tag generation and XML sitemap support.</li>
                <li>Produced a responsive design with dark mode support and content categorization.</li>
                <li>Structured a Markdown-based content workflow for rapid post creation and version control.</li>
                <li>Launched on Firebase Hosting with automatic CI/CD pipeline via GitHub Actions.</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-4">
            <h3 style={sectionHeading}>TECHNICAL SKILLS</h3>
            <div className="row">
              <div className="col-md-6 mb-2"><strong>Languages:</strong> JavaScript, Python, Java, HTML5, CSS3</div>
              <div className="col-md-6 mb-2"><strong>Frontend:</strong> React, React Router, Tailwind CSS, Bootstrap</div>
              <div className="col-md-6 mb-2"><strong>Backend:</strong> Node.js, Express.js, Flask, REST APIs, JWT, Middleware</div>
              <div className="col-md-6 mb-2"><strong>Databases:</strong> MongoDB, MySQL, Firebase Firestore</div>
              <div className="col-md-6 mb-2"><strong>AI/ML:</strong> OpenCV, TensorFlow, Machine Learning</div>
              <div className="col-md-6 mb-2"><strong>Tools &amp; Platforms:</strong> Git, GitHub, Firebase, Vercel, Postman, VS Code, GitHub Actions</div>
              <div className="col-md-6 mb-2"><strong>Enterprise (Java):</strong> JSP, Servlets, JDBC, Apache Tomcat, SQL</div>
              <div className="col-md-6 mb-2"><strong>Cloud:</strong> Oracle Cloud, Microsoft Azure, Google Firebase</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <h3 style={sectionHeading}>CERTIFICATIONS</h3>
            <ul className="ps-4" style={{ color: "#333" }}>
              <li>Oracle Cloud Infrastructure (OCI) Generative AI Professional</li>
              <li>Microsoft Azure AI Essentials</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="mb-4">
            <h3 style={sectionHeading}>LANGUAGES</h3>
            <div>
              <strong>JavaScript:</strong> Native &nbsp;|&nbsp;
              <strong>Python:</strong> Advanced &nbsp;|&nbsp;
              <strong>Java:</strong> Intermediate &nbsp;|&nbsp;
              <strong>English:</strong> Professional &nbsp;|&nbsp;
              <strong>Hindi:</strong> Native
            </div>
          </div>

          {/* Footer Note */}
          <div className="border-top pt-4 mt-4 text-center small" style={{ color: "#888" }}>
            <p>For a downloadable copy please contact me directly at princesinghsikata@gmail.com</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Resume;
