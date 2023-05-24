import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  FiDatabase,
  FiFlag
} from "react-icons/fi";

import {
  MdWebAsset,
  MdModelTraining,
} from "react-icons/md";

import {
  AiOutlineRobot,
  AiOutlineDatabase,
} from "react-icons/ai";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", paddingTop: "50px" }}>

      <Col xs={3} md={2.5} className="tech-icons">
        <MdModelTraining/> <br/>Machine Learning & <br/> Deep Learning
      </Col>

      <Col xs={3} md={2.5} className="tech-icons">
        <MdWebAsset/> <br/>Full-stack Development
      </Col>

      <Col xs={3} md={2.5} className="tech-icons">
        <FiDatabase/> <br/> Data Structure & <br/>Agorithms
      </Col>

      <Col xs={3} md={2.5} className="tech-icons">
        <AiOutlineDatabase/> <br/> Data Science & <br/> Signal Processing
      </Col>

      <Col xs={3} md={2.5} className="tech-icons">
        <AiOutlineRobot/> <br/>Planning & Control of Robots
      </Col>

      <Col xs={3} md={2.5} className="tech-icons">
        <FiFlag/> <br/> Leadership &<br/>  Communication
      </Col>



    </Row>
  );
}

export default Techstack;
