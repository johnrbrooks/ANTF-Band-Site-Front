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
                    <div className="main-section">
                        <Contact />
                    </div>
                    <div className="feature-section">
                        <NextShow />
                        <LatestClip />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
