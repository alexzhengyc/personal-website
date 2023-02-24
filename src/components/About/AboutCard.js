import React from "react";
import Card from "react-bootstrap/Card";
import { MdComputer } from "react-icons/md";
import {GiPokerHand} from "react-icons/gi";
import {GiFootprint} from "react-icons/gi";
import {GrRobot} from "react-icons/gr";
import Type1 from "./Type";

function AboutCard() {
  return (
    <Card className="about-card">
      <Card.Body>
          <p style={{ textAlign: "justify" }}>
            Gradually mastering how to MoYu🐟 at CMU, I get myself some time to learn some new CS knowledge, with inner passion.\Although I've already been taking 5 course this semester lol🐶
          </p>
          <p style={{ textAlign: "justify" }}>
            DONE:
          </p>
          <ul>
            <li className="about-activity">
              <MdComputer /> MLC(Machine Learning Compiler)
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            TODO:
            <ul>
            <li className="about-activity">
              <GrRobot /> Compiler (more about optimization)
            </li>
            <li className="about-activity">
              <MdComputer /> Parallel Computing
            </li>
            <li className="about-activity">
              <MdComputer /> Deep Learning system
            </li>
          </ul>
          </p>

          <p style={{ textAlign: "center"}}>
            <br/>
            <span className="quote">"We are meant to create!"</span>
          </p>
          
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
