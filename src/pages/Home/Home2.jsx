import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home2() {
    return(
        <Container fluid className="home-about-section" id="about">
        <Container>
            <Row>
                <Col md={8} className="home-about-description">
                    <h1 style={{ fontSize: "2.6em" }}>
                    LET ME <span className="color"> INTRODUCE </span> MYSELF</h1>
                    <p className="home-about-body">
                        I am a former neuroscientist turned full-stack software developer. 
                        <br />
                        <br /> I am versed in a variety of programming languages and technologies, including
                        <i>
                            <b className="color">JavaScript, HTML & CSS. </b>
                        </i>
                        <br />
                        <br />
                        I am interested in building new and innovative web technologies and products.
                        <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="color">Node.js</b> and
              <i>
                <b className="color">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="color"> React.js and Next.js</b>
              </i>
                    </p>
                </Col>
                <Col md={12} className="home-about-social">
            <h1>Feel free to connect with me</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bsaglimb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons">
                  <AiFillGithub />
                </a>
                </li>
                <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brianna-s-37ab3b14a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons">
                  <FaLinkedinIn />
                </a>
                </li>
            </ul>
            </Col>
            </Row>
        </Container>
        </Container>
    );
}