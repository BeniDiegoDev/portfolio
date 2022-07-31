import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(id) {

    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7sh2keb', 'template_oci76wq', form.current, 'qauWl7bpB16UBiQui')
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    setStatus('success');
                },
                (error) => {
                    console.log(error.text);
                    setStatus('error');
                });
    };

    function Success() {
        setIsOpen(!isOpen)
        setStatus('')
    }

    return (
        <div className="section-contact" id="section5">
            <div className="section-content-contact">
                <h2 style={{ marginBottom: '25px' }}>Contact</h2>
                <div className="contact-content">
                    <div className="group-contact">
                        <p style={{ marginBottom: '2px' }}>Une question? Un projet? Besoin d'une réponse?</p>
                        <p style={{ marginBottom: '2px' }}>Contactez moi :</p>
                        <p style={{ marginBottom: '2px' }}>Directement par le <span style={{ color: '#bff000' }} onClick={() => setIsOpen(!isOpen)}>formulaire de contact</span></p>
                        <p style={{ marginBottom: '2px' }}>Par téléphone au <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="tel:+33699757781">06 99 75 77 81</a></p>
                        <p style={{ marginBottom: '2px' }}>Par <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="mailto:benidiegopro@gmail.com?subject=Contact depuis benit.fr 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐">mail</a></p>
                        <p style={{ marginBottom: '2px' }}>Sur <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                        <p>Sur <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="https://www.malt.fr/profile/benjamindonofrio" target="_blank" rel="noreferrer">Malt</a></p>
                    </div>
                    <div className="group-contact-svg">
                        <div className="space-contact">
                            <button className="form-buttonf" onClick={() => setIsOpen(!isOpen)}>Formulaire de contact</button>
                        </div>
                        <div className="space-contact">
                            <a className="contact-svg" href="mailto:benidiegopro@gmail.com?subject=Contact depuis benit.fr 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐">
                                <img style={{ height: "40px" }} src="https://res.cloudinary.com/dktfcexev/image/upload/v1655095018/Portfolio/gmail_ylmqcw.png" alt="Gmail" />
                            </a>
                        </div>
                        <div className="space-contact">
                            <a className="contact-svg" href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer" style={{ marginTop: '10px' }}>
                                <img style={{ height: "40px" }} src="https://res.cloudinary.com/dktfcexev/image/upload/v1655095018/Portfolio/linkedin_s6md2b.png" alt="Linked in" />
                            </a>
                        </div>
                        <div>
                            <a className="contact-svg" href="https://www.malt.fr/profile/benjamindonofrio" target="_blank" rel="noreferrer" style={{ marginTop: '10px' }}>
                                <img style={{ height: "40px" }} src="https://res.cloudinary.com/dktfcexev/image/upload/v1655095018/Portfolio/malt_pd0err.png" alt="Malt" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen ?
                <div className="overlay-contact" >
                    <form className="form-contact" ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <label className="form-label" >Prénom :</label>
                            <input type="text" className="form-control" name="firstname" placeholder="Prénom" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Nom :</label>
                            <input type="text" className="form-control" name="lastname" placeholder="Nom" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Adresse mail :</label>
                            <input type="email" className="form-control" name="email" placeholder="Adresse mail" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Numéro de téléphone :</label>
                            <input type="phone" className="form-control" name="phone" placeholder="Numéro de téléphone" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Objet :</label>
                            <input type="text" className="form-control" name="objet" placeholder="Objet" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Votre message :</label>
                            <textarea className="form-text" name="message" rows="3" placeholder="Message" required />
                        </div>
                        <div className="form-but">
                            <button className="form-buttonv" type="submit">Envoyer</button>
                            <button className="form-button" onClick={() => setIsOpen(!isOpen)}>Fermer</button>
                        </div>
                    </form>
                </div>
                :
                <></>
            }
            {status === 'success' ?
                <div className="overlay-contact-success">
                    <p>Envoyé avec succés !</p>
                    <button className="form-button" onClick={() => Success()}>Fermer</button>
                </div>
                : status === 'error' ?
                    <div className="overlay-contact-success">
                        <p>Echec de l'envoi !</p>
                        <button className="form-button" onClick={() => setStatus('')}>Fermer</button>
                    </div>
                    :
                    <>
                    </>
            }
        </div>
    );
}
