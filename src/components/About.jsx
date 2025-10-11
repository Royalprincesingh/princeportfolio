import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="fw-bold text-primary mb-4 text-center">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="mb-4">
              Passionate and detail-oriented web developer with expertise in full-stack development. Currently pursuing B.Tech in Information Technology at A.P.J Abdul Kalam Technical University (2022-2026), with a strong focus on practical learning and teamwork.
            </p>
            
            <h3 className="h4 text-primary mb-3">Skills</h3>
            <div className="row g-3 mb-4">
              {[
                "HTML/CSS/JavaScript", "Java", "React", "Spring Boot",
                "MySQL", "MongoDB", "Bootstrap", "Git/GitHub",
                "Python", "C++", "C", "PHP"
              ].map((skill) => (
                <div key={skill} className="col-md-3 col-6">
                  <div className="p-2 border border-secondary rounded text-center">
                    {skill}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="h4 text-primary mb-3">Experience</h3>
            <div className="mb-4">
              <div className="mb-3">
                <h4 className="h5 text-light">Full Stack Developer</h4>
                <p className="text-secondary mb-2">Softpro India Computer Technologies (P) Ltd. | Noida</p>
                <p className="small text-secondary">June 2025 - July 2025</p>
              </div>
              <div className="mb-3">
                <h4 className="h5 text-light">Web Development Intern</h4>
                <p className="text-secondary mb-2">Apex Planet Software Pvt. Ltd. | Remote</p>
                <p className="small text-secondary">May 2025 - June 2025</p>
              </div>
            </div>

            <h3 className="h4 text-primary mb-3">Certifications</h3>
            <ul className="list-unstyled">
              <li className="mb-2">• Microsoft Azure AI Essentials Professional Certificate</li>
              <li className="mb-2">• Web Development Training (Digital Navik)</li>
              <li className="mb-2">• Java Web Development with AI (HCLTech)</li>
              <li className="mb-2">• Training on Ethical Hacking (Internshala)</li>
              <li className="mb-2">• Introduction to PHP (Simplilearn)</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
