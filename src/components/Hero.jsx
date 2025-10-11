import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center justify-content-center text-center min-vh-100 bg-black text-light" style={{ marginTop: '-56px' }}>
      <Container fluid className="container-fluid p-0">
        <div className="mb-4 mt-5 fade-in" style={{ animationDelay: '0.2s' }}>
          <img
            src="./vite.jpg"
            alt="Prince Singh"
            className="rounded-circle shadow-lg"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              border: "4px solid #0d6efd",
              marginTop: "60px"
            }}
          />
        </div>
        <h1 className="display-3 fw-bold mb-3 mt-4 slide-in" style={{ animationDelay: '0.4s' }}>
          Hi, I'm <span className="text-primary">Prince Singh</span>
        </h1>
        <p className="lead text-secondary mb-4 fade-in" style={{ fontSize: "1.25rem", animationDelay: '0.6s' }}>
          Full Stack Developer | B.Tech IT Student | Java & React Specialist
        </p>
        <p className="text-light mb-4 fade-in" style={{ animationDelay: '0.8s' }}>
          <a href="tel:+918858180597" className="text-light text-decoration-none me-3 hover-lift">
            <i className="bi bi-telephone-fill me-2 rotate-icon"></i>+91-8858180597
          </a>
          <a href="mailto:princesinghsikata@gmail.com" className="text-light text-decoration-none me-3 hover-lift">
            <i className="bi bi-envelope-fill me-2 rotate-icon"></i>princesinghsikata@gmail.com
          </a>
        </p>
        <div className="mb-4 fade-in" style={{ animationDelay: '1s' }}>
          <a href="https://linkedin.com/in/royalprincesingh" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-3 hover-lift">
            <i className="bi bi-linkedin me-2 rotate-icon"></i>LinkedIn
          </a>
          <a href="https://github.com/royalprincesingh" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light hover-lift">
            <i className="bi bi-github me-2 rotate-icon"></i>GitHub
          </a>
        </div>
        <Button variant="primary" size="lg" href="#projects" className="px-4 mt-2 fade-in hover-lift" style={{ animationDelay: '1.2s' }}>
          View My Work
        </Button>
      </Container>
    </section>
  );
};

export default Hero;

