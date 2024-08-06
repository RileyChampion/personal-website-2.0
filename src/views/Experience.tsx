import React from "react";
import './styles/experience.scss';
import experienceData from '../config/experience.json'; 
import FadeInSection from '../components/FadeInSection.tsx';

function Experience() {
    return (
        <div id="experience">
            {
            }
            <div id="experience-container">
                <div id="experience-title">
                    <h2>EXPERIENCE</h2>
                </div>
                {
                    experienceData.map((experience, index) => {
                        return (
                            <FadeInSection fadeIn="1.25s" floatUp="1.25s">
                                <div key={"experience-"+ index} className="experience-content-container">
                                    <div className="experience-content-graphic" style={{background: experience.gradient}}>
                                        <h5>{experience.name}</h5>
                                    </div>
                                    <div className="experience-content-text-container">
                                        <div className="experience-content-text-title">
                                            <div className="experience-content-text-title-year">
                                                <h3>{experience.name}</h3>
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
                                            <p><strong>Tech:</strong> {experience.tech.join(", ")}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Experience;