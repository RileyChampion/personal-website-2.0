import React from "react";
import './styles/about-me.scss'



function AboutMe() {
    <section id="about-me">
        <div id='about-me-container'>
            <div className='about-me-title'>
                <h2>ABOUT ME</h2>
            </div>
            <div id="about-me-content">
                <div className="about-me-content-image-box">
                    <img className="about-me-content-image" />
                </div>
                <div className="about-me-content-info-box">
                    <div className="about-me-content-info">
                        <h4>Hey! I'm Riley 👋🏼</h4>
                        <p>Lorem ipsum</p>
                        <div className="about-me-content-info-buttons-container">
                            <button className="about-me-content-info-button">Resume</button>
                            <button className="about-me-content-info-button">LinkedIn</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default AboutMe;