import React from "react";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { GithubFilled } from '@ant-design/icons';

export default function Projets({ id }) {
    return (
        <AwesomeSlider
            bullets={false}
            organicArrows={true}
        >
            <div
                id={id}
                className="finded-container"
                style={{ backgroundColor: '#3DA787', display: 'flex', flexDirection: 'column' }}
            >
                <h2 style={{ textAlign: 'center', color: 'black', marginBottom: "20px", fontSize: "30px", fontWeight: "bold" }}>Finded</h2>
                <div className="finded">
                    <div className="finded-left">
                        <img style={{ height: '450px' }} src="https://res.cloudinary.com/dktfcexev/image/upload/v1655159592/Portfolio/finded3_fzlyxq.png" alt="Finded" />
                    </div>
                    <div className="finded-right">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap" }}>
                            <h5 className="pastille-finded">React Native</h5>
                            <h5 className="pastille-finded">Expo</h5>
                            <h5 className="pastille-finded">JavaScript</h5>
                            <h5 className="pastille-finded">Redux</h5>
                            <h5 className="pastille-finded">Express</h5>
                            <h5 className="pastille-finded">MongoDB</h5>
                        </div>
                        <div style={{ backgroundColor: 'white', color: "#7241DB", fontWeight: 'bold', padding: '20px', paddingTop: '5px', paddingBottom: "5px", borderRadius: "20px", marginTop: "20px" }}>
                            <p>Finded est une application qui vous sert à trouver une prestation autour de vous</p>
                            <p>Avec barre de recherche, une map interactive</p>
                            <p>La possibilité de reserver une prestation au choix selon le prestataire</p>
                            <p>Et la gestion de son profil, de ses rendez-vous et bien plus encore !</p>
                        </div>
                        <p style={{ textAlign: 'center', marginTop:"25px"}}><a className="lien-finded" href="http://github.fr" target="_blank" rel="noreferrer">Lien GitHub <GithubFilled/></a></p>
                    </div>
                </div>
            </div>
            <div
                id={id}
                style={{ backgroundColor: '#2c2c2c', color: 'white', display: 'flex', flexDirection: 'column' }}
            >
                <h2>Projet #2</h2>
            </div>
        </AwesomeSlider>
    );
}
