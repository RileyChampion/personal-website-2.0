import React from "react";
import './styles/landing.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { useEffect } from "react";

let intervalId : any = null;

function LandingPage() {
    const [selectedInfo, setSelectedInfo] = useState(0);

    function settingSelectedInfo(index : number) : void {
        console.log(index);
        if(index > 2){
            setSelectedInfo(0);
        }
        else {
            setSelectedInfo(index);
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
                            <li><a href="src/resources/Riley_Champion_Resume.pdf" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon  icon={faFileLines} className="landing-icon" /></a></li>
                            <li><a href="https://github.com/RileyChampion" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faSquareGithub} className="landing-icon" /></a></li>
                            <li><a href="https://www.linkedin.com/in/rileychampion/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} className="landing-icon" /></a></li>
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