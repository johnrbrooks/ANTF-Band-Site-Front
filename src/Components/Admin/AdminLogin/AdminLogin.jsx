import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import antfLogo from '/images/ANTF_logo_black text w purple.png'
import './AdminLogin.css'

export default function AdminLogin () {

    const [loggedIn, setLoggedIn] = useState(false)


    return (
        <>
            <div className="admin-login-page">
                <h1 className="page-title">Admin Login</h1>
                <div className="login-form-container">
                    <Link to='/home'><img src={antfLogo} className="logo-image" alt="" /></Link>
                    <form action="" className="login-form">
                        <div className="input-container">
                            <label htmlFor="Email" className="input-field-label">Email:</label>
                            <input type="text" className="email-input"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="Password" className="input-field-label">Password:</label>
                            <input type="password" className="password-input"/>
                        </div>
                        <button type='submit' className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}