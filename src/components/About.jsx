import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5 bg-dark text-center text-light">
      <Container>
        <h2 className="fw-bold text-primary mb-4">About Me</h2>
        <p className="mx-auto" style={{ maxWidth: "700px" }}>
          I'm Prince Singh, a passionate final-year Computer Science student skilled in Java, Spring Boot, MySQL, and React.
          I enjoy building scalable web apps and solving real-world problems using technology.
          Always eager to learn and grow in the field of software development.
        </p>
      </Container>
    </section>
  );
};

export default About;
