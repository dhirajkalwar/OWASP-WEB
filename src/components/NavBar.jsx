import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="imgStyle" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/Teams"
              className={
                activeLink === "teams" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("teams")}
            >
              Team
            </Nav.Link>
            <Nav.Link
              href="/#events"
              className={
                activeLink === "events" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("events")}
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="/ctf2023"
              className={
                activeLink === "CTF-2023" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("CTF-2023")}
            >
              CTF-2023
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/company/owasp-tcet/"
                target="_blank"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/owasptcet/" target="_blank">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <HashLink to="/#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
