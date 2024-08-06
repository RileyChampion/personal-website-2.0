import React from "react";
import './contact-modal.scss';
import RileyPicture from '../../images/riley.jpg';

interface ContactModalProps {
    toggleModal: (state : boolean) => void
};

function ContactModal({toggleModal} : ContactModalProps) {
    
    return(
        <div onClick={(e) => toggleModal(false)} id="contact-modal-background" style={{animation: "fade-in 0.5s ease-in-out"}}>
            <div id="contact-modal-card" onClick={(e) => e.stopPropagation()} style={{animation: "fade-in 0.5s ease-in-out, float-up 1s ease-in-out"}}>
                <div id="contact-modal-content">
                    <div className="contact-modal-image-container">
                        <div className="contact-modal-image">
                            <img
                                src={RileyPicture}
                                height="200px"
                            />
                        </div>
                    <h2>Riley Champion</h2>
                    <h4>Let's Stay Connected!</h4>
                    </div>
                    <div className="contact-modal-links">
                        <button 
                            className="contact-modal-link"
                            onClick={()=> window.open("mailto:rchamp2u@gmail.com", "_blank")}
                        >
                            EMAIL
                        </button>
                        <button 
                            className="contact-modal-link"
                            onClick={()=> window.open(process.env.PUBLIC_URL + "/Riley_Champion_Resume.pdf", "_blank")}
                        >
                            RESUME
                        </button>
                        <button 
                            className="contact-modal-link"
                            onClick={()=> window.open("https://www.linkedin.com/in/rileychampion/", "_blank")}
                        >
                            LINKEDIN
                        </button>
                        <button 
                            className="contact-modal-link"
                            onClick={()=> window.open("https://www.linkedin.com/in/rileychampion/", "_blank")}
                        >
                            GITHUB
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactModal;