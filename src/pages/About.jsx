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
      </Col>
      </Row>
      </Container>
      </Container>
    );
  }