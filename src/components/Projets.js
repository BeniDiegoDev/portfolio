import React, { useState } from "react";

import { GithubFilled, GlobalOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

export default function Projets(id) {

    const [projet, setProjet] = useState('Finded')

    const projetsList = [
        { previous: 'BeniDiego.js', next: 'BeniDiego.js', name: 'Finded', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1655159592/Portfolio/finded3_fzlyxq.png", pastilles: ['NodeJS', 'ExpressJS', 'JavaScript', 'Expo', 'React Native', 'Redux', 'Mongo DB', 'Mongoose', 'Heroku'], desc: ['Finded est une application qui vous sert à trouver des prestations autour de vous.', 'Finded est développée en utilisant la méthode Agile.', "L'application utilise la géolocalisation, une map interactive, une barre de recherche.", "La possibilité de réserver une prestation chez des prestatires partenaire.", "La gestion de votre profil, de vos rendez-vous et bien plus encore !"], url: 'null', github: 'https://github.com/BeniDiegoDev/finded' },
        { previous: 'Finded', next: 'Portfolio de Maxime Turpault', name: 'BeniDiego.js', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1656969564/Portfolio/portfolioresp_sjur9n.png", pastilles: ['NodeJS', 'JavaScript', 'React', 'HTML', 'CSS', 'cPanel'], desc: ["Mon portfolio sur lequel vous êtes actuellement.", "Ce portfolio a été réalisé en React JS.", "Il est fait en une seule page et 100 % responsive", "L'application utilise une partie de mes compétences en développement.", "La possibilité de suivre mon parcours et mes projets", "Il sert à avoir un aperçu de ce que je peux faire pour mes clients."], url: 'https://www.benit.fr', github: 'https://github.com/BeniDiegoDev/portfolio' },
        { previous: 'BeniDiego.js', next: 'Finded', name: 'Portfolio de Maxime Turpault', img: "https://res.cloudinary.com/dktfcexev/image/upload/v1656945575/Portfolio/portfoliomaximturpaultresp_lhf9mh.png", pastilles: ['NodeJS', 'JavaScript', 'React', 'HTML', 'CSS', 'cPanel'], desc: ["Portfolio fait sur mesure avec le client suite à plusieurs échanges.", "Ce portfolio a été réalisé en React JS.", "Il est 100 % responsive", "L'application utilise une partie de mes compétences en développement.", "A venir, un back office pour que le client puisse gérer lui même la gestion des photos à afficher dans son cas."], url: 'https://maximeturpault.benit.fr', github: 'https://github.com/BeniDiegoDev/portfolio-maxime-turpault' },
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
