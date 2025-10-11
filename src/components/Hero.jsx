import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="home" className="d-flex align-items-center justify-content-center text-center vh-100 bg-black text-light">
      <Container>
        <div className="mb-4">
          <img
            src="./vite.jpg"
            alt="Prince Singh"
            className="rounded-circle"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              border: "4px solid #0d6efd"
            }}
          />
        </div>
        <h1 className="display-4 fw-bold mb-3">
          Hi, I'm <span className="text-primary">Prince Singh</span>
        </h1>
        <p className="lead text-secondary mb-4">
          Final-year CS student | Full Stack Developer | Java & React Enthusiast
        </p>
        <Button variant="primary" href="#projects">
          View My Work
        </Button>
      </Container>
    </section>
  );
};

export default Hero;

