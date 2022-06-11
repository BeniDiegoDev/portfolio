import React from "react";

import Dev from "./Dev";

import Tilt from "react-parallax-tilt";
import LogoBeniDiego from "../../assets/profil.png";

export default function Home({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content-home" id={id}>

        <div className="home-left">
          <Tilt>
            <img
              style={{ width: "80%", borderRadius: "30px", boxShadow: "2px 2px 10px #000000" }}
              src={LogoBeniDiego}
              alt="avatar"
            />
          </Tilt>
        </div>

        <div className="home-right">
          <h1>
            Bonjour {" "}
            <span className="coucou" role="img" aria-labelledby="coucou">
              👋🏻
            </span>
          </h1>
          <h2>
            Je suis <span style={{ color: "#bff000" }}>Benjamin D'ONOFRIO</span>
          </h2>
          <h2
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Dev />
          </h2>
        </div>

      </div>
    </div>
  );
}
