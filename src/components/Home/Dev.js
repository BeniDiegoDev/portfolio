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
          "Développeur Freelance",
          "Développeur Back End",
          "Développeur Mobile",
          "Développeur Junior",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        pauseFor: 2000,
      }}
    />
  );
}

export default Dev;
