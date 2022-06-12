import React from "react";

import Typewriter from "typewriter-effect";

function Dev() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Full Stack",
          "Développeur Front End",
          "Développeur Web",
          "Développeur Back End",
          "Développeur Mobile",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 1500,
      }}
    />
  );
}

export default Dev;
