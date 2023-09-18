import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './AdminHome.css'
import Nav from '../../Main/Nav'
import AdminLogin from '../AdminLogin/AdminLogin'
import AddShowForm from './AddShowForm'
import DeleteShowForm from './DeleteShowForm'
import AddSongForm from './AddSongForm'
import DeleteSongForm from './DeleteSongForm'

export default function AdminHome ({ isLoggedIn }) {

    const [formType, setFormType] = useState('')

    const navigate = useNavigate()

    const location = useLocation()
    const loggedIn = location.state?.isLoggedIn || false

    useEffect(() => {
        if (!loggedIn) {
            navigate('/adminlogin')
        }
    }, [loggedIn, navigate])

    const handleChange = (e) => {
        const value = e.target.value
        setFormType(value)
    }

    let renderedComponent
    switch (formType) {
        case "AddShow":
            renderedComponent = <AddShowForm />;
            break;
        case "DeleteShow":
            renderedComponent = <DeleteShowForm />;
            break;
        case "AddSong":
            renderedComponent = <AddSongForm />;
            break;
        case "DeleteSong":
            renderedComponent = <DeleteSongForm />;
            break;
        default:
            renderedComponent = null;
    }

    return (
        <>
            <Nav />
            <div className="admin-home-page-wrapper">
                <h1 className="admin-home-title">Admin Home</h1>
                <select name="form-type" id="form-type" className="form-select" onChange={handleChange}>
                    <option value=""></option>
                    <option value="AddShow">Add Show</option>
                    <option value="DeleteShow">Delete Show</option>
                    <option value="AddSong">Add Song</option>
                    <option value="DeleteSong">Delete Song</option>
                </select>
                {renderedComponent}
            </div>
        </>
    )
}