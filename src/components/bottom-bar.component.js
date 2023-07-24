import React from "react";
import {GithubFilled, GitlabFilled, LinkedinFilled} from '@ant-design/icons';

export default function BottomBarComponent(id) {
    return (
        <div className="section-bottom">
            <div className="bottom-bar" id={id}>
                <p className="bottom-l">Copyright © 2023 BD.js</p>
                <p className="bottom-m">...</p>
                <div className="bottom-r">
                    <a className="lien-svg-bottom"
                       href="https://github.com/BeniDiegoDev"
                       target="_blank"
                       rel="noreferrer">
                        <GithubFilled/>
                    </a>
                    <a className="lien-svg-bottom"
                       href="https://gitlab.com/BeniDiegoJS"
                       target="_blank"
                       rel="noreferrer">
                        <GitlabFilled style={{marginLeft: '10px'}}/>
                    </a>
                    <a className="lien-svg-bottom"
                       href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/"
                       target="_blank"
                       rel="noreferrer">
                        <LinkedinFilled style={{marginLeft: '10px'}}/>
                    </a>
                </div>
            </div>
        </div>
    );
}
