import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../assets/resume.pdf";



function Resume() {
    const [width, setWidth] = useState(1200);
  
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

        return (
            <Container fluid id="resume" className="resume-section">
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <button
                        className='btn btn-outline-primary'
                        style={{ maxWidth: "250px" }}
                    >
                        <a href={pdf} download style={{ textDecoration: "none" }} target='_blank'>
                        <AiOutlineDownload />
                        &nbsp;Download Resume
                        </a>
                    </button>
                </Row>
            </Container>
    );
}

export default Resume;