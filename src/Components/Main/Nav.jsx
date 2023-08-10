import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div>
            <nav>
                <Link to="/home"><img src="src/assets/images/ANTF_logo_white text w purple (2).png" className='nav-logo' alt="ANTF Logo" /></Link>
                <div className="nav-container">
                    <Link className='nav-item' to="/home">Home</Link>
                    <Link className='nav-item' to="/about">About</Link>
                    <Link className='nav-item' to="/shows">Shows</Link>
                    <Link className='nav-item' to="/songs">Songs</Link>
                </div>
            </nav>
        </div>
    )
}