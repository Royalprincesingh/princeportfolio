import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const projects = [
  {
    title: "Home Automation System",
    desc: "Smart home control system using Node MCU for device automation and management.",
    tech: "IoT, Node MCU, Web Interface"
  },
  {
    title: "Instasmart Application",
    desc: "Full-stack e-commerce platform with user authentication and product management.",
    tech: "Java, JSP, Servlets, MySQL, HTML, CSS, JavaScript"
  },
  {
    title: "Proctor AI",
    desc: "AI-powered proctoring system for online examinations with real-time monitoring.",
    tech: "Python, OpenCV, Machine Learning"
  },
  {
    title: "AgriTrade",
    desc: "Agricultural marketplace connecting farmers with buyers, featuring real-time pricing.",
    tech: "Java, React, MySQL, Spring Boot"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-black text-light">
      <Container>
        <h2 className="fw-bold text-primary text-center mb-5 slide-in">Projects</h2>
        <Row>
          {projects.map((proj, i) => (
            <Col md={4} className="mb-4" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
              <Card className="bg-dark text-light border-secondary h-100 shadow project-card fade-in">
                <Card.Body>
                  <Card.Title className="h4 text-primary">{proj.title}</Card.Title>
                  <Card.Text className="text-light mb-3">{proj.desc}</Card.Text>
                  <Card.Text className="text-secondary small">
                    <i className="bi bi-code-slash me-2 rotate-icon"></i>{proj.tech}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
