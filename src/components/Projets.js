import React, { useState } from "react";

import { GithubFilled, GlobalOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

export default function Projets(id) {

    const [projet, setProjet] = useState('Finded')

    const projetsList = [
        { previous: 'Portfolio de Maxime Turpault', next: 'BeniDiego.js', name: 'Finded', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1655159592/Portfolio/finded3_fzlyxq.png", pastilles: ['NodeJS', 'ExpressJS', 'JavaScript', 'Expo', 'React Native', 'Redux', 'Mongo DB', 'Mongoose', 'Heroku'], desc: ['Finded est une application, développée en utilisant la méthode Agile, qui vous permet de réserver des prestations chez des prestataires partenaires autour de vous.', "L'application utilise la géo-localisation, une map interactive et une barre de recherche facilitant la gestion de votre profil, de vos rendez vous et bien plus encore."], url: 'null', github: 'https://github.com/BeniDiegoDev/finded' },
        { previous: 'Finded', next: 'Portfolio de Maxime Turpault', name: 'BeniDiego.js', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1656969564/Portfolio/portfolioresp_sjur9n.png", pastilles: ['NodeJS', 'JavaScript', 'React', 'HTML', 'CSS', 'cPanel'], desc: ["Mon portfolio a été réalisé en React JS en une page 100% responsive rassemblant une partie de mes compétences en développement, mes projets en cours et mon parcours."], url: 'https://www.benit.fr', github: 'https://github.com/BeniDiegoDev/portfolio' },
        { previous: 'BeniDiego.js', next: 'Finded', name: 'Portfolio de Maxime Turpault', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1656945575/Portfolio/portfoliomaximturpaultresp_lhf9mh.png", pastilles: ['NodeJS', 'JavaScript', 'React', 'HTML', 'CSS', 'cPanel'], desc: ["Portfolio réalisé sur mesure pour le client en React JS. Il est 100% responsive. A venir, la création d'un back office permettant au client de gérer en toute autonomie le contenu de son site."], url: 'https://maximeturpault.benit.fr', github: 'https://github.com/BeniDiegoDev/portfolio-maxime-turpault' },
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
                <div className="next-projet">
                            <p className="select-projet" onClick={() => setProjet(projet.previous)}><DoubleLeftOutlined /> Projet précédent</p>
                            <p className="select-projet" onClick={() => setProjet(projet.next)}>Projet suivant <DoubleRightOutlined /></p>
                        </div>
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
            </div>
        )
    })

    return (
        <div id="section3" className="section-projets-first">
            {projetView}
        </div>
    );
}
