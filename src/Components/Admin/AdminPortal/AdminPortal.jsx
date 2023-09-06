import AdminLogin from '../AdminLogin/AdminLogin'
import AdminHome from '../AdminForms/AdminHome'
import BASE_URL from '../../../App'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function AdminPortal () {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const validateLogin = async (email, password) => {
        try{
            const response = await axios.get(`${BASE_URL}admin/get/${email}`)
            if(!response.status !== 200) {
                console.error('There was an error retrieving the admin.')
            }
            const admin = response.data
            if(!admin) {
                setErrorMessage('Admin email not found. Please try again.')
            }
            if(admin.password === password) {
                setIsLoggedIn(true)
            } else {
                setErrorMessage('Incorrect password. Please try again.')
            }
        } catch (error) {
            console.error('Error retrieving admin information: ', error)
        }
    }

    return (
        <React.Fragment>
            { !isLoggedIn && <AdminLogin validateLogin={validateLogin} errorMessage={errorMessage} /> }
            { isLoggedIn && <AdminHome isLoggedIn={isLoggedIn} /> }
        </React.Fragment>
    )    
}