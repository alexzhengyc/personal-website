import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Type from "./Type";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <strong className="main-name"> Alex Zheng</strong>
          <Type />
        </Container>
      </Container>
        
      <Container fluid className="home-about-section" id="about">      
        <Container className="home-about-social">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/AlexZheng-UCLA/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/alexzheng1017/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/alexzheng1017/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/alexzheng_la/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Container>
      </Container >


    </section>
  );
}

export default Home;
