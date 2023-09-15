import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Nav from '../../Main/Nav'
import AdminLogin from '../AdminLogin/AdminLogin'

export default function AdminHome ({ isLoggedIn }) {

    const navigate = useNavigate()

    const location = useLocation()
    const loggedIn = location.state?.isLoggedIn || false

    useEffect(() => {
        if (!loggedIn) {
            navigate('/adminlogin')
        }
    }, [loggedIn, navigate])


    return (
        <>
            <div className="admin-home-page-wrapper">
                <Nav />
                <h1>Admin Home</h1>
            </div>
        </>
    )
}