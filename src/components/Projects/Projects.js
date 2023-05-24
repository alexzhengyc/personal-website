import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import similarity from "../../Assets/Projects/similarity-search.png";
import personal from "../../Assets/Projects/personal-website.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={similarity}
              isBlog={false}
              title="Multimodal Similarity Search"
              description="Vectorized Similarity Search in Multi-modal Databases: An Application based on OpenAI CLIP model"
              ghLink="https://github.com/AlexZheng-UCLA/multimodal-similarity-search"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal}
              isBlog={false}
              title=""
              description="My personal website built with React"
              ghLink="https://github.com/AlexZheng-UCLA/personal-website"
              demoLink="https://alexzheng.io/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            /> */}
          {/* </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
