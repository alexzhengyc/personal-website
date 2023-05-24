import React from "react";
import {Container, Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiJava,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiReact,
  SiMongodb,
  SiPandas,
  SiRedux,
  SiVisualstudio,
  SiUbuntu,
  SiPycharm,
  SiAmazonaws,
  SiGooglecolab,
} from "react-icons/si";

import {
  DiPython,
  DiJavascript1,
  DiHtml5,
  DiTerminal,
} from "react-icons/di";

import {
  CgCPlusPlus
} from "react-icons/cg";

import {
  FaFlask,
  FaHtml5,
} from "react-icons/fa";

function Toolstack() {
  return (
    <Container fluid className="software-section">
      <Row style={{ justifyContent: "center", paddingTop: "50px"}}>
        
        <Col xs={4} md={3} className="software-text">
          Programming Languages
        </Col>

        <Col xs={2} md={1} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <CgCPlusPlus />
        </Col>

        <Col xs={2} md={1} className="tech-icons">
          <SiJava />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <DiHtml5 />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiLinux />
        </Col>
        <Col xs={0} md={1} className="software-text">
        </Col>



      </Row>
      
      <Row style={{ justifyContent: "center",  paddingTop: "20px"}}>

        <Col xs={4} md={3} className="software-text">
          Framework & libraries
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiPytorch />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiTensorflow />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiReact />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <FaFlask />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiRedux />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiMongodb />
        </Col>
        <Col xs={0} md={1} className="software-text">
        </Col>
      </Row>

      <Row style={{ justifyContent: "center",  paddingTop: "20px"}}>
        <Col xs={4} md={3} className="software-text">
          Softwares
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiVisualstudio />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiPycharm />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiUbuntu />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiAmazonaws />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <SiGooglecolab />
        </Col>
        <Col xs={2} md={1} className="tech-icons">
          <DiTerminal />
        </Col>
        <Col xs={0} md={1} className="software-text">
        </Col>

      </Row>
    </Container>

    
  );
}

export default Toolstack;
