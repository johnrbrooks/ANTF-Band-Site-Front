import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import antfLogo from '/images/ANTF_logo_black text w purple.png'
import './AdminLogin.css'
import AdminHome from '../AdminForms/AdminHome'

export default function AdminLogin () {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const VITE_ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
    const VITE_ADMIN_PW = import.meta.env.VITE_ADMIN_PW;

    const handleSubmit = (e) => {
        e.preventDefault()
        validateLogin(email, password)
    }

    const validateLogin = (email, password) => {
        if(email === VITE_ADMIN_EMAIL && password === VITE_ADMIN_PW) {
            setErrorMessage('')
            setLoggedIn(true)
            navigate('/adminhome')
        } else {
            setErrorMessage('Incorrect Email or Password. Please try again.')
        }
    }

    return (
        isLoggedIn ? <AdminHome /> : (
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
                                    onChange={e => {
                                        setEmail(e.target.value)
                                        setErrorMessage('')
                                    }}
                                    placeholder="Email"
                                    className="email-input"
                                />
                            </div>
                            <div className="input-container">
                                <label htmlFor="Password" className="input-field-label">Password:</label>
                                <input 
                                    type="password" 
                                    value={password}
                                    onChange={e => {
                                        setPassword(e.target.value); 
                                        setErrorMessage('');
                                    }}
                                    placeholder="Password"
                                    className="password-input"/>
                            </div>
                            {errorMessage && <p className="error-message2">{errorMessage}</p>}
                            <button type='submit' className="login-button">Login</button>
                        </form>
                    </div>
                </div>
            </>
            ))
        }