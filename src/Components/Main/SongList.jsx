import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function SongList () {
    return (
        <div>
            <div className="home-page">
                <Nav />
                <h1>Song List</h1>
                <Footer />
            </div>
        </div>
    )
}