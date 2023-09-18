import './AdminHome.css'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../../App'
import axios from 'axios'

export default function AddSongForm () {

    const initialState = {
        name: '',
        artist: '',
    }

    const [formData, setFormData] = useState(initialState)
    const [successMessage, setSuccessMessage] = useState('')
    const [formError, setFormError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setFormError('')
        setErrorMessage('')
        setSuccessMessage('')
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(formData.name === '' || formData.artist === '') {
            setFormError('You have not input the data yet!')
        } else {
            addSong()
        }
    }

    const addSong = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/songs/create`, formData)
            if(response.status === 200) {
                setSuccessMessage('The song has been added!')
                setFormData(initialState)
            } else {
                setErrorMessage('There was an error adding the song.')
            }
        } catch (error) {
            console.error('There was an error adding the song: ', error)
        }
    }

    return (
        <form className="song-form" action="" onSubmit={handleSubmit}>
            <label htmlFor="">Song Name:</label>
            <input type="text" name="name" value={formData.name} className="song-data-input" placeholder="Song Name" onChange={handleChange}/>
            <label htmlFor="">Song Artist:</label>
            <input type="text" name="artist" value={formData.artist} className="song-data-input" placeholder="Song Artist"onChange={handleChange}/>
            {formError && <p className="form-error">{formError}</p>}
            {errorMessage && <p className="submission-error">{errorMessage}</p>}
            <button className="song-form-submit">Add</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
    )
}