import React from "react";

import Typewriter from "typewriter-effect";

function Dev() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Web Junior Full Stack JavaScript",
          "Développeur Full Stack JavaScript",
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
