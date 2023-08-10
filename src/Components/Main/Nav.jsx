import { Link } from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";

export default function Nav () {
    return (
        <div>
            <nav>
                <div className="logo-container">
                    <Link to="/home"><img src="src/assets/images/ANTF_logo_white text w purple (2).png" className='nav-logo' alt="ANTF Logo" /></Link>
                </div>
                <div className="nav-container">
                    <Link className='nav-item' to="/home">Home</Link>
                    <Link className='nav-item' to="/about">About</Link>
                    <Link className='nav-item' to="/shows">Shows</Link>
                    <Link className='nav-item' to="/songs">Songs</Link>
                    <Link className='nav-item' to="/contact">Contact</Link>
                </div>
                <div className="socials-container">
                    <a href="https://www.instagram.com/anighttoforgetband/?hl=en" className='social-icon'><FontAwesomeIcon icon={faInstagramSquare}/></a>
                    <a href="https://www.facebook.com/ANightToForgetBand" className='social-icon'><FontAwesomeIcon icon={faFacebookSquare}/></a>
                    <a href="https://www.youtube.com/@anighttoforget1810" className='social-icon'><FontAwesomeIcon icon={faYoutubeSquare}/></a>
                </div>
            </nav>
        </div>
    )
}