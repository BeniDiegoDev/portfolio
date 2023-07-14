import React, {useState} from "react";
import {projects} from '../assets/data/projects';
import {Link} from "react-scroll";
import {DoubleLeftOutlined, DoubleRightOutlined, GithubFilled, GlobalOutlined} from '@ant-design/icons';

export default function ProjectsComponent(id) {

    const [projet, setProjet] = useState("O'Jardin Secret")

    let projetView = projects.filter(item => item.name === projet).map((projet, index) => {
        let languages = projet.pastilles.map((pastille, index) => {
            return (
                <h5 className="pastille-projet">{pastille}</h5>
            )
        })

        let descriptions = projet.desc.map((description, index) => {
            return (
                <p>{description}</p>
            )
        })

        return (
            <div className="projet-container" key={index}>
                <h2 className="projet-title">{projet.name}</h2>
                <div className="projet">
                    <div className="projet-left">
                        <img className="projet-img"
                             src={projet.img}
                             alt={projet.name}/>
                    </div>
                    <div className="projet-right">
                        <div className="projet-pastilles">
                            {languages}
                        </div>
                        <div className="projet-text">
                            {descriptions}
                        </div>
                        <div className="projet-link">
                            {projet.url ?
                                <a className="lien-projet" href={projet.url} target="_blank" rel="noreferrer">
                                    Demo <GlobalOutlined/>
                                </a>
                                :
                                <>
                                </>}
                            {projet.github ?
                                <a className="lien-projet" href={projet.github} target="_blank" rel="noreferrer">
                                    GitHub <GithubFilled/>
                                </a> :
                                <>
                                </>}
                        </div>
                    </div>
                </div>
                <div className="next-projet">
                    <Link
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}>
                        <p className="select-projet" onClick={() => setProjet(projet.previous)}>
                            <DoubleLeftOutlined/> Projet précédent
                        </p>
                    </ Link>
                    <Link
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2000}>
                        <p className="select-projet" onClick={() => setProjet(projet.next)}>
                            Projet suivant <DoubleRightOutlined/>
                        </p>
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
