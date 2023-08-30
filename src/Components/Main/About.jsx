import { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function About () {

    const members = [
        {
            name: 'Tyler Schafer',
            role: 'Lead Vocals, Guitar, Air/Chest Drums',
            image: '/images/TylerGoofy.jpg',
            description: `Tyler’s a JMU grad, percussionist, audio engineer, mix engineer, producer, and aspiring
            Kermit the Frog impersonator. He went so hard during Black Parade that he chipped a tooth
            on the mic and he sweats from his knees. It was never a phase.`,
        },
        {
            name: `John Brooks`,
            role: `Lead Guitar, Setlists, Windowsill Whiskey Sours`,
            image: `/images/JohnGoofy.jpg`,
            description: `John’s a JMU grad, audio engineer, mix engineer, producer, hockey player, and learning to
            code like every other millennial dude. He specializes in nailing solos at home and then getting
            flustered on stage when Tyler says his name the measure before.`,
        },
        {
            name: `Jason Eller`,
            role: `Bass, Backing Vocals, IEM Rig`,
            image: `/images/JasonGoofy.jpg`,
            description: `Jason’s a VT grad, a normal 9-5 kind of engineer, and just bought a house (what a sell out).
            He’s been playing bass and nailing the echos on Stacy’s Mom since high school, but he’s still
            got a deer-in-headlights look on stage. Buy him whatever pilsner’s on tap so he can chill a bit.`,
        },
        {
            name: `James Rocket (Adelsberger)`,
            role: `Drums, Band Morale, Blisters`,
            image: `/images/jamesPic.jpeg`,
            description: `James usually spends his time playing drums or guitar with one of his
            273 side projects (only a mild exaggeration). He was the mastermind behind the half-time
            breakdown in The Middle. You’re welcome for the spiciness.`,
        },
    ]

    const refs = Array(4).fill(0).map((_, i) => useRef(null))

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                } else {
                    entry.target.classList.remove('visible')
                }
            })
        }, { threshold: 0.1 })

        refs.forEach(ref => {
            if(ref.current) {
                observer.observe(ref.current)
            }
        })

        return () => {
            refs.forEach(ref => {
                if(ref.current) {
                    observer.unobserve(ref.current)
                }
            })
        }
    }, [])

    return (
        <div>
            <div className="about-page">
                <Nav />
                <div className="about-content-container">
                    <h1 className='page-title'>About</h1>
                    <div className="band-about">
                        <img className='band-promo-pic' src="/images/bandPromoPic.JPG" alt="" />
                        <p className='about-blurb'>
                        A Night To Forget plays all your favorite angsty songs from grade school,
                        high school, or college (depending on the extent to which you're an elder emo)
                        and keeps the Pop Goes Punk albums alive. We played our first gig in September
                        2021 and we ain't lookin' back. Book us for a bar show, a private event, an emo
                        wedding, wherever you want to relive your glory days with us. We owe you a sticker
                        if you had an A Day To Remember CD in your car and get the reference. ;-)
                        </p>
                    </div>
                    {members.map((member, index) => (
                        <div className="about-members-grid">
                            <div className="member-section" ref={refs[index]} key={index}>
                                <img src={member.image} alt="" className="about-member-image" />
                                <div className="member-content">
                                    <h2 className="member-name">{member.name}</h2>
                                    <h3 className="member-role">{member.role}</h3>
                                    <hr />
                                    <p className="member-about">{member.description}</p>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
                <Footer />
            </div>
        </div>
    )
}