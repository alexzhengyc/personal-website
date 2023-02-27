import React from "react";
import Card from "react-bootstrap/Card";
import Type1 from "./Type";

function AboutCard() {
  return (
    <Card className="about-card">
      <Card.Body>
          <p style={{ textAlign: "justify" }}>
          I am currently a first-year MCDS (Master of Computational Data Science) student at the Language Technologies Institute, School of Computer Science at Carnegie Mellon University.
Prior to CMU, I obtained my bachelor’s degree in Computer Science and Technology from ChuKochen Honors College, Zhejiang University in China. During my undergraduate studies, I was a member of the Mixed Class of 2022 and worked with Prof. Xin Liu at UC Davis on Machine Learning Privacy. I also interned at the Big Data AI Group at Intel, as a deep learning software intern.<br/><br/>

With my experiences in machine learning and computer system, I grew interested in the intersection of these two fields. I am lucky to have to chance to work with Prof. Tianqi Chen at CMU. I am currently learning about Apache TVM, a pioneering machine learning compiler, and trying to make my contribution.
          </p>          
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
