import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particle";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";


export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <h1 className="project-heading">
       <strong> My Recent Projects </strong>
      </h1>
      <p style={{ color: "black", textAlign: "center" }}>
        Here are a few projects I've worked on recently.
      </p>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <Card className="project-card-view">
            {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
            <Card.Body>
              <Card.Title>Brewery Finder</Card.Title>
              <Card.Text>
                Description goes here...
              </Card.Text>
             
              <Button variant="primary" href="https://github.com/bsaglimb/BreweryFinder"><BsGithub /> &nbsp;GitHub</Button>{' '}
              <Button variant="secondary" href=""><CgWebsite /> &nbsp;Demo</Button>{' '}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="project-card">
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title>Roomeo</Card.Title>
              <Card.Text>
                Description goes here...
              </Card.Text>
              <Button variant="primary" href="https://github.com/TroyMena/roomeo"><BsGithub /> &nbsp;GitHub </Button>{' '}
              <Button variant="secondary" href="https://roomeo-54bd0cc57e2b.herokuapp.com/"><CgWebsite /> &nbsp;Demo </Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}