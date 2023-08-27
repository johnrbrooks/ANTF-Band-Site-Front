import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import NextShow from './NextShow'
import LatestClip from './LatestClip'
import Contact from '../Contact'

export default function Home () {
    return (
        <div>
            <div className="home-page">
                <Nav />
                <div className="main">
                    <Link to='/about'>
                        <img src="src/assets/images/ANTF_logo_white text w purple (2).png" className='main-logo' alt="" />
                    </Link>
                    <h2 className="tagline">pop punk cover band from NOVA playing your favorite songs from those angsty emo years</h2>
                    <div className="members-grid">
                        <Link to='/about'>
                            <img className='member-image' src="https://github.com/johnrbrooks/ANTF-Band-Site-Front/blob/main/public/images/tylerPic.jpeg?raw=true" alt="" />
                        </Link>
                        <Link to='/about'>
                            <img className='member-image' src="https://github.com/johnrbrooks/ANTF-Band-Site-Front/blob/main/public/images/johnPic.jpeg?raw=true" alt="" />
                        </Link>
                        <Link to='/about'>
                            <img className='member-image' src="https://github.com/johnrbrooks/ANTF-Band-Site-Front/blob/main/public/images/jasonPic.jpeg?raw=true" alt="" />
                        </Link>
                        <Link to='/about'>
                            <img className='member-image' src="https://github.com/johnrbrooks/ANTF-Band-Site-Front/blob/main/public/images/jamesPic.jpeg?raw=true" alt="" />
                        </Link>
                    </div>
                    {/* <div className="quick-view-container">
                        <LatestClip />
                        <NextShow />
                    </div> */}
                </div>
                <Footer />
            </div>
        </div>
    )
}
