import { useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import logo from "../assets/img/logo.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("about");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="about">
          <img
            src={logo}
            alt="Profile"
            style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link " : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
              color="blue"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#educations"
              className={
                activeLink === "educations"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("educations")}
            >
              Educations
            </Nav.Link>

            <Nav.Link
              href="#contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abdul-hamid-eshaqzada-b67a5bb9/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="link"></img>
              </a>
              <a
                href="https://github.com/HamidSirat20"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="link"></img>
              </a>
            </div>
            <Nav.Link href="#contact">
              <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
