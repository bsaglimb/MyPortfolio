import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Resume from "../pages/Resume";

function Nav() {
  const currentPage = useLocation().pathname;
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  // function scrollHandler() {
  //   if (window.scrollY >= 20) {
  //     updateNavbar(true);
  //   } else {
  //     updateNavbar(false);
  //   }
  // }

  // window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "fixed" : "navbar"}
    >

      <Container>
      <ul className="nav nav-bar">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>


    </Container>
          {/* Not sure if i want these in the nav bar */}
            <ul className="social-icons-nav">
                      <a 
                        href="https://github.com/bsaglimb"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color  home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </ul>
                    <ul className="social-icons-nav">
                      <a
                        href="https://www.linkedin.com/in/brianna-s-37ab3b14a/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color  home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
          </ul>
    </Navbar>
  );
}

export default Nav;
