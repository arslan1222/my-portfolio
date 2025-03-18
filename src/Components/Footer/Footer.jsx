import React from "react";
import './Footer.css';
import footerLogo from '../../assets/footerLogo.png';
import manLogo from '../../assets/man_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <a href="#home"><img className="footer-logo" src={footerLogo} alt="Footer Logo" /></a>
                    <div className="footer-socials">
                        <a
                            href="https://wa.me/qr/HTY33S7CLCF6D1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FontAwesomeIcon className="social-bcg" icon={faWhatsapp} size="2x" />
                        </a>
                        <a
                            href="https://www.facebook.com/share/164Td4zLXY/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FontAwesomeIcon className="social-bcg" icon={faFacebook} size="2x" />
                        </a>
                        <a
                            href="https://www.youtube.com/@learnerspointofficiall"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon className="social-bcg" icon={faYoutube} size="2x" />
                        </a>
                    </div>
                    <p>Highly skilled and creative Graphic Designer with 5+ years of experience</p>

                </div>

                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={manLogo} alt="Email Icon" />
                        <input type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">&copy; 2024 Ahsan Riaz. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <a href="#contact" className="footer-connect">Connect With Me</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;