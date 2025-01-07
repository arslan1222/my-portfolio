import React from "react";
import './Footer.css';
import footerLogo from '../../assets/footerLogo.png';
import manLogo from '../../assets/man_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <a href="#home"><img className="footer-logo" src={footerLogo} alt="Footer Logo" /></a>
                    <div className="footer-socials">
                        <a
                            href="https://wa.me/923217077229"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FontAwesomeIcon className="social-bcg" icon={faWhatsapp} size="2x" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/arslan-haider-a0b297257/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon className="social-bcg" icon={faLinkedin} size="2x" />
                        </a>
                        <a
                            href="https://github.com/arslan1222"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon className="social-bcg" icon={faGithub} size="2x" />
                        </a>
                        <a
                            href="https://web.facebook.com/profile.php?id=100066694849448"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FontAwesomeIcon className="social-bcg" icon={faFacebook} size="2x" />
                        </a>
                    </div>
                    <p>I'm a Full Stack Web Developer from Sialkot, Punjab with 2 years of experience.</p>

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
                <p className="footer-bottom-left">&copy; 2024 Arslan Haider. All rights reserved.</p>
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
