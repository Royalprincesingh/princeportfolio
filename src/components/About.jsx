import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/vite.jpg";

const About = () => {
  return (
    <section id="about" className="py-5" data-aos="fade-up">
      <Container>
        <h2 className="fw-bold text-center mb-5" data-aos="fade-down" style={{
          color: "var(--text-color)",
          marginBottom: "3rem"
        }}>
          About Me
        </h2>
        <Row className="align-items-center" style={{ gap: "2rem" }}>
          <Col md={6} className="text-center mb-4" data-aos="fade-right">
            <img
              src={profileImg}
              alt="Prince Singh"
              className="rounded-circle shadow-lg mb-4"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                border: "3px solid var(--accent-1)",
                boxShadow: "0 0 30px rgba(0, 210, 255, 0.2)"
              }}
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <p className="mb-4" data-aos="fade-up" data-aos-delay="200" style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              lineHeight: "1.8"
            }}>
              Passionate and detail-oriented Full Stack Developer with expertise in JavaScript/Node.js and React.
              Currently pursuing B.Tech in Information Technology at A.P.J Abdul Kalam Technical University (2022-2026),
              with a strong focus on AI/ML, IoT solutions, and practical problem-solving.
            </p>

            <Row className="g-3 mb-4">
              {[
                { title: "Name", value: "Prince Singh" },
                { title: "Email", value: "princesinghsikata@gmail.com" },
                { title: "Location", value: "Noida, India" },
                { title: "Education", value: "B.Tech IT (2022-2026)" }
              ].map((item, index) => (
                <Col sm={6} key={index}>
                  <div
                    className="card"
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 100}
                    style={{
                      backgroundColor: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                      padding: "1.5rem",
                      textAlign: "center",
                      minHeight: "120px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderRadius: "12px",
                      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-1)";
                      e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 210, 255, 0.1)";
                      e.currentTarget.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-color)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <h5 className="mb-2" style={{ color: "var(--accent-1)" }}>
                      {item.title}
                    </h5>
                    <p className="mb-0" style={{ color: "var(--text-secondary)" }}>
                      {item.value}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
