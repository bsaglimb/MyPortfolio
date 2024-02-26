import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Nav() {
  const currentPage = useLocation().pathname;
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "fixed" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <ul className="nav nav-bar">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              onClick={() =>
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              className="nav-link"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Projects"
              className="nav-link"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className="nav-link"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default Nav;
