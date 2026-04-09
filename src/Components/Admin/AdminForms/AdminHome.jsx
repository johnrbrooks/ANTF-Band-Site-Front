import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminHome.css';
import Nav from '../../Main/Nav';
import Footer from '../../Main/Footer';
import AddShowForm from './AddShowForm';
import DeleteShowForm from './DeleteShowForm';
import AddSongForm from './AddSongForm';
import DeleteSongForm from './DeleteSongForm';
import AdminLogOut from '../AdminLogOut/AdminLogOut';
import axios from 'axios';
import { BASE_URL } from '../../../../config.js';

export default function AdminHome() {
    const [formType, setFormType] = useState('');

    const navigate = useNavigate();

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
                console.log(error);
            }
        };

        checkAuth();
    }, [navigate]);

    const handleChange = (e) => {
        const value = e.target.value;
        setFormType(value);
    };

    let renderedComponent;
    switch (formType) {
        case 'AddShow':
            renderedComponent = <AddShowForm />;
            break;
        case 'DeleteShow':
            renderedComponent = <DeleteShowForm />;
            break;
        case 'AddSong':
            renderedComponent = <AddSongForm />;
            break;
        case 'DeleteSong':
            renderedComponent = <DeleteSongForm />;
            break;
        default:
            renderedComponent = null;
    }

    return (
        <>
            <Nav />
            <AdminLogOut />
            <div className="admin-home-page-wrapper">
                <h1 className="admin-home-title">Admin Home</h1>
                <select
                    name="form-type"
                    id="form-type"
                    className="form-select"
                    onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="AddShow">Add Show</option>
                    <option value="DeleteShow">Delete Show</option>
                    <option value="AddSong">Add Song</option>
                    <option value="DeleteSong">Delete Song</option>
                </select>
                {renderedComponent}
            </div>
            <Footer />
        </>
    );
}
