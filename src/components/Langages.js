import React from "react";
import "../App.css";
import TableauLang from "./TableauLang";

import { motion } from "framer-motion";


export default function Langages(id) {
    return (
        <div className="section-lang" id="section2">
            <div className="section-content-lang">
                <h2 style={{ marginBottom: '40px' }}>Langages & Outils</h2>
                <motion.div className="lang">
                    {TableauLang.map((lang, index) => (
                        <motion.div
                            key={index}
                            className="lang-item"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        type: "spring",
                                    },
                                },
                                hidden: { opacity: 0, y: 100 },
                            }}
                        >
                            <img alt="html" src={lang.src} className="lang-img" />
                            <h3 className="lang-hover">{lang.name}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
