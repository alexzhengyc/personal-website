import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./BioCard";
import Particle from "../Particle";
import Type from "./Type";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import guoyaoLiImg from "../../Assets/photo.JPG";

function Home() {
  return (
    <section>
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row>
            <Col md={5} className="about-img">
              <img
                src={guoyaoLiImg}
                alt="Guoyao Li"
                className="img-fluid"
                style={{ alignSelf: "center", }}
              />
            </Col>
            <Col>
              <h1 className="project-heading"
                style={{
                  transform: "scale(1.5)",
                }}
              >
                <strong className="purple">Guoyao Li</strong>
              </h1>
            </Col>
          </Row>
          <Row>

            <Aboutcard />
            <div className="home-about-social">
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/guoyaol/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/guoyaoli/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/gylhimself/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;