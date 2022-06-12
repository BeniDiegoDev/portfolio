import React from "react";
import "../App.css";

import { motion } from "framer-motion";

export default function Langages({ id }) {
    return (
        <div className="section-lang" id={id}>
            <div className="section-content-lang">
                <h2 style={{ marginBottom: '40px'}}>Langages & Outils</h2>
                <motion.div className="lang">
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="html" src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">HTML</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="css" src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">CSS</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="javascript" src="https://upload.vectorlogo.zone/logos/javascript/images/239ec8a4-163e-4792-83b6-3f6d96911757.svg" className="lang-img" />
                        <h3 className="lang-hover">JavaScript</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="nodejs" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">Node</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="express" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">Express</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="react" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">React</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="redux" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" className="lang-img" />
                        <h3 className="lang-hover">Redux</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="mongodb" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">MongoDB</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="heroku" src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">Heroku</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="github" src="https://www.vectorlogo.zone/logos/github/github-tile.svg" className="lang-img" />
                        <h3 className="lang-hover">GitHub</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="git" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">Git</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="postman" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">Postman</h3>
                    </motion.div>
                    <motion.div
                        className="lang-item"
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                    >
                        <img alt="expo" src="https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg" className="lang-img" />
                        <h3 className="lang-hover">Expo</h3>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
