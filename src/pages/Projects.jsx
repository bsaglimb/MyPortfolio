import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particle";

export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <h1 className="project-heading">
        My Recent <strong className="color">Works </strong>
      </h1>
      <p style={{ color: "black" }}>
        Here are a few projects I've worked on recently.
      </p>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          
            
              title="Brewery Finder"
              description=""
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink=""
           
          </Col>

          <Col md={4} className="project-card">
            
              title="Roomeo"
              description=""
              ghLink=""
              demoLink=""
      
          </Col>
          </Row>
    </Container>
  );
}
