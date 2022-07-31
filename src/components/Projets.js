import React, { useState } from "react";

import { Link } from "react-scroll";
import { GithubFilled, GlobalOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

export default function Projets(id) {

    const [projet, setProjet] = useState('BeniDiego.js')

    const projetsList = [
        { previous: 'API back office de Maxime Turpault', next: 'Finded', name: 'BeniDiego.js', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1656969564/Portfolio/portfolioresp_sjur9n.png", pastilles: ['NodeJS', 'JavaScript', 'React', 'HTML', 'CSS', 'cPanel'], desc: ["Mon portfolio a été réalisé en React JS en une page 100% responsive rassemblant une partie de mes compétences en développement, mes projets en cours et mon parcours."], url: 'https://www.benit.fr', github: 'https://github.com/BeniDiegoDev/portfolio' },
        { previous: 'BeniDiego.js', next: 'Portfolio de Maxime Turpault', name: 'Finded', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1655159592/Portfolio/finded3_fzlyxq.png", pastilles: ['NodeJS', 'ExpressJS', 'JavaScript', 'Expo', 'React Native', 'Redux', 'Mongo DB', 'Mongoose', 'Heroku'], desc: ['Finded est une application, développée en utilisant la méthode Agile, qui vous permet de réserver des prestations chez des prestataires partenaires autour de vous.', "L'application utilise la géo-localisation, une map interactive et une barre de recherche facilitant la gestion de votre profil, de vos rendez vous et bien plus encore."], url: 'null', github: 'https://github.com/BeniDiegoDev/finded' },
        { previous: 'Finded', next: 'API back office de Maxime Turpault', name: 'Portfolio de Maxime Turpault', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1656945575/Portfolio/portfoliomaximturpaultresp_lhf9mh.png", pastilles: ['NodeJS', 'JavaScript', 'React', 'HTML', 'CSS', 'cPanel'], desc: ["Portfolio réalisé sur mesure pour le client en React JS. Il est 100% responsive. Connecté à une API back office permettant au client de gérer en toute autonomie le contenu de son site."], url: 'https://maximeturpault.benit.fr', github: 'https://github.com/BeniDiegoDev/portfolio-maxime-turpault' },
        { previous: 'Portfolio de Maxime Turpault', next: 'BeniDiego.js', name: 'API back office de Maxime Turpault', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1659270422/Portfolio/backofficemaxime_ik5yaj.png", pastilles: ['NodeJS', 'ExpressJS', 'MongoDB', 'Mongoose', 'HTML', 'CSS', 'JavaScript', 'Heroku'], desc: ["API back office réalisé sur mesure pour le client en ExpressJS. Lui permettant de gérer lui même le contenu de son portfolio"], url: 'https://backofficemaxime.herokuapp.com', github: 'https://github.com/BeniDiegoDev/back-office-maxime' },
    ]

    let projetView = projetsList.filter(item => item.name === projet).map((projet, index) => {

        let languages = projet.pastilles.map((pastille, index) => {
            return (
                <h5 className="pastille-projet">{pastille}</h5>
            )
        })

        let desciption = projet.desc.map((desc, index) => {
            return (
                <p>{desc}</p>
            )
        })

        return (
            <div className="projet-container" key={index}>
                <h2 className="projet-title">{projet.name}</h2>
                <div className="projet">
                    <div className="projet-left">
                        <img
                            className="projet-img"
                            src={projet.img}
                            alt={projet.name}
                        />
                    </div>
                    <div className="projet-right">
                        <div className="projet-pastilles">
                            {languages}
                        </div>
                        <div className="projet-text">
                            {desciption}
                        </div>
                        <div className="projet-link">
                            {projet.url === 'null' ?
                                <>
                                </>
                                :
                                <a className="lien-projet" href={projet.url} target="_blank" rel="noreferrer">
                                    Demo <GlobalOutlined />
                                </a>}
                            {projet.github === 'null' ?
                                <>
                                </>
                                :
                                <a className="lien-projet" href={projet.github} target="_blank" rel="noreferrer">
                                    GitHub <GithubFilled />
                                </a>}
                        </div>
                    </div>
                </div>
                <div className="next-projet">
                    <Link
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}
                    >
                        <p className="select-projet" onClick={() => setProjet(projet.previous)}><DoubleLeftOutlined /> Projet précédent</p>
                    </ Link>    
                    <Link
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}
                    >
                    <p className="select-projet" onClick={() => setProjet(projet.next)}>Projet suivant <DoubleRightOutlined /></p>
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <div id="section3" className="section-projets-first">
            {projetView}
        </div>
    );
}
