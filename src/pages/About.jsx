import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particles";


export default function About() {
    return (
      <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About ME
            </h1>
            <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="aboutColor">Brianna Saglimbeni </span>
            from New York.
            <br />
            I am a former neuroscientist who has transitioned into the realm of full-stack software development. My journey has been one of seamless integration, blending my deep understanding of the human brain with the intricacies of coding. Driven by an insatiable passion for learning, I thrive in the fast-paced world of technology, constantly seeking out new challenges and opportunities for growth. From unraveling the mysteries of neural networks to crafting elegant solutions in software development, I embody the spirit of versatility and innovation. I am excited to continue making an impact, leveraging my diverse background to contribute meaningfully to both scientific exploration and technological advancement.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
        </blockquote>

      </Col>
      </Row>
      </Container>
      </Container>
    );
  }