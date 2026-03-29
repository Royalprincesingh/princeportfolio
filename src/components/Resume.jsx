import React from "react";
import { Modal, Button } from "react-bootstrap";

const Resume = ({ show, handleClose }) => {
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
        <Modal.Title className="fw-bold">Resume - Prince Singh</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-light p-0" style={{ maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{
          background: "rgba(255,255,255,0.95)",
          color: "#000",
          minHeight: "100%",
          padding: "40px",
        }}>
          {/* Resume Header */}
          <div className="text-center mb-4 border-bottom pb-4">
            <h1 className="mb-1" style={{ fontSize: "2.5em", fontWeight: "bold" }}>Prince Singh</h1>
            <p className="text-muted mb-3">Full Stack Developer | MERN Stack | AI/ML | IoT</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <span>📞 +91-8858180597</span>
              <span>📧 princesinghsikata@gmail.com</span>
              <span>📍 Noida, India</span>
              <span>🔗 <a href="https://github.com/royalprincesingh" className="text-decoration-none" style={{ color: "#ffffff" }} target="_blank" rel="noopener noreferrer">GitHub</a></span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4">
            <h3 className="mb-3" style={{ color: "#000000ff" }}>Professional Summary</h3>
            <p>
              Passionate and detail-oriented Full Stack Developer with expertise in Java, React, Spring Boot, and Firebase. Currently pursuing B.Tech in Information Technology at A.P.J Abdul Kalam Technical University (2022-2026). Strong focus on practical learning, problem-solving, and teamwork. Experienced in building scalable web applications and IoT solutions.
            </p>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h3 className="mb-3" style={{ color: "#000000ff" }}>Education</h3>
            <div className="mb-3">
              <h5 className="mb-1">
                <strong>B.Tech in Information Technology</strong>
              </h5>
              <p className="mb-1 text-muted">A.P.J Abdul Kalam Technical University, Uttar Pradesh</p>
              <p className="text-muted small">Expected Graduation: 2026</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-4">
            <h3 className="mb-3" style={{ color: "#000000ff" }}>Technical Skills</h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div>
                  <strong>Languages:</strong> Java, JavaScript, Python, HTML, CSS
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div>
                  <strong>Frontend:</strong> React, Bootstrap, Tailwind CSS, React Bootstrap
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div>
                  <strong>Backend:</strong> Node.js, Express.js, REST APIs, Firebase
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div>
                  <strong>Databases:</strong> MySQL, MongoDB, Firebase Firestore
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div>
                  <strong>Tools & Platforms:</strong> Git/GitHub, Firebase, VS Code, IntelliJ IDEA, Postman
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div>
                  <strong>Other:</strong> REST APIs, IoT, OpenCV, Machine Learning basics
                </div>
              </div>
            </div>
          </div>

          {/* Experience / Projects */}
          <div className="mb-4">
            <h3 className="mb-3" style={{ color: "#000000ff" }}>Notable Projects</h3>
            
            <div className="mb-3">
              <h5 className="mb-1"><strong>Home Automation System</strong></h5>
              <p className="text-muted small mb-2">IoT, Node MCU, Web Interface</p>
              <p className="mb-2">Smart home control system using Node MCU for device automation and management.</p>
            </div>

            <div className="mb-3">
              <h5 className="mb-1"><strong>Instasmart Application</strong></h5>
              <p className="text-muted small mb-2">Java | JSP | Servlets | MySQL | HTML | CSS | JavaScript</p>
              <p className="mb-2">Full-stack e-commerce platform with user authentication and product management.</p>
            </div>

            <div className="mb-3">
              <h5 className="mb-1"><strong>Proctor AI</strong></h5>
              <p className="text-muted small mb-2">Python | OpenCV | Machine Learning</p>
              <p className="mb-2">AI-powered proctoring system for online examinations with real-time monitoring.</p>
            </div>

            <div className="mb-3">
              <h5 className="mb-1"><strong>AgriTrade</strong></h5>
              <p className="text-muted small mb-2">Node.js | React | MongoDB | Express</p>
              <p className="mb-2">Agricultural marketplace built with MERN stack connecting farmers with buyers, featuring real-time pricing and secure transactions.</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-4">
            <h3 className="mb-3" style={{ color: "#000000ff" }}>Certifications & Achievements</h3>
            <ul className="ps-4">
              <li>Web Development with React & Firebase</li>
              <li>Java Full Stack Development</li>
              <li>IoT & Embedded Systems Fundamentals</li>
              <li>Machine Learning Basics with Python</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="mb-4">
            <h3 className="mb-3" style={{ color: "#000000ff" }}>Languages</h3>
            <div>
              <strong>English:</strong> Professional | <strong>Hindi:</strong> Native 
            </div>
          </div>

          {/* Footer Note */}
          <div className="border-top pt-4 mt-4 text-center text-muted small">
            <p>This resume can be viewed online but cannot be downloaded. For a downloadable copy, please contact me directly.</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Resume;
