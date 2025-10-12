import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="home" className="hero-section d-flex align-items-center justify-content-center text-center min-vh-100 bg-black text-light">
      <Container>
        <div className="hero-content">
          <div className="profile-img-wrapper mb-4 mt-5 fade-in" style={{ animationDelay: '0.2s' }}>
            <img
              src="./vite.jpg"
              alt="Prince Singh"
              className="profile-img rounded-circle shadow-lg"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                border: "4px solid var(--bs-primary)",
                marginTop: "60px"
              }}
            />
          </div>
          <h1 className="hero-title display-3 fw-bold mb-3 mt-4 slide-in" style={{ animationDelay: '0.4s' }}>
            Hi, I'm <span className="text-primary">Prince Singh</span>
          </h1>
          <p className="hero-subtitle lead text-secondary mb-4 fade-in" style={{ fontSize: "1.25rem", animationDelay: '0.6s' }}>
            Full Stack Developer | B.Tech IT Student | Java & React Specialist
          </p>
          <div className="contact-links text-light mb-4 fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="tel:+918858180597" className="contact-link text-light text-decoration-none me-3 hover-lift">
              <i className="bi bi-telephone-fill me-2 rotate-icon"></i>+91-8858180597
            </a>
            <a href="mailto:princesinghsikata@gmail.com" className="contact-link text-light text-decoration-none me-3 hover-lift">
              <i className="bi bi-envelope-fill me-2 rotate-icon"></i>princesinghsikata@gmail.com
            </a>
          </div>
          <div className="social-links mb-4 fade-in" style={{ animationDelay: '1s' }}>
            <a href="https://linkedin.com/in/royalprincesingh" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-3 hover-lift">
              <i className="bi bi-linkedin me-2 rotate-icon"></i>LinkedIn
            </a>
            <a href="https://github.com/royalprincesingh" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light hover-lift">
              <i className="bi bi-github me-2 rotate-icon"></i>GitHub
            </a>
          </div>
          <div className="cta-wrapper">
            <Button 
              variant="primary" 
              size="lg" 
              href="#projects" 
              className="cta-button px-4 mt-2 fade-in hover-lift" 
              style={{ animationDelay: '1.2s' }}
            >
              View My Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
  );
};

export default Hero;

