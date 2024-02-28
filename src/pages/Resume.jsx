import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import Particle from "../components/Particle";
import Button from "react-bootstrap/Button";

function Resume() {
    const [width, setWidth] = useState(1200);
  
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid id="resume" className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        className="resume-btn"
                        variant='outline-primary'
                        style={{ maxWidth: "250px", marginRight: "10px" }}
                        onClick={() => window.open(pdf, '_blank')}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download PDF
                    </Button>
                </Row>
                <Row className="resume">
                    <iframe src={pdf} width="100%" height="800px"></iframe>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;
