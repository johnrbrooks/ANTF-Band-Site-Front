import { useState, useEffect, useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import NextShow from './NextShow'
import LatestClip from './LatestClip'
import Contact from '../Contact'

export default function Home () {

    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                } else {
                    entry.target.classList.remove('visible')
                }
            }, { threshold: 0.1 })

            if(elementRef.current) {
                observer.observe(elementRef.current)
            }

            return () => {
                if (elementRef.current) {
                    observer.unobserve(elementRef.current)
                }
            }
        })
    }, [])

    return (
        <div>
            <div className="home-page">
                <Nav />
                <div className="main">
                    <Link to='/about'>
                        <img src="/images/ANTF_logo_white text w purple (2).png" className='main-logo' alt="" />
                    </Link>
                    <h2 className="tagline">pop punk cover band from NOVA playing your favorite songs from those angsty emo years</h2>
                    <div className="members-grid">
                        <Link to='/about'>
                            <img className='member-image one' src="https://i.imgur.com/vE9GQJa.jpg" alt="" />
                        </Link>
                        <Link to='/about'>
                            <img className='member-image two' src="https://i.imgur.com/DQSJMnv.jpg" alt="" />
                        </Link>
                        <Link to='/about'>
                            <img className='member-image three' src="https://i.imgur.com/DJ59Heg.jpg" alt="" />
                        </Link>
                        <Link to='/about'>
                            <img className='member-image four' src="https://i.imgur.com/ge6EJcR.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="quick-view-container">
                        <LatestClip />
                        <NextShow />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
