import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import antfLogo from '/images/ANTF_logo_black text w purple.png';
import './AdminLogin.css';
import axios from 'axios';
import { BASE_URL } from '../../../../config.js';

export default function AdminLogin() {
    const navigate = useNavigate();

    // TODO - Login page should navigate to /adminhome if valid token from checkAuth - not working currently
    // TODO - Clean Up old auth functionality

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const auth = await axios.get(`${BASE_URL}admin/checkAuth`, {
                    withCredentials: true,
                });
                if (auth.status === 200) {
                    navigate('/adminhome');
                }
            } catch (error) {
                console.error('There was an error checking auth: ', error);
            }
        };

        checkAuth();
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    const handleLogin = async (email, password) => {
        const normalizedEmail = email.toLowerCase();

        const payload = {
            email: normalizedEmail,
            password: password,
        };

        try {
            const response = await axios.post(
                `${BASE_URL}admin/login`,
                payload,
                { withCredentials: true },
            );
            if (response.status === 200) {
                setErrorMessage('');
                navigate('/adminhome');
            } else {
                setErrorMessage(
                    'Incorrect Email or Password. Please try again.',
                );
            }
        } catch (error) {
            console.error('Error during admin login: ', error);
            setErrorMessage('Incorrect Email or Password. Please try again.');
        }
    };

    return (
        <>
            <div className="admin-login-page">
                <h1 className="page-title">Admin Login</h1>
                <div className="login-form-container">
                    <Link to="/home">
                        <img src={antfLogo} className="logo-image" alt="" />
                    </Link>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-container">
                            <label
                                htmlFor="Email"
                                className="input-field-label"
                            >
                                Email:
                            </label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrorMessage('');
                                }}
                                placeholder="Email"
                                className="email-input"
                            />
                        </div>
                        <div className="input-container">
                            <label
                                htmlFor="Password"
                                className="input-field-label"
                            >
                                Password:
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrorMessage('');
                                }}
                                placeholder="Password"
                                className="password-input"
                            />
                        </div>
                        {errorMessage && (
                            <p className="error-message2">{errorMessage}</p>
                        )}
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
