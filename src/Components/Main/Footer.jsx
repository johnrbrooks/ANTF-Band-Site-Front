import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer () {
    return (
        <div>
            <footer>
                <div className="footer-container">
                    <Link to='/contact' className="contact-button">Contact Us</Link>
                    <div className="footer-right-container">
                        <div className="footer-socials-container">
                            <a href="https://www.instagram.com/anighttoforgetband/?hl=en" className='social-icon'><FontAwesomeIcon icon={faInstagramSquare}/></a>
                            <a href="https://www.facebook.com/ANightToForgetBand" className='social-icon'><FontAwesomeIcon icon={faFacebookSquare}/></a>
                            <a href="https://www.youtube.com/@anighttoforget1810" className='social-icon'><FontAwesomeIcon icon={faYoutubeSquare}/></a>
                        </div>
                        <a href="https://github.com/johnrbrooks" className="credits">Designed and built by John Brooks</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}