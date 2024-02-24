import React from "react";
import ParticlesBg from "particles-bg";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
        <ParticlesBg type="lines" bg={true} />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">Hello, welcome to my portfolio!</h1>
                <h1 className="heading-name">I'm
                  <strong className="main-name"> Brianna Saglimbeni</strong>
                </h1>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    );
  }