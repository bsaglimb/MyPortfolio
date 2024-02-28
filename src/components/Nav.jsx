import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export default function About() {
  const currentPage = useLocation().pathname;

  return (
    <div className="nav-wrapper">
    <Container>
    <ul className="nav nav-bar">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={
            currentPage === "/About" ? "nav-link active" : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={
            currentPage === "/Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={
            currentPage === "/Resume" ? "nav-link active" : "nav-link"
          }
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
        {/* Social icons */}
        <li className="social-icons-nav">  
        <a
          href="https://github.com/bsaglimb"
          target="_blank"
          rel="noreferrer"
          className="icon-color home-social-icons"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons-nav">
        <a
          href="https://www.linkedin.com/in/brianna-s-37ab3b14a/"
          target="_blank"
          rel="noreferrer"
          className="icon-color home-social-icons"
        >
          <FaLinkedinIn />
        </a>
      </li>
    </ul>

  

  </Container>
</div>
  );
}


