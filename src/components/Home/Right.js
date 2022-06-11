import React from "react";

import Dev from "./Dev";

export default function Home() {
    return (
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
    );
}
