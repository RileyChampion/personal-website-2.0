import React from "react";
import './styles/experience.scss';
import experienceData from '../config/experience.json'; 
import FadeInSection from '../components/FadeInSection.tsx';
import Pill from '../components/Pill/Pill.tsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

function Experience() {
    return (
        <section id="experience">
            <div id="experience-container">
                <div id="experience-title">
                    <h2>EXPERIENCE</h2>
                </div>
                {
                    experienceData.map((experience, index) => {
                        return (
                            <FadeInSection fadeIn="1.25s" floatUp="1.25s">
                                <div key={"experience-"+ index} className="experience-content-container">
                                    <a href={experience.website} target="_blank">
                                        <div className="experience-content-graphic" style={{background: experience.gradient}}>
                                            <h5>{experience.name}</h5>
                                        </div>
                                    </a>
                                    <div className="experience-content-text-container">
                                        <div className="experience-content-text-title">
                                            <div className="experience-content-text-title-year">
                                                <a href={experience.website}><h3>{experience.name}<FontAwesomeIcon className="experience-link-icon" icon={faAnglesRight} /></h3></a>
                                                <h5>{experience.start} - {experience.end}</h5>
                                            </div>
                                            <h4>{experience.title}</h4>
                                        </div>
                                        <div className="experience-content-text-summary">
                                            {experience.experience.map(experienceLine => {
                                                return (
                                                    <p>{experienceLine}</p>
                                                );
                                            })}
                                        </div>
                                        <div className="experience-content-text-tech-list">
                                            {experience.tech.map(tech => {
                                                return (<Pill text={tech} />)
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Experience;