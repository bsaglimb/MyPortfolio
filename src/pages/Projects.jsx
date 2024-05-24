import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Particle from "../components/Particle";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import project1 from "../assets/images/breweryFinder.png";
import project2 from "../assets/images/roomeo.png";
import project3 from "../assets/images/astra.png";
import project4 from "../assets/images/environmentalAngels.png"
import project5 from "../assets/images/dowejet.svg"

export default function Projects() { 
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <h1 className="skillset-heading1">
        <strong> My Recent Projects </strong>
      </h1>
      <p className="skillset-heading2" style={{ textAlign: "center" }}>
        Here are a few projects I've worked on recently.
      </p>

      <div className="projects-container">

      <Card className="project-card-view">
          <Card.Img
            variant="top"
            src={project5}
            alt="card-img"
            className="project-card-img"
          ></Card.Img>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Dowejet
            </Card.Title>
            <Card.Text>
            Introducing Dowejet, where luxury meets affordability in private flight deals. As part of the design team, I am working to creating a seamless user experience for accessing "empty leg" flights at unbeatable prices. Based in Paris and Fort Lauderdale, Florida, Dowejet makes luxury travel accessible to all.{" "}
            </Card.Text>
            <Button
              className="btn-primary"
              variant="primary"
              href="https://github.com/bdange/dowejet"
            >
              <BsGithub /> &nbsp;GitHub{" "}
            </Button>{" "}
            <Button
              className="btn-primary"
              variant="secondary"
              href="https://dowejet.vercel.app/"
            >
              <CgWebsite /> &nbsp;Website{" "}
            </Button>{" "}
          </Card.Body>
        </Card>

      <Card className="project-card-view">
          <Card.Img
            variant="top"
            src={project4}
            alt="card-img"
            className="project-card-img"
          ></Card.Img>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Environmental Angels</Card.Title>
            <Card.Text>
            Explore Environmental Angels, a leading environmental consulting firm with over 45 years of combined experience. As a freelance developer, I had the privilege of updating their website and creating new pages to showcase their expanded services. From site assessments to waste management, Environmental Angels delivers top-notch solutions with a focus on integrity and client satisfaction.{" "}
            </Card.Text>
            <Button
              className="btn-primary"
              variant="secondary"
              href="https://environmentalangels.net/"
            >
              <CgWebsite /> &nbsp;Website{" "}
            </Button>{" "}
          </Card.Body>
        </Card>

        <Card className="project-card-view">
          <Card.Img
            variant="top"
            src={project3}
            alt="card-img"
            className="project-card-img"
          ></Card.Img>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Echoes of Astra
            </Card.Title>
            <Card.Text>
              Welcome to Echoes of Astra, your virtual dream interpreter powered
              by cutting-edge AI technology! Dive into the mysterious realms of
              your subconscious with our user-friendly platform. Whether you're
              soaring through the skies or exploring enchanted forests in your
              dreams, Echoes of Astra is here to decode the hidden messages
              behind your nightly adventures.{" "}
            </Card.Text>
            <Button
              className="btn-primary"
              variant="primary"
              href="https://github.com/reagan1440/Echoes-of-Astra"
            >
              <BsGithub /> &nbsp;GitHub{" "}
            </Button>{" "}
            <Button
              className="btn-primary"
              variant="secondary"
              href="https://echoes-of-astra.onrender.com/"
            >
              <CgWebsite /> &nbsp;Website{" "}
            </Button>{" "}
          </Card.Body>
        </Card>

        <Card className="project-card-view">
          <Card.Img
            variant="top"
            src={project2}
            alt="card-img"
            className="project-card-img"
          ></Card.Img>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Roomeo</Card.Title>
            <Card.Text>
              Roomeo is an innovative roommate finder platform designed to
              revolutionize the way people connect and live together. Our
              motivation was aimed at simplifying the often challenging process
              of finding a compatible roommate. Roomeo leverages advanced
              algorithms to create harmonious living arrangements. Roomeo is not
              just a roommate finder but a community-driven platform committed
              to transforming the roommate search experience.{" "}
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
              <CgWebsite /> &nbsp;Website{" "}
            </Button>{" "}
          </Card.Body>
        </Card>

        <Card className="project-card-view">
          <Card.Img
            variant="top"
            src={project1}
            alt="card-img"
            className="project-card-img"
          ></Card.Img>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Brewery Finder
            </Card.Title>
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
              <CgWebsite /> &nbsp;Website
            </Button>{" "}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
