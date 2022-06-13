import React from "react";

export default function Contact({ id }) {


    return (
        <div className="section-contact" id={id}>
            <div className="section-content-contact">
                <h2 style={{ marginBottom: '25px' }}>Contact</h2>
                <div className="contact-content">
                    <div className="group-contact">
                        <p style={{ marginBottom: '2px' }}>Une question? Un projet? Besoin d'une réponse?</p>
                        <p style={{ marginBottom: '2px' }}>Contactez moi :</p>
                        <p style={{ marginBottom: '2px' }}>Par téléphone au <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="tel:+33699757781">06 99 75 77 81</a></p>
                        <p style={{ marginBottom: '2px' }}>Par <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="mailto:benidiegopro@gmail.com?subject=Contact depuis benit.fr 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐">mail</a></p>
                        <p style={{ marginBottom: '2px' }}>Sur <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                        <p>Sur <a style={{ color: '#bff000', textDecorationLine: 'none' }} href="https://www.malt.fr/profile/benjamindonofrio" target="_blank" rel="noreferrer">Malt</a></p>
                        {/* ou directement par le <span style={{ color: '#bff000' }} onClick={() => setIsOpen(!isOpen)}>formulaire de contact</span></p>
                <button className="form-buttonf" onClick={() => setIsOpen(!isOpen)}>Ouvrir le formulaire de contact</button> */}
                    </div>
                    <div className="group-contact-svg">
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
        </div>
            // {isOpen ?
            //     <div className="overlay-contact" >
            //         <form>
            //             <div className="form-group">
            //                 <label className="form-label" >Prénom :</label>
            //                 <input type="text" className="form-control" name="firstname" placeholder="Benjamin" />
            //             </div>
            //             <div className="form-group">
            //                 <label className="form-label" >Nom :</label>
            //                 <input type="text" className="form-control" name="lastname" placeholder="D'ONOFRIO" />
            //             </div>
            //             <div className="form-group">
            //                 <label className="form-label" >Adresse mail :</label>
            //                 <input type="email" className="form-control" name="email" placeholder="benidiegopro@gmail.com" />
            //             </div>
            //             <div className="form-group">
            //                 <label className="form-label" >Votre message :</label>
            //                 <textarea className="form-text" name="message" rows="3" placeholder="Bonjour, je vous contact..." />
            //             </div>
            //             <div className="form-but">
            //                 {/* type="submit" */}
            //                 <button className="form-buttonv" onClick={() => setIsOpen(!isOpen)}>Envoyer</button>
            //                 <button className="form-button" onClick={() => setIsOpen(!isOpen)}>Fermer</button>
            //             </div>
            //         </form>
            //     </div>
            //     :
            //     <></>
            // }
    );
}
