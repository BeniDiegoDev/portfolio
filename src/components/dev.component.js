import React from "react";
import Typewriter from "typewriter-effect";

export default function DevComponent() {
    return (
        <Typewriter
            options={{
                strings: [
                    "MERN Stack",
                    "Web",
                    "Mobile",
                    "Full Stack",
                    "Back End",
                    "Front End",
                    "Freelance",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                pauseFor: 1500,
            }}
        />
    );
}