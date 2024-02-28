import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoFlowerOutline } from "react-icons/io5";
import Particle from "../components/Particle";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiSlack,
  SiMacos,
  SiMysql,
  SiInsomnia,
} from "react-icons/si";
import { PiFileCss } from "react-icons/pi";
// import Header from "../components/Header";

export default function About() {
  const imgMe = "../images/me.JPG";
  const imgMe2 = "../images/img3.png";
  const img3 = "../images/img4.jpg";

  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ padding: "10px" }}>
          <Col
            md={7}
            style={{
              paddingTop: "150px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong>Let me introduce myself.</strong>
            </h1>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                I am a former neuroscientist who has transitioned into the realm
                of full-stack software development. My journey has been one of
                seamless integration, blending my deep understanding of the human
                brain with the intricacies of coding. Driven by an insatiable
                passion for learning, I thrive in the fast-paced world of
                technology, constantly seeking out new challenges and
                opportunities for growth. From unraveling the mysteries of
                neural networks to crafting elegant solutions in software
                development, I embody the spirit of versatility and innovation.
                I am excited to continue making an impact, leveraging my diverse
                background to contribute meaningfully to both scientific
                exploration and technological advancement.
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>
              <ul>
                <li className="about-activity">
                  <IoFlowerOutline /> Fostering Kittens
                </li>
                <li className="about-activity">
                  <IoFlowerOutline /> Playing Video Games
                </li>
                <li className="about-activity">
                  <IoFlowerOutline /> Travelling
                </li>
              </ul>
            </blockquote>
          </Col>
          <Col md={12} className="text-end">
            <img
              src={img3}
              alt="personal pic"
              className="personal-pic"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
        <Row>
          <h1 className="skillset-heading">
            <strong>Professional Skillset</strong>
          </h1>
        </Row>
        <div className="tech-icons-container">
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
              <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <PiFileCss />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiInsomnia />
            </Col>
          </Row>
        </div>
        <div className="tech-icons-container">
          <Row>
            <h1 style={{ justifyContent: "center" }} className="skillset-heading">
              <strong>Tools I Use</strong>
            </h1>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
              <SiMacos />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiSlack />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
          }  