import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particle";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
  const imgPath1 = "../images/breweryFinder.png";
  const imgPath2 = "../images/roomeo.png";

  return (
    <Container fluid className="project-section" id="projects">
      <h1 className="skillset-heading">
        <strong> My Recent Projects </strong>
      </h1>
      <p style={{ color: "black", textAlign: "center" }}>
        Here are a few projects I've worked on recently.
      </p>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <Card className="project-card-view">
            <Card.Img
              variant="top"
              src={imgPath1}
              alt="card-img"
              className="project-card-img"
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Brewery Finder</Card.Title>
              <Card.Text>
                Brewery Finder seamlessly combines the thrill of discovering new
                breweries with the convenience of real-time weather updates,
                ensuring every sip is savored in the perfect setting. Whether
                you're a craft beer enthusiast or a casual explorer, Brewery
                Finder guides you to nearby breweries, cideries, brewpubs, and
                bottle shops and curates personalized recommendations based on
                your taste preferences, and keeps you informed about the weather
                at each location.{" "}
              </Card.Text>
              <Button
                className="btn-primary"
                href="https://github.com/bsaglimb/BreweryFinder"
              >
                <BsGithub /> &nbsp;GitHub
              </Button>{" "}
              <Button className="btn-primary" href="">
                <CgWebsite /> &nbsp;Demo
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="project-card">
          <Card className="project-card-view">
            <Card.Img
              variant="top"
              src={imgPath2}
              alt="card-img"
              className="project-card-img"
            ></Card.Img>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Roomeo</Card.Title>
              <Card.Text>
                Roomeo is an innovative roommate finder platform designed to
                revolutionize the way people connect and live together. Our
                motivation was aimed at simplifying the often challenging
                process of finding a compatible roommate. Roomeo leverages
                advanced algorithms to create
                harmonious living arrangements. Roomeo is not just a roommate
                finder but a community-driven platform committed to transforming
                the roommate search experience.{" "}
              </Card.Text>
              <Button 
                className="btn-primary"
                variant="primary"
                href="https://github.com/TroyMena/roomeo"
              >
                <BsGithub /> &nbsp;GitHub{" "}
              </Button>{" "}
              <Button
                className="btn-primary"
                variant="secondary"
                href="https://roomeo-54bd0cc57e2b.herokuapp.com/"
              >
                <CgWebsite /> &nbsp;Demo{" "}
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
