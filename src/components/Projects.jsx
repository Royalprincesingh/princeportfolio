import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const projects = [
  {
    title: "InstaSmart",
    desc: "AI-powered image enhancement web app using React & Python backend.",
  },
  {
    title: "BIET Management System",
    desc: "College management portal using Java Servlets and MySQL.",
  },
  {
    title: "TrueSight AI",
    desc: "AI-based proctoring system to detect cheating during exams.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-black text-light">
      <Container>
        <h2 className="fw-bold text-primary text-center mb-5">Projects</h2>
        <Row>
          {projects.map((proj, i) => (
            <Col md={4} className="mb-4" key={i}>
              <Card className="bg-dark text-light border-secondary h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text className="text-secondary">{proj.desc}</Card.Text>
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
