import React from "react";

const Hero = () => (
  <section className="hero-section" id="home">
    <div className="container">
      <div className="row align-items-center min-vh-100 py-5">
        <div className="col-lg-5 text-center order-lg-2 mb-5 mb-lg-0">
          <div className="photo-container">
            <img src="/royal-singh.png" alt="Prince Singh (Royal Singh) - Flutter Developer and Full Stack Engineer" className="profile-photo shadow-lg" loading="eager" fetchPriority="high" />
          </div>
        </div>
        <div className="col-lg-7 text-center text-lg-start order-lg-1">
          <div className="badge-modern mb-3"><span className="dot" aria-hidden="true"></span>Available for Opportunities</div>
          <h1 className="hero-title">PRINCE <span className="last-name">SINGH</span><span className="hero-alias d-block">(Royal Singh)</span></h1>
          <h2 className="hero-subtitle mb-4">Flutter Developer &amp; Full Stack Software Engineer <span className="separator">|</span> AI/ML Specialist</h2>
          <p className="hero-description mb-5">Hi, I'm <strong>Prince Singh</strong> (also known as <strong>Royal Singh</strong>), a Flutter Developer and Full Stack Software Engineer. I build cross-platform mobile apps with Flutter and Dart, full-stack web platforms with the MERN stack, and AI systems such as <strong>Proctor AI</strong> and <strong>TrueSight AI</strong>.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start"><a href="#projects" className="btn-main primary">Explore Work</a><a href="#contact" className="btn-main secondary">Get In Touch</a></div>
        </div>
      </div>
    </div>
    <style>{`
      .hero-section { background:#08080c; position:relative; overflow:hidden; }
      .photo-container { position:relative; z-index:1; display:inline-block; }
      .profile-photo { display:block; width:320px; height:320px; border-radius:50%; border:2px solid rgba(255,255,255,.14); object-fit:cover; object-position:center; }
      .hero-title { font-size:4.5rem; font-weight:900; color:#00d2ff; letter-spacing:-2px; line-height:1.05; }
      .last-name { color:#e2e8f0; }
      .hero-alias { color:var(--accent-1); font-size:1.25rem; letter-spacing:2.5px; font-weight:600; margin-top:8px; text-transform:uppercase; }
      .hero-subtitle { color:#94a3b8; font-size:1.5rem; }
      .hero-description { color:#94a3b8; max-width:550px; font-size:1.1rem; }
      .badge-modern { display:inline-flex; align-items:center; background:rgba(0,210,255,.1); color:#00d2ff; padding:6px 16px; border-radius:50px; font-size:.85rem; font-weight:600; }
      .dot { width:8px; height:8px; background:#00d2ff; border-radius:50%; margin-right:10px; }
      .btn-main { display:inline-flex; align-items:center; justify-content:center; padding:12px 28px; border-radius:10px; font-weight:700; text-decoration:none; transition:background-color 160ms ease,border-color 160ms ease,color 160ms ease; }
      .primary { background:#00d2ff; color:#08080c; border:1px solid #00d2ff; }
      .primary:hover { background:#30dcff; border-color:#30dcff; color:#08080c; }
      .secondary { border:1px solid rgba(255,255,255,.22); color:#fff; }
      .secondary:hover { background:rgba(255,255,255,.07); color:#fff; border-color:rgba(255,255,255,.4); }
      @media(max-width:768px) { .hero-title{font-size:3rem;} .profile-photo{width:250px;height:250px;} .hero-subtitle{font-size:1.2rem;} .hero-description{font-size:1rem;} }
    `}</style>
  </section>
);

export default Hero;
