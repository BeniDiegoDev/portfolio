import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRetro, faPaperPlane, faRedo, faSeedling, faTools} from '@fortawesome/free-solid-svg-icons'

export default function ExperiencesComponent(id) {
    return (
        <div className="section-exp" id='section4'>
            <div className="section-content-exp">
                <h2 style={{marginBottom: '25px', color: '#2c2c2c'}}>Expériences</h2>
                <VerticalTimeline lineColor={'#2c2c2c'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: '#bff000',
                            color: '#2c2c2c',
                            borderRadius: '20px',
                            borderBottomWidth: '0'
                        }}
                        contentArrowStyle={{borderRight: '7px solid  #bff000'}}
                        date="07/2022"
                        dateClassName="date-right"
                        iconStyle={{background: '#bff000', color: '#2c2c2c', boxShadow: '0 0 0 4px #2c2c2c'}}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faTools}/>}>
                        <h3 className="vertical-timeline-element-title">
                            Réalisation d'une API back office
                        </h3>
                        <a className="exp-lien-dark"
                           href="https://backofficemaxime.herokuapp.com"
                           target="_blank"
                           rel="noreferrer">
                            <h4 className="vertical-timeline-element-subtitle">Visible ici</h4>
                        </a>
                        <p>
                            Création et déploiement de l'API back office pour le Portfolio de Maxime Turpault. ExpressJS
                            & MongoDB
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#2c2c2c', color: 'white', borderRadius: '20px'}}
                        contentArrowStyle={{borderRight: '7px solid  #2c2c2c'}}
                        date="07/2022"
                        dateClassName="date-left"
                        iconStyle={{background: '#2c2c2c', color: 'white'}}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faCameraRetro}/>}>
                        <h3 className="vertical-timeline-element-title">
                            Réalisation d'un Portfolio
                        </h3>
                        <a className="exp-lien" href="https://maximeturpault.benit.fr" target="_blank" rel="noreferrer">
                            <h4 className="vertical-timeline-element-subtitle">
                                Visible ici
                            </h4>
                        </a>
                        <p>
                            Création et déploiement du portfolio de Maxime Turpault. Projet Agile fait sur mesure et
                            adapté aux besoins et demandes du client. ReactJS & Redux & EmailJS
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: '#bff000',
                            color: '#2c2c2c',
                            borderRadius: '20px',
                            borderBottomWidth: '0'
                        }}
                        contentArrowStyle={{borderRight: '7px solid  #bff000'}}
                        date="06/2022"
                        dateClassName="date-right"
                        iconStyle={{background: '#bff000', color: '#2c2c2c', boxShadow: '0 0 0 4px #2c2c2c'}}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faSeedling}/>}>
                        <a className="exp-lien-dark" href="https://benit.fr" target="_blank" rel="noreferrer">
                            <h3 className="vertical-timeline-element-title">
                                Lancement et création de BeniDiego.js
                            </h3>
                        </a>
                        <h4 className="vertical-timeline-element-subtitle">
                            Suresnes, FR
                        </h4>
                        <p>
                            BeniDiego.js, société de développement d'applications Web & Mobile qui vous accompagne dans
                            vos projets de digitalisation.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#2c2c2c', color: 'white', borderRadius: '20px'}}
                        contentArrowStyle={{borderRight: '7px solid  #2c2c2c'}}
                        date="06/2022"
                        dateClassName="date-left"
                        iconStyle={{background: '#2c2c2c', color: 'white'}}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faPaperPlane}/>}>
                        <h3 className="vertical-timeline-element-title">
                            Formation à La Capsule
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Paris, FR
                        </h4>
                        <p>
                            Bootcamp Développeur d'application Web & Mobile FullStack JavaScript de 10 semaines où j'ai
                            validé mes compétences avec un Titre RNCP de niveau 6 (Chef de projet de développement
                            d'applications Web & Mobile).
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{background: '#c2c2c2', color: '#2c2c2c', boxShadow: '0 0 0 4px #2c2c2c'}}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faRedo}/>}/>
                </VerticalTimeline>
            </div>
        </div>
    );
}
