import React from "react";
import Typewriter from "typewriter-effect";

function Type1() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm a first-year master's student majoring in Computer Engineering at UCLA. I received my BEng in Automation & Robotics at Zhejiang University, China.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type1;
