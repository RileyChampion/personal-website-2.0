import React, {useEffect, useState, useRef} from "react"
import './navbar.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

interface NavbarProps {
    toggleModal: (state : boolean) => void
};

function Navbar({toggleModal} : NavbarProps) {
    const [isAtTop, setIsAtTop] = useState(true);
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const navMenuOpenRef = useRef(navMenuOpen);

    const handleScroll = () => {
        if(window.scrollY <= 50) {
            if(navMenuOpenRef.current) {
                setIsAtTop(false);
            } else {
                setIsAtTop(true);
            }
        } else {
            if(!navMenuOpenRef.current) {
                setIsAtTop(false);
            }
        }
    };

    const toggleMobileNavMenu = ()  => {
        if(window.scrollY <= 50 && !navMenuOpen) {
            setIsAtTop(false);
        } else if (window.scrollY <= 50 && navMenuOpen) {
            setIsAtTop(true);
        } else if (window.scrollY > 50 && navMenuOpen) {
            setIsAtTop(false)
        }
        setNavMenuOpen(!navMenuOpen);
        navMenuOpenRef.current = !navMenuOpen;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, navMenuOpen);
        return () => {
            window.removeEventListener('scroll', handleScroll, navMenuOpen);
        };
    }, []);

    return (
        <>
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
                        <div onClick={() => toggleModal(true)} className="navbar-link">Let's Connect</div>
                    </div>
                    <div id="navbar-links-mobile-container">
                        <FontAwesomeIcon onClick={() => toggleMobileNavMenu()} className="navbar-menu-icon" icon={faBars}/>
                    </div>
                </div>
            </nav>
            <div id="navbar-links-menu-items" style={navMenuOpen ? {display: "block"} : {display: "none"}}>
                <a href="#about-me"><div className="navbar-link">About Me</div></a>
                <a href="#experience"><div className="navbar-link">Experience</div></a>
                <a href="#projects"><div className="navbar-link">Projects</div></a>
                <div onClick={() => toggleModal(true)} className="navbar-link">Contacts</div>
            </div>
        </>
    )
}

export default Navbar;