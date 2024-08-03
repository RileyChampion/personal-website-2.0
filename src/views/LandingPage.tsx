import React from "react";
import './styles/landing.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines, faAngleDoubleDown, faDiceD20, faCode, faObjectGroup} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect';

let intervalId : any = null;

function LandingPage() {
    const [selectedInfo, setSelectedInfo] = useState(0);

    const settingSelectedInfo = (index : number) => {
        console.log(index);
        if(index > 2){
            setSelectedInfo(0);
        }
        else {
            setSelectedInfo(index);
        }
    }

    const jumpToReleventDiv = (id) => {
        const releventDiv = document.getElementById(id);
        console.log(releventDiv)
        if (releventDiv) {
            releventDiv.scrollIntoView({behavior: "smooth"});
        }
      }

    useEffect(() => {
        intervalId = setInterval(() => {
            console.log(`Current Index: ${selectedInfo}`);
            settingSelectedInfo(selectedInfo + 1);
        }, 5000);
        return () => {
            clearInterval(intervalId);
        }
    }, [selectedInfo]);

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
                            <li className="landing-info-text" 
                            style={selectedInfo === 0 ? {color : '#fff', transition: '0.3s'} : {}}
                            onClick={()=> {
                                clearInterval(intervalId)
                                setSelectedInfo(0)
                            }}
                            >
                                Software Engineer
                            </li>
                            <li>|</li>
                            <li className="landing-info-text"
                            style={selectedInfo === 1 ? {color : '#fff', transition: '0.3s'} : {}}
                            onClick={()=> {
                                clearInterval(intervalId)
                                setSelectedInfo(1)
                            }}
                            >
                                Front End Developer
                            </li>
                            <li>|</li>
                            <li className="landing-info-text"
                            style={selectedInfo === 2 ? {color : '#fff', transition: '0.3s'} : {}}
                            onClick={()=> {
                                clearInterval(intervalId)
                                setSelectedInfo(2)
                            }}
                            >
                                Part Time D&D Nerd
                            </li>
                        </ul>
                    </div>
                    <div className="landing-icons">
                        <ul>
                            <li><a href={process.env.PUBLIC_URL + "/Riley_Champion_Resume.pdf"} target="_blank" rel='noopener noreferrer'><FontAwesomeIcon  icon={faFileLines} className="landing-icon" /></a></li>
                            <li><a href="https://github.com/RileyChampion" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faSquareGithub} className="landing-icon" /></a></li>
                            <li><a href="https://www.linkedin.com/in/rileychampion/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} className="landing-icon" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="landing-image-container">
                    <div className={`landing-image ${selectedInfo === 0 ? 'image-visible' : 'image-invisible'}`}><FontAwesomeIcon icon={faCode} /></div>
                    <div className={`landing-image ${selectedInfo === 1 ? 'image-visible' : 'image-invisible'}`}><FontAwesomeIcon icon={faObjectGroup} /></div>
                    <div className={`landing-image ${selectedInfo === 2 ? 'image-visible' : 'image-invisible'}`}><FontAwesomeIcon icon={faDiceD20} /></div>
                </div>
            </div>
            <div id="landing-container-tablet">
                    <div className="landing-name-first-mobile">
                        <h1>Riley</h1>
                    </div>
                    <div className="landing-name-last-mobile">
                        <h2>Champion</h2>
                    </div>
                    <Typewriter options={{
                            strings: ['Software Engineer', 'Front End Developer', 'Part-Time Dnd Nerd'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <div className="landing-info-buttons-container">
                        <a className="landing-info-button"
                            href={process.env.PUBLIC_URL + "/Riley_Champion_Resume.pdf"}
                            target="_blank" rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faFileLines} className="landing-info-button-icon" />
                            <div className="landing-info-button-text">
                                <h4>Resume</h4>
                            </div>
                        </a>
                        <a className="landing-info-button"
                            href="https://github.com/RileyChampion"
                            target="_blank" rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faSquareGithub} className="landing-info-button-icon" />
                            <div className="landing-info-button-text">
                                <h4>GitHub</h4>
                            </div>
                        </a>
                        <a className="landing-info-button"
                            href="https://www.linkedin.com/in/rileychampion/"
                            target="_blank" rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} className="landing-info-button-icon" />
                            <div className="landing-info-button-text">
                                <h4>LinkedIn</h4>
                            </div>
                        </a>
                    </div>
            </div>
            <div className="landing-continue-icon">
                <div>
                    <FontAwesomeIcon onClick={() => jumpToReleventDiv("about-me")} icon={faAngleDoubleDown}/>
                </div>
            </div>
            <div className="ray-one"></div>
            <div className="ray-two"></div>
            <div className="ray-three"></div>
        </section>
    );
}

export default LandingPage;