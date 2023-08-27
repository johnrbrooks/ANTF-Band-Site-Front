import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Shows () {
    return (
        <div>
            <div className="home-page">
                <Nav />
                <h1>Shows</h1>
                <div className="shows-grid">
                    <div className="show-item">
                        <h2 className="venue-name"></h2>
                        <img src="" alt="" className="show-poster" />
                        <div className="show-data-grid">
                            <h3 className="show-data-title">Date:</h3>
                            <p className="show-data-info"></p>
                            <h3 className="show-data-title">Time:</h3>
                            <p className="show-data-info"></p>
                            <h3 className="show-data-title">Location:</h3>
                            <p className="show-data-info"></p>
                            <h3 className="show-data-title">Cover?</h3>
                            <p className="show-data-info"></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}