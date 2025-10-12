import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="fw-bold text-primary mb-4 text-center slide-in">Contact</h2>
        <p className="text-center mb-5 fade-in">Let's connect and build something awesome together!</p>
        
        <div className="row justify-content-center">
          <div className="col-md-6 mb-5 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <p className="text-secondary mb-3">
                <i className="bi bi-envelope-fill me-2 rotate-icon"></i>
                <a href="mailto:princesinghsikata@gmail.com" className="text-info text-decoration-none hover-lift">
                  princesinghsikata@gmail.com
                </a>
              </p>
              <p className="text-secondary">
                <i className="bi bi-github me-2 rotate-icon"></i>
                <a href="https://github.com/royalprincesingh" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none hover-lift">
                  github.com/royalprincesingh
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="fade-in" style={{ animationDelay: '0.4s' }}>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
