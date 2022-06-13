import React from "react";

import Dev from "./Dev";
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

export default function Home() {
    return (
        <div className="home-right">
            <h1>
                Bonjour {" "}
                <span className="coucou" role="img" aria-labelledby="coucou">
                    👋🏻
                </span>
            </h1>
            <h2 style={{ marginTop: 0 }}>
                Je suis <span style={{ color: "#bff000" }}>Benjamin D'ONOFRIO</span>
            </h2>
            <h2
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: '45px',
                    marginTop: 0
                }}
            >
                Développeur <span style={{marginLeft: '5px'}}><Dev/></span>
            </h2>
            <div className="group-svg">
                <a className="lien-svg" href="https://github.com/BeniDiegoDev" target="_blank" rel="noreferrer"><GithubFilled  /></a>
                <a className="lien-svg" href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer"><LinkedinFilled style={{ marginLeft: '10px' }} /></a>
            </div>
        </div>
    );
}
