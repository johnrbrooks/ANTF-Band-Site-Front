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
                    <div className="about-members-grid">
                        <div className="member-section">
                            <img src="src/assets/images/TylerGoofy.jpg" alt="" className="about-member-image" />
                            <div className="member-content">
                                <h2 className="member-name">Tyler Schafer</h2>
                                <h3 className="member-role">Lead Vocals, Guitar, Air/Chest Drums</h3>
                                <hr />
                                <p className="member-about">
                                Tyler’s a JMU grad, percussionist, audio engineer, mix engineer, producer, and aspiring
                                Kermit the Frog impersonator. He went so hard during Black Parade that he chipped a tooth
                                on the mic and he sweats from his knees. It was never a phase.
                                </p>
                            </div>
                        </div>
                        <div className="member-section">
                            <img src="src/assets/images/JohnGoofy.jpg" alt="" className="about-member-image" />
                            <div className="member-content">
                                <h2 className="member-name">John Brooks</h2>
                                <h3 className="member-role">Lead Guitar, Setlists, Windowsill Whiskey Sours</h3>
                                <hr />
                                <p className="member-about">
                                John’s a JMU grad, audio engineer, mix engineer, producer, hockey player, and learning to
                                code like every other millennial dude. He specializes in nailing solos at home and then getting
                                flustered on stage when Tyler says his name the measure before.
                                </p>
                            </div>
                        </div>
                        <div className="member-section">
                            <img src="src/assets/images/JasonGoofy.jpg" alt="" className="about-member-image" />
                            <div className="member-content">
                                <h2 className="member-name">Jason Eller</h2>
                                <h3 className="member-role">Bass, Backing Vocals, IEM Rig</h3>
                                <hr />
                                <p className="member-about">
                                Jason’s a VT grad, a normal 9-5 kind of engineer, and just bought a house (what a sell out).
                                He’s been playing bass and nailing the echos on Stacy’s Mom since high school, but he’s still
                                got a deer-in-headlights look on stage. Buy him whatever pilsner’s on tap so he can chill a bit.
                                </p>
                            </div>
                        </div>
                        <div className="member-section">
                            <img src="src/assets/images/jamesPic.jpeg" alt="" className="about-member-image" />
                            <div className="member-content">
                                <h2 className="member-name">James Rocket (Adelsberger)</h2>
                                <h3 className="member-role">Drums, Band Morale, Blisters</h3>
                                <hr />
                                <p className="member-about">
                                James usually spends his time playing drums or guitar with one of his
                                273 side projects (only a mild exaggeration). He was the mastermind behind the half-time
                                breakdown in The Middle. You’re welcome for the spiciness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}