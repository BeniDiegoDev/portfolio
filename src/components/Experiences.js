import React from "react";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faPaperPlane, faSeedling } from '@fortawesome/free-solid-svg-icons'

export default function Experiences({ id }) {
    return (
        <div className="section-exp" id={id}>
            <div className="section-content-exp">
                <h2 style={{ marginBottom: '25px', color: '#2c2c2c' }}>Experiences</h2>
                <VerticalTimeline
                    lineColor={'#2c2c2c'}
                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#bff000', color: '#2c2c2c', borderRadius: '20px', borderBottomWidth: '0' }}
                        contentArrowStyle={{ borderRight: '7px solid  #bff000' }}
                        date="06/2022"
                        dateClassName="date-right"
                        iconStyle={{ background: '#bff000', color: '#2c2c2c', boxShadow: '0 0 0 4px #2c2c2c' }}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faSeedling} />}
                    >
                        <h3 className="vertical-timeline-element-title">BeniDiego.js</h3>
                        <h4 className="vertical-timeline-element-subtitle">Suresnes, FR</h4>
                        <p>
                            Création de BeniDiego.js, ma société, qui vous propose des services de développement web.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#2c2c2c', color: 'white', borderRadius: '20px' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2c2c2c' }}
                        date="03/2022"
                        dateClassName="date-left"
                        iconStyle={{ background: '#2c2c2c', color: 'white' }}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faPaperPlane} />}
                    >
                        <h3 className="vertical-timeline-element-title">La Capsule</h3>
                        <h4 className="vertical-timeline-element-subtitle">Paris, FR</h4>
                        <p>
                            Bootcamp Développeur d'application Web & Mobile FullStack JavaScript de 10 semaines.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: '#c2c2c2', color: '#2c2c2c', boxShadow: '0 0 0 4px #2c2c2c' }}
                        icon={<FontAwesomeIcon className="icon-timeline-element" icon={faRedo} />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    );
}
