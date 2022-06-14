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
                            <h5 className="pastille-finded">NodeJS</h5>
                            <h5 className="pastille-finded">ExpressJS</h5>
                            <h5 className="pastille-finded">JavaScript</h5>
                            <h5 className="pastille-finded">Expo</h5>
                            <h5 className="pastille-finded">React Native</h5>
                            <h5 className="pastille-finded">Redux</h5>
                            <h5 className="pastille-finded">MongoDB</h5>
                            <h5 className="pastille-finded">Mongoose</h5>
                            <h5 className="pastille-finded">Heroku</h5>
                        </div>
                        <div style={{ backgroundColor: 'white', color: "#7241DB", fontWeight: 'bold', padding: '20px', paddingTop: '5px', paddingBottom: "5px", borderRadius: "20px", marginTop: "20px" }}>
                            <p>Finded est une application qui vous sert à trouver des prestations autour de vous.</p>
                            <p>Finded est développée en utilisant la méthode Agile.</p>
                            <p>L'application utilise la géolocalisation, une map interactive, une barre de recherche.</p>
                            <p>La possibilité de réserver une prestation chez des prestatires partenaire.</p>
                            <p>La gestion de votre profil, de vos rendez-vous et bien plus encore !</p>
                        </div>
                        <p style={{ textAlign: 'center', marginTop:"25px"}}><a className="lien-finded" href="https://github.com/BeniDiegoDev/finded" target="_blank" rel="noreferrer">Lien GitHub <GithubFilled/></a></p>
                    </div>
                </div>
            </div>
            <div
                id={id}
                className="portfolio-container"
                style={{ backgroundColor: '#c2c2c2', display: 'flex', flexDirection: 'column' }}
            >
                <h2 style={{ textAlign: 'center', color: 'black', marginBottom: "20px", fontSize: "30px", fontWeight: "bold" }}>Portfolio</h2>
                <div className="portfolio">
                    <div className="portfolio-left">
                        <img style={{ width: '380px' }} src="https://res.cloudinary.com/dktfcexev/image/upload/v1655183312/Portfolio/portfolioresp_rny1y9.png" alt="Finded" />
                    </div>
                    <div className="portfolio-right">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: "wrap" }}>
                            <h5 className="pastille-portfolio">NodeJS</h5>
                            <h5 className="pastille-portfolio">JavaScript</h5>
                            <h5 className="pastille-portfolio">React</h5>
                            <h5 className="pastille-portfolio">CSS</h5>
                            <h5 className="pastille-portfolio">cPanel</h5>
                        </div>
                        <div style={{ backgroundColor: '#2c2c2c', color: "#bff000", fontWeight: 'bold', padding: '20px', paddingTop: '5px', paddingBottom: "5px", borderRadius: "20px", marginTop: "20px" }}>
                            <p>Mon portfolio sur lequel vous êtes actuellement.</p>
                            <p>Ce portfolio a été réalisé en React JS.</p>
                            <p>Il est fait en une seule page et 100 % responsive</p>
                            <p>L'application utilise une partie de mes compétences en développement.</p>
                            <p>La possibilité de suivre mon parcours et mes projets</p>
                            <p>Il sert à avoir un aperçu de ce que je peux faire pour mes clients.</p>
                        </div>
                        <p style={{ textAlign: 'center', marginTop:"25px"}}><a className="lien-portfolio" href="https://github.com/BeniDiegoDev/portfolio" target="_blank" rel="noreferrer">Lien GitHub <GithubFilled/></a></p>
                    </div>
                </div>
            </div>
        </AwesomeSlider>
    );
}
