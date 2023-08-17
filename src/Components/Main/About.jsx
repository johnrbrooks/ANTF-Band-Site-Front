import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function About () {
    return (
        <div>
            <div className="about-page">
                <Nav />
                <div className="about-content-container">
                    <h1 className='page-title'>About</h1>
                    <div className="band-about">
                        <img className='band-promo-pic' src="src/assets/images/bandPromoPic.JPG" alt="" />
                        <p className='about-blurb'>
                        A Night To Forget plays all your favorite angsty songs from grade school,
                        high school, or college (depending on the extent to which you're an elder emo)
                        and keeps the Pop Goes Punk albums alive. We played our first gig in September
                        2021 and we ain't lookin' back. Book us for a bar show, a private event, an emo
                        wedding, wherever you want to relive your glory days with us. We owe you a sticker
                        if you had an A Day To Remember CD in your car and get the reference. ;-)
                        </p>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}