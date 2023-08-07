import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Contact () {
    return (
        <div>
            <div className="home-page">
                <Nav />
                <h1>Contact</h1>
            </div>
        </div>
    )
}