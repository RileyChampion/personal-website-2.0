import React from "react";
import FadeInSection from "../components/FadeInSection.tsx";
import './styles/about-me.scss'
import RileyPicture from '../images/riley-md.jpg';

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
                            <img src={RileyPicture} 
                                className="about-me-content-image"
                                alt="Riley Champion"
                            />
                        </div>
                    </FadeInSection>
                    <FadeInSection fadeIn="1.25s" floatUp="1.25s">
                        <div className="about-me-content-info-box">
                            <div className="about-me-content-info">
                                <div className="about-me-content-info-title">
                                    <h4>Hey! I'm Riley 👋🏼</h4>
                                </div>
                                <div className="about-me-content-info-text">
                                    <p>I am a passionate software engineer, full stack developer, and D&D enthusiast with a love for creating seamless digital experiences and a passion for mental health awareness. After graduating from UC Irvine, I’ve had the privilege of working with DevOps teams at First Republic and contributing to JPMorganChase’s developer experience dashboards and deployment evidence tracking APIs. My prior experience also includes building large-scale web applications and commencement dashboards used by faculty and most importantly students to register for commencement ceremonies. My technical toolkit includes ReactJS, VueJS, FastAPI, Spring Boot, and a growing proficiency in Angular, which I’m currently mastering.</p>
                                    <p>In my free time, I’ve enjoyed tapping into my creative side with art and design classes; as well as, keeping up to date with the latest trends in user interface and user experience design. My love for creating creative and interactive user interfaces has also allowed me to explore my interests in mobile development. Additionally, I'm a huge board game and video game nerd!</p>
                                    <p>I’m always eager to connect with like-minded professionals or anyone interested in technology and mental health. Feel free to reach out—I’d love to hear from you!</p>
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
