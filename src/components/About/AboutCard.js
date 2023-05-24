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

            I'm a first-year master's student majoring in Computer Engineering at UCLA. I received my BEng in Automation & Robotics at Zhejiang University, China.<br/>
            I have rich experience in machine learning, software development, planning and control of robots, .<br/>
            Apart from my technical abilities, I minored in Innovation and Entrepreneurship and have confidence in my leadership and communication skills.<br/>
            And here are some things I would like to do in my spare time:
          </p>
          <ul>
            <li className="about-activity">
              <GrRobot /> Learning newest tech -- Computer vision model, Large Language Model, etc.
            </li>
            <li className="about-activity">
              <MdComputer /> Doing cool machine learning project
            </li>
            <li className="about-activity">
              <GiPokerHand /> Playing piano & boardgames 
            </li>
            <li className="about-activity">
              <GiFootprint /> Exploring the city -- who doesnt like LA
            </li>
          </ul>

          <p style={{ textAlign: "center"}}>
            <br/>
            <span className="quote">"We are meant to make a difference to the world!"</span>
          </p>
          
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
