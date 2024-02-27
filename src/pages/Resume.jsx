import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../assets/Resume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Resume() {
    const [width, setWidth] = useState(1200);
  
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    return (

        
    );

}