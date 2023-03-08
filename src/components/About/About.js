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
          <strong className="purple">Self-Learning List</strong>
        </h1>
        <Aboutcard />

      </Container>
    </Container>
  );
}

export default About;
