import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
    return (
      <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Brianna Saglimbeni</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} BS</h3>
        </Col>
        </Row>
        </Container>
    );
  }