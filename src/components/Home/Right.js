import React from "react";

import Dev from "./Dev";
import { GithubFilled, LinkedinFilled, FileTextFilled } from '@ant-design/icons';

export default function Home() {
    return (
        <div className="home-right">
            <h3>
                Bonjour {" "}
                <span className="coucou" role="img" aria-labelledby="coucou">
                    👋🏻
                </span>
            </h3>
            <h3 style={{ marginTop: 0 }}>
                Je suis <span style={{ color: "#bff000" }}>Benjamin D'ONOFRIO</span>
            </h3>
            <h3
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 0
                }}
            >
                Développeur <span style={{marginLeft: '5px'}}><Dev/></span>
            </h3>
            <h3 style={{ margin: 0 }}>Je suis disponible pour vous accompagner dans vos projets de développement Web, pour cela n'hésitez pas à me contacter.</h3>
            <div className="group-svg">
                <a className="lien-svg" href="/cv-benjamin-donofrio.pdf" download="/cv-benjamin-donofrio.pdf"><FileTextFilled /></a>
                <a className="lien-svg" href="https://github.com/BeniDiegoDev" target="_blank" rel="noreferrer"><GithubFilled style={{ marginLeft: '10px' }} /></a>
                <a className="lien-svg" href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer"><LinkedinFilled style={{ marginLeft: '10px' }} /></a>
            </div>
        </div>
    );
}
