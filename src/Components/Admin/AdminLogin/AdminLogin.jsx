import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import antfLogo from '/images/ANTF_logo_black text w purple.png'
import './AdminLogin.css'

export default function AdminLogin ({ validateLogin, errorMessage }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        validateLogin(email, password)
    }

    return (
        <>
            <div className="admin-login-page">
                <h1 className="page-title">Admin Login</h1>
                <div className="login-form-container">
                    <Link to='/home'><img src={antfLogo} className="logo-image" alt="" /></Link>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-container">
                            <label htmlFor="Email" className="input-field-label">Email:</label>
                            <input 
                                type="text" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email"
                                className="email-input"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="Password" className="input-field-label">Password:</label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                className="password-input"/>
                        </div>
                        <p className="error-message">{errorMessage}</p>
                        <button type='submit' className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}