import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center justify-content-center text-center min-vh-100 w-100 bg-black text-light" style={{ marginTop: '-56px', width: '100vw' }}>
      <Container fluid className="p-0">
        <div className="mb-4 mt-5">
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
        <h1 className="display-3 fw-bold mb-3 mt-4">
          Hi, I'm <span className="text-primary">Prince Singh</span>
        </h1>
        <p className="lead text-secondary mb-4" style={{ fontSize: "1.25rem" }}>
          Full Stack Developer | B.Tech IT Student | Java & React Specialist
        </p>
        <p className="text-light mb-4">
          <a href="tel:+918858180597" className="text-light text-decoration-none me-3">
            <i className="bi bi-telephone-fill me-2"></i>+91-8858180597
          </a>
          <a href="mailto:princesinghsikata@gmail.com" className="text-light text-decoration-none me-3">
            <i className="bi bi-envelope-fill me-2"></i>princesinghsikata@gmail.com
          </a>
        </p>
        <div className="mb-4">
          <a href="https://linkedin.com/in/royalprincesingh" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-3">
            <i className="bi bi-linkedin me-2"></i>LinkedIn
          </a>
          <a href="https://github.com/royalprincesingh" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            <i className="bi bi-github me-2"></i>GitHub
          </a>
        </div>
        <Button variant="primary" size="lg" href="#projects" className="px-4 mt-2">
          View My Work
        </Button>
      </Container>
    </section>
  );
};

export default Hero;

