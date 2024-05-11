import React from "react";
import './styles/landing.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

function LandingPage() {
    return (
        <section id="landing">
            <div id='landing-container'>
                <div className="landing-title">
                    <div className="landing-name">
                        <div className="landing-name-first">
                            <h1>Riley</h1>
                        </div>
                        <div className="landing-name-last">
                            <h2>Champion</h2>
                        </div>
                    </div>
                    <div className="landing-info">
                        <ul>
                            <li>Software Engineer</li>
                            <li>|</li>
                            <li>Front End Developer</li>
                            <li>|</li>
                            <li>Part Time D&D Nerd</li>
                        </ul>
                    </div>
                    <div className="landing-icons">
                        <ul>
                            <li><a href="src/resources/Riley_Champion_Resume.pdf" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon  icon={faFileLines} /></a></li>
                            <li><a href="https://github.com/RileyChampion" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faSquareGithub} /></a></li>
                            <li><a href="https://www.linkedin.com/in/rileychampion/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="landing-image-container">
                    <div className="landing-image"></div>
                </div>
            </div>
            <div className="landing-continue-icon">
                <FontAwesomeIcon icon={faAngleDoubleDown}/>
            </div>
            <div className="ray-one"></div>
            <div className="ray-two"></div>
            <div className="ray-three"></div>
        </section>
    );
}

export default LandingPage;