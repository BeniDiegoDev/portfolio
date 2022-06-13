import React, { useState } from "react";

import { LinkedinFilled, MailFilled } from '@ant-design/icons';

export default function Contact({ id }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="section-contact" id={id}>
            <div className="section-content-contact">
                <h2 style={{ marginBottom: '25px' }}>Contact</h2>
                <p style={{ marginBottom: '5px' }}>Une question? Un projet? Besoin d'une réponse?</p>
                <p style={{ marginBottom: '25px' }}>Contactez moi sur les <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer">réseaux</a>, par <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="mailto:benidiegopro@gmail.com?subject=Contact depuis benit.fr 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐">mail</a> ou directement par le <span style={{ color: '#bff000' }} onClick={() => setIsOpen(!isOpen)}>formulaire de contact</span></p>
                <button className="form-buttonf" onClick={() => setIsOpen(!isOpen)}>Ouvrir le formulaire de contact</button>
                <div style={{ marginTop: "25px" }} className="group-svg">
                    <a className="contact-svg" href="mailto:benidiegopro@gmail.com?subject=Contact depuis benit.fr 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐"><MailFilled /></a>
                    <a className="contact-svg" href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer"><LinkedinFilled style={{ marginLeft: '10px' }} /></a>
                </div>
            </div>
            {isOpen ?
                <div className="overlay-contact" >
                    <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form-group">
                            <label className="form-label" >Prénom :</label>
                            <input type="text" className="form-control" name="firstname" placeholder="Benjamin"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Nom :</label>
                            <input type="text" className="form-control" name="lastname" placeholder="D'ONOFRIO"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Adresse mail :</label>
                            <input type="email" className="form-control" name="email" placeholder="benidiegopro@gmail.com"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Votre message :</label>
                            <textarea className="form-text" name="message" rows="3" placeholder="Bonjour, je vous contact..."/>
                        </div>
                        <div className="form-but">
                            <button className="form-buttonv" type="submit">Envoyer</button>
                            <button className="form-button" type="toclose" onClick={() => setIsOpen(!isOpen)}>Fermer</button>
                        </div>
                    </form>
                </div>
                :
                <></>
            }
        </div>
    );
}
