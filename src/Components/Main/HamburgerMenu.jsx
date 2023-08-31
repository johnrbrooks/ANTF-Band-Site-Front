import { useState } from 'react'
import { Link } from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { Spin as Hamburger } from 'hamburger-react';

export default function HamburgerMenu(props) {
    return (
        <>
            <div className={`hamburger-menu ${props.isOpen ? 'active' : 'inactive'}`}>
                <div className="hamburger-nav-container">
                    <Link className='hamburger-nav-item' to="/home">Home</Link>
                    <Link className='hamburger-nav-item' to="/about">About</Link>
                    <Link className='hamburger-nav-item' to="/shows">Shows</Link>
                    <Link className='hamburger-nav-item' to="/songs">Songs</Link>
                    <Link className='hamburger-nav-item' to="/contact">Contact</Link>
                </div>
                <div className="hamburger-socials-container">
                    <a href="https://www.instagram.com/anighttoforgetband/?hl=en" className='hamburger-social-icon'><FontAwesomeIcon icon={faInstagramSquare}/></a>
                    <a href="https://www.facebook.com/ANightToForgetBand" className='hamburger-social-icon'><FontAwesomeIcon icon={faFacebookSquare}/></a>
                    <a href="https://www.youtube.com/@anighttoforget1810" className='hamburger-social-icon'><FontAwesomeIcon icon={faYoutubeSquare}/></a>
                </div>
            </div>
        </>
    )
}