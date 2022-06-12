import React from "react";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Projets({ id }) {
    return (
        <AwesomeSlider
            bullets={false}
            organicArrows={true}
        >
            <div
                id={id}
                style={{ backgroundColor: '#c2c2c2', color: 'black', display: 'flex', flexDirection: 'column' }}
            >
                <h2>Projet #1</h2>
            </div>
            <div
                id={id}
                style={{ backgroundColor: '#c2c2c2', color: 'black', display: 'flex', flexDirection: 'column' }}
            >
                <h2>Projet #2</h2>
            </div>
            <div
                id={id}
                style={{ backgroundColor: '#c2c2c2', color: 'black', display: 'flex', flexDirection: 'column' }}
            >
                <h2>Projet #3</h2>
            </div>
        </AwesomeSlider>
    );
}
