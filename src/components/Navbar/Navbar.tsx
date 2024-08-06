import React, {useEffect, useState} from "react"
import './navbar.scss';

interface NavbarProps {
    toggleModal: (state : boolean) => void
};

function Navbar({toggleModal} : NavbarProps) {
    const [isAtTop, setIsAtTop] = useState(true);

    const handleScroll = () => {
        if(window.scrollY <= 50) {
            setIsAtTop(true);
        } else {
            setIsAtTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id="navbar" className={isAtTop ? "nav-background-hidden" : "nav-background-shown"}>
            <div id="navbar-container">
                <div id="navbar-logo-container">
                    <a href="#landing">
                        <img
                            src={process.env.PUBLIC_URL + '/riley.svg'}
                            width="35"
                            height="35"
                            alt="Riley Champion logo"
                        />
                    </a>
                </div>
                <div id="navbar-links-container">
                    <div className="navbar-link"><a href="#about-me">About Me</a></div>
                    <div className="navbar-link"><a href="#experience">Experience</a></div>
                    <div className="navbar-link"><a href="#projects">Projects</a></div>
                    <div onClick={() => toggleModal(true)} className="navbar-link">Contacts</div>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;