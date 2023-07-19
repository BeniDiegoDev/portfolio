import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCameraRetro,
    faPaperPlane,
    faPills,
    faPizzaSlice,
    faRedo,
    faSeedling,
    faTools
} from '@fortawesome/free-solid-svg-icons'

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
                        date="09/2022"
                        dateClassName="date-right"
                        iconStyle={{background: '#bff000', color: '#2c2c2c', boxShadow: '0 0 0 4px #2c2c2c'}}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faPills}/>}>
                        <a className="exp-lien-dark"
                           href="https://www.foodchainid.com/nutraveris/"
                           target="_blank"
                           rel="noreferrer">
                            <h3 className="vertical-timeline-element-title">
                                Développeur web full stack chez Nutraveris / FoodChain ID
                            </h3>
                        </a>
                        <h4 className="vertical-timeline-element-subtitle">Saint Brieuc, FR</h4>
                        <p>
                            Actuellement en CDI chez Nutraveris / FoodChain ID, j'occupe un poste de développeur web
                            full stack, je m'occupe de la refonte complète d'une application interne web complexe en
                            Angular / NestJS, anciennement en JS Vanilla et AngularJS. L'application web sert à gérer
                            une base de données très complète concernant le domaine initial de l'entreprise (laboratoire
                            de R&D dans le complément alimentaire). L'application web est un outil interne à
                            l'entreprise que les différents pôles utilisent (scientifique, règlementaire, etc...)
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: '#2c2c2c', color: 'white', borderRadius: '20px'}}
                        contentArrowStyle={{borderRight: '7px solid  #2c2c2c'}}
                        date="08/2022"
                        dateClassName="date-left"
                        iconStyle={{background: '#2c2c2c', color: 'white'}}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faPizzaSlice}/>}>
                        <h3 className="vertical-timeline-element-title">
                            Réalisation d'un site web
                        </h3>
                        <a className="exp-lien" href="https://www.ojardinsecret.fr" target="_blank" rel="noreferrer">
                            <h4 className="vertical-timeline-element-subtitle">
                                Visible ici
                            </h4>
                        </a>
                        <p>
                            Création et déploiement d'un site web pour le restaurant O'Jardin Secret situé à Suresnes
                            (92). Projet Agile fait sur mesure et adapté aux besoins et demandes du client. ReactJS,
                            EmailJS & Material UI.
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
                        date="07/2022"
                        dateClassName="date-right"
                        iconStyle={{background: '#bff000', color: '#2c2c2c', boxShadow: '0 0 0 4px #2c2c2c'}}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faTools}/>}>
                        <h3 className="vertical-timeline-element-title">
                            Réalisation d'une API
                        </h3>
                        <a className="exp-lien-dark"
                           href="https://admin.maximeturpault.fr"
                           target="_blank"
                           rel="noreferrer">
                            <h4 className="vertical-timeline-element-subtitle">Visible ici</h4>
                        </a>
                        <p>
                            Création et déploiement d'une API pour le Portfolio de Maxime Turpault. ExpressJS & MongoDB.
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
                            Réalisation d'un portfolio
                        </h3>
                        <a className="exp-lien" href="https://www.maximeturpault.fr" target="_blank" rel="noreferrer">
                            <h4 className="vertical-timeline-element-subtitle">
                                Visible ici
                            </h4>
                        </a>
                        <p>
                            Création et déploiement du portfolio de Maxime Turpault. Projet Agile fait sur mesure et
                            adapté aux besoins et demandes du client. ReactJS, Redux & EmailJS.
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
                            Suresnes (92), FR
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
                            Paris (75), FR
                        </h4>
                        <p>
                            Bootcamp pour devenir Chef de projet de développement d'applications Web & Mobile FullStack
                            en JavaScript de 10 semaines où j'ai validé mes compétences avec un Titre RNCP de niveau 6.
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
