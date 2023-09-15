import { useState, useEffect } from 'react'
import axios from 'axios'
import './AdminHome.css'
import { BASE_URL } from '../../../App'

export default function DeleteSongForm() {

    const [songs, setSongs] = useState([])
    const [formError, setFormError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    useEffect(() => {
        retrieveSongs()
    }, [])

    const retrieveSongs = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/songs/get/all`)
            if(response.status === 200) {
                setSongs(response.data)
            } 
        } catch (error) {
            console.error('There was an error retrieving the songs: ', error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted')
    }

    return (
        <form className="song-form" action="" onSubmit={handleSubmit}>
            <label htmlFor="">Song Name:</label>
            <select name="song" id="song">
                <option value=""></option>
                {songs?.map(song => (
                    <option value={song.name} key={song._id}>{song.name}</option>
                ))}
            </select>
            {formError && <p className="form-error">{formError}</p>}
            {errorMessage && <p className="submission-error">{errorMessage}</p>}
            <button className="song-form-submit">Delete</button>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
    )
}