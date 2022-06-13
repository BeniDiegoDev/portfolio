import React from "react";

import Typewriter from "typewriter-effect";

function Dev() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack",
          "Front End",
          "Web",
          "Freelance",
          "Back End",
          "Mobile",
          "Junior",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        pauseFor: 1500,
      }}
    />
  );
}

export default Dev;
