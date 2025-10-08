import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div style={{ backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="text-center py-3 text-muted border-top border-secondary">
        © {new Date().getFullYear()} Prince Singh | Built with React + Bootstrap
      </footer>
    </div>
  );
}

export default App;
