import React from "react";

import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

export default function BottomBar({ title, subtitle, dark, id }) {
    return (
        <div className="section-bottom">
            <div className="bottom-bar" id={id}>
                <p className="bottoml">Créé par Benjamin D'ONOFRIO</p>
                <p className="bottomm">Copyright © 2022 BD.js</p>
                <div className="bottomr">
                    <a className="lien-svg-bottom" href="https://github.com/BeniDiegoDev" target="_blank" rel="noreferrer"><GithubFilled /></a>
                    <a className="lien-svg-bottom" href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer"><LinkedinFilled style={{ marginLeft: '10px'}} /></a>
                </div>
            </div>
        </div>
    );
}
