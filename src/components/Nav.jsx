import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Nav(){
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

    return(
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
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                   className={currentPage === "/" ? "nav-link active" : "nav-link"}>Home</Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/About"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === "/About" ? "nav-link active" : "nav-link"}>About</Link>
            </li>
            <li className="nav-item">
                <Link
                  to="/Projects"
            // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === "/Projects" ? "nav-link active" : "nav-link"}>Projects</Link>
            </li>
            <li className="nav-item">
                <Link
                  to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>Contact</Link>
            </li>
        </ul>
      </Container>     
    </Navbar>

    );
}

export default Nav;