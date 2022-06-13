import React, { useState } from "react";

export default function Contact({ id }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="section-contact" id={id}>
            <div className="section-content-contact">
                <h2 style={{ marginBottom: '25px' }}>Contact</h2>
                <p style={{ marginBottom: '5px' }}>Une question? Un projet? Besoin d'une réponse?</p>
                <p style={{ marginBottom: '25px' }}>Contactez moi par <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="mailto:benidiegopro@gmail.com?subject=Contact depuis benit.fr 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐">mail</a> ou sur les <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer">réseaux</a>.</p>
                {/* ou directement par le <span style={{ color: '#bff000' }} onClick={() => setIsOpen(!isOpen)}>formulaire de contact</span></p>
                <button className="form-buttonf" onClick={() => setIsOpen(!isOpen)}>Ouvrir le formulaire de contact</button> */}
                <div className="group-contact-svg">
                    <div style={{ marginTop: "15px" }}>
                        <a className="contact-svg" href="mailto:benidiegopro@gmail.com?subject=Contact depuis benit.fr 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐">
                            <img style={{ height: "70px" }} src="https://res.cloudinary.com/dktfcexev/image/upload/v1655095018/Portfolio/gmail_ylmqcw.png" alt="Gmail" />
                        </a>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <a className="contact-svg" href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer" style={{ marginTop: '10px' }}>
                            <img style={{ height: "70px" }} src="https://res.cloudinary.com/dktfcexev/image/upload/v1655095018/Portfolio/linkedin_s6md2b.png" alt="Linked in" />
                        </a>
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        <a className="contact-svg" href="https://www.malt.fr/profile/benjamindonofrio" target="_blank" rel="noreferrer" style={{ marginTop: '10px' }}>
                            <img style={{ height: "70px" }} src="https://res.cloudinary.com/dktfcexev/image/upload/v1655095018/Portfolio/malt_pd0err.png" alt="Malt" />
                        </a>
                    </div>
                </div>
            </div>
            {isOpen ?
                <div className="overlay-contact" >
                    <form>
                        <div className="form-group">
                            <label className="form-label" >Prénom :</label>
                            <input type="text" className="form-control" name="firstname" placeholder="Benjamin" />
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Nom :</label>
                            <input type="text" className="form-control" name="lastname" placeholder="D'ONOFRIO" />
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Adresse mail :</label>
                            <input type="email" className="form-control" name="email" placeholder="benidiegopro@gmail.com" />
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Votre message :</label>
                            <textarea className="form-text" name="message" rows="3" placeholder="Bonjour, je vous contact..." />
                        </div>
                        <div className="form-but">
                            {/* type="submit" */}
                            <button className="form-buttonv" onClick={() => setIsOpen(!isOpen)}>Envoyer</button>
                            <button className="form-button" onClick={() => setIsOpen(!isOpen)}>Fermer</button>
                        </div>
                    </form>
                </div>
                :
                <></>
            }
        </div>
    );
}
