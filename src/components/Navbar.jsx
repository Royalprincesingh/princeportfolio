import React from "react";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

const Navbar = () => {
  return (
    <BsNavbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <BsNavbar.Brand href="#home" className="fw-bold text-primary d-flex align-items-center">
          <img
            src="/vite.jpg"
            alt="Prince Singh"
            className="rounded-circle me-2"
            style={{
              width: "30px",
              height: "30px",
              objectFit: "cover"
            }}
          />
          Prince Singh
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="text-light">About</Nav.Link>
            <Nav.Link href="#projects" className="text-light">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
