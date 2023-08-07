import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function About () {
    return (
        <div>
            <div className="home-page">
                <Nav />
                <h1>About</h1>
            </div>
        </div>
    )
}