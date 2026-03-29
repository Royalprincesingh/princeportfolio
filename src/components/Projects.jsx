import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const projects = [
  {
    title: "TrueSight AI",
    desc: "Advanced Computer Vision platform for intelligent scene understanding with real-time object detection, pose estimation, and behavioral analytics.",
    tech: ["Python", "TensorFlow", "CV2", "Deep Learning", "WebSocket"],
    github: "https://github.com/royalprincesingh",
    demo: "#",
    category: "AI & Computer Vision",
    badgeColor: "linear-gradient(45deg, #ff006e, #8338ec)",
    cardType: "ai-card",
    keyFeatures: [
      "Multi-model ensemble for 99% detection accuracy",
      "Real-time 3D pose tracking and skeleton detection",
      "Smart behavioral analytics and anomaly detection"
    ]
  },
  {
    title: "Proctor AI",
    desc: "Intelligent Examination Proctoring System built with Python and Machine Learning for secure, automated supervision.",
    tech: ["Python", "OpenCV", "Machine Learning", "ML Models"],
    github: "https://github.com/royalprincesingh",
    demo: "https://proctor-ai-exam.web.app/",
    category: "AI & ML",
    badgeColor: "linear-gradient(45deg, #925ff0, #00d2ff)",
    cardType: "ai-card",
    keyFeatures: [
      "Real-time face detection & activity recognition",
      "Automated suspicious behavior classification",
      "Violation summary and logging modules"
    ]
  },
  {
    title: "AgriTrade",
    desc: "Agricultural marketplace built with MERN stack featuring real-time pricing and secure transactions.",
    tech: ["Node.js", "Express", "React", "MongoDB", "REST APIs"],
    github: "https://github.com/royalprincesingh",
    demo: "#",
    category: "Full Stack",
    badgeColor: "linear-gradient(45deg, #00d2ff, #925ff0)",
    cardType: "web-card",
    keyFeatures: [
      "Secure payment flows and farmer-buyer matching",
      "Optimized REST API performance",
      "Modular backend for higher load capacity"
    ]
  },
  {
    title: "Home Automation",
    desc: "IoT system using NodeMCU (ESP8266) for wireless control and real-time energy monitoring.",
    tech: ["NodeMCU", "ESP8266", "IoT Protocols", "Sensors"],
    github: "https://github.com/royalprincesingh",
    demo: "#",
    category: "IoT",
    badgeColor: "linear-gradient(45deg, #ff6b35, #00d2ff)",
    cardType: "iot-card",
    keyFeatures: [
      "Wireless control of residential appliances",
      "Temperature and motion sensor integration",
      "Real-time device status dashboard"
    ]
  },
  {
    title: "InstaSmart",
    desc: "Complete management application with secure authentication and CRUD operations.",
    tech: ["Java", "JSP", "Servlets", "MySQL"],
    github: "https://github.com/royalprincesingh",
    demo: "#",
    category: "Full Stack",
    badgeColor: "linear-gradient(45deg, #ed8b00, #925ff0)",
    cardType: "web-card",
    keyFeatures: [
      "Secure session management and role-based access",
      "Product management workflows using CRUD",
      "Order-processing and checkout pipelines"
    ]
  },
  {
    title: "Inventory Pro",
    desc: "Enterprise-grade inventory tracking system with integrated barcode scanning and real-time stock orchestration.",
    tech: ["React", "Node.js", "Firebase", "Real-time DB"],
    github: "https://github.com/royalprincesingh",
    demo: "#",
    category: "Full Stack",
    badgeColor: "linear-gradient(45deg, #1f77d2, #00d2ff)",
    cardType: "web-card",
    keyFeatures: [
      "Mobile-responsive barcode scanning integration",
      "Real-time inventory synchronization",
      "Complex state management for large datasets"
    ]
  },
  {
    title: "Modern Tech Blog",
    desc: "High-performance developer blog platform optimized for SEO and lightning-fast content delivery using Astro.",
    tech: ["Astro", "React", "Markdown", "Tailwind CSS"],
    github: "https://github.com/royalprincesingh",
    demo: "#",
    category: "Full Stack",
    badgeColor: "linear-gradient(45deg, #ff6b9d, #c44569)",
    cardType: "web-card",
    keyFeatures: [
      "Perfect Lighthouse score via Static Site Generation",
      "Markdown-based workflow for rapid content creation",
      "Advanced SEO and automated meta-tag generation"
    ]
  }
];

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 10, // Outstanding look ke liye subtle tilt best hota hai
          speed: 400,
          glare: true,
          "max-glare": 0.2,
          scale: 1.02,
        });
      }
    });
  }, []);

  return (
    <section id="projects" className="py-5" style={{ background: "#08080c" }}>
      <div className="container">
        <h2 className="text-center mb-5 gradient-text fw-bold">My Innovations</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6" data-aos="fade-up">
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`custom-card ${project.cardType}`}
              >
                <div className="badge-top" style={{ background: project.badgeColor }}>
                  {project.category}
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="features-section">
                  <h6>Core Strengths:</h6>
                  <ul className="feature-list">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="d-flex gap-3 mt-4">
                  <a href={project.github} className="btn-action code-btn">Github</a>
                  <a href={project.demo} className="btn-action demo-btn">Live Link</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .custom-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
        }

        .ai-card { border-top: 4px solid #925ff0; }
        .web-card { border-top: 4px solid #00d2ff; }
        .iot-card { border-top: 4px solid #ff6b35; }

        .project-title { color: #fff; font-weight: 800; margin-bottom: 1rem; }
        .project-desc { color: #94a3b8; font-size: 0.95rem; }

        .feature-list { padding-left: 1rem; color: #cbd5e1; font-size: 0.85rem; }
        .feature-list li { margin-bottom: 6px; }

        .tech-badge {
          background: rgba(0, 210, 255, 0.1);
          color: #00d2ff;
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          margin-right: 8px;
          border: 1px solid rgba(0, 210, 255, 0.2);
        }

        .btn-action {
          flex: 1; text-align: center; padding: 10px; border-radius: 10px;
          text-decoration: none; font-weight: 600; transition: 0.3s;
        }
        .code-btn { background: #fff; color: #000; }
        .demo-btn { border: 1px solid #00d2ff; color: #00d2ff; }
        .demo-btn:hover { background: #00d2ff; color: #000; }
      `}</style>
    </section>
  );
};

export default Projects;