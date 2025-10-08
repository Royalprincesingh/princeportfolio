import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-center text-light">
      <Container>
        <h2 className="fw-bold text-primary mb-4">Contact</h2>
        <p>Let’s connect and build something awesome together!</p>
        <p className="text-secondary mb-2">
          📧 <a href="mailto:princesinghsikata@gmail.com" className="text-info text-decoration-none">
            princesinghsikata@gmail.com
          </a>
        </p>
        <p className="text-secondary">
          💼 <a href="https://github.com/royalprincesingh" target="_blank" className="text-info text-decoration-none">
            github.com/royalprincesingh
          </a>
        </p>
      </Container>
    </section>
  );
};

export default Contact;
