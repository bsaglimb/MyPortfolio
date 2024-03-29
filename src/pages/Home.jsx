import React from "react";
import ParticlesBg from "particles-bg";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import imgMe2 from "../assets/images/img6.png"

export default function Home() {
  const isFirstSection = true;

  return (
    <div className="home-wrapper">
      {isFirstSection && <ParticlesBg type="lines" bg={true} />}
      <div className="home-bg">
        <Container className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hello, welcome to my portfolio!
                </h1>
                <h1 className="heading-name">
                  I'm
                  <strong className="main-name"> Brianna Saglimbeni</strong>
                </h1>
                <br />
                <h2 md={7} style={{ paddingLeft: 42 }} className="typewriter">
                  <Typewriter
                    options={{
                      strings: ["Full Stack Software Developer"],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </h2>
              </Col>
              <Col className="home-pic">
                <img 
                  src={imgMe2}
                  alt="home pic"
                  />
              </Col>
              <Col md={12} className="home-about-social">
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/bsaglimb"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/brianna-s-37ab3b14a/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
}
