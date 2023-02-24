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
          I am currently a first-year MCDS (Master of Computational Data Science) student at the Language Technologies Institute, School of Computer Science at Carnegie Mellon University.
Prior to CMU, I obtained my bachelor’s degree in Computer Science and Technology from ChuKochen Honors College, Zhejiang University in China. During my undergraduate studies, I was a member of the Mixed Class of 2022 and felt honored to work with Prof. Xin Liu at UC Davis on Machine Learning Privacy. I also interned at the Big Data AI Group at Intel, as a deep learning software intern.<br/><br/>

With my experiences in machine learning and computer system, I grew interested in the intersection of these two fields. I am lucky to have to chance to work with Prof. Tianqi Chen at CMU. I am currently learning about Apache TVM, a pioneering machine learning compiler, and trying to make my contribution.
          </p>
          {/* <ul>
            <li className="about-activity">
              <GrRobot /> Learning newest tech -- AI, web3, robots
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
          </p> */}
          
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
