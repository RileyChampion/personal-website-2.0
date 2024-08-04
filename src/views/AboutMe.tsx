import React from "react";
import FadeInSection from "../components/FadeInSection.tsx";
import './styles/about-me.scss'

function AboutMe() {
    return(
        <section id="about-me">
            <div id='about-me-container'>
                <div id='about-me-title'>
                    <h2>ABOUT ME</h2>
                </div>
                <div id="about-me-content">
                    <FadeInSection fadeIn="1s" floatUp="1s" customStyle={{zIndex: 10}}>
                        <div className="about-me-content-image-box">
                            <img className="about-me-content-image" loading="lazy" src={process.env.PUBLIC_URL + "/riley.jpg"} style={{height: '600px'}} alt="Riley Champion" />
                        </div>
                    </FadeInSection>
                    <FadeInSection fadeIn="1.25s" floatUp="1.25s">
                        <div className="about-me-content-info-box">
                            <div className="about-me-content-info">
                                <div className="about-me-content-info-title">
                                    <h4>Hey! I'm Riley 👋🏼</h4>
                                </div>
                                <div className="about-me-content-info-text">
                                    <p>Esse dolor eu aliqua consectetur esse aliquip. Et officia ut sit sint ullamco reprehenderit irure amet quis. Nulla labore magna ea aute officia irure aliqua proident anim ipsum. Dolore est nulla aute cupidatat. Incididunt amet sit do adipisicing. Culpa adipisicing quis eiusmod est anim incididunt eiusmod cupidatat amet magna.</p>
                                    <p>Esse dolor eu aliqua consectetur esse aliquip. Et officia ut sit sint ullamco reprehenderit irure amet quis. Nulla labore magna ea aute officia irure aliqua proident anim ipsum. Dolore est nulla aute cupidatat. Incididunt amet sit do adipisicing. Culpa adipisicing quis eiusmod est anim incididunt eiusmod cupidatat amet magna.</p>
                                </div>
                                <div className="about-me-content-info-buttons-container">
                                    <button 
                                        className="about-me-content-info-button"
                                        onClick={()=> window.open(process.env.PUBLIC_URL + "/Riley_Champion_Resume.pdf", "_blank")}
                                    >
                                        Resume
                                    </button>
                                    <button 
                                        className="about-me-content-info-button"
                                        onClick={()=> window.open("https://www.linkedin.com/in/rileychampion/", "_blank")}
                                    >
                                        LinkedIn
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;

/* Rectangle 53 */
