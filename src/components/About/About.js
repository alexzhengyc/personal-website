import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          Who <strong className="purple">I am</strong>
        </h1>
        <Aboutcard />

        <h1 className="project-heading">
          My <strong className="purple">Skills </strong>
        </h1>
        
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">What</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
