import { useState, useEffect } from 'react'
import axios from 'axios'
import './AdminHome.css'
import { BASE_URL } from '../../../App'

export default function DeleteSongForm() {

    const [songs, setSongs] = useState([])
    const [songSelection, setSongSelection] = useState('')
    const [formError, setFormError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [deleteModal, setDeleteModal] = useState(false)

    useEffect(() => {
        retrieveSongs()
    }, [songs])

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

    const handleChange = (e) => {
        const selectedSong = e.target.value
        setSongSelection(selectedSong)
        setDeleteModal(false)
        setFormError('')
        setSuccessMessage('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(songSelection === '') {
            setFormError('You did not select a song!')
        } else {
            setDeleteModal(true)
        }
    }

    const handleConfirm = async () => {
        try {
            const response = await axios.delete(`${BASE_URL}songs/delete`, { data: { name: songSelection }})
            if(response.status === 200) {
                setDeleteModal(false)
                setSuccessMessage('Song deleted!')
            }
        } catch(error) {
            console.error('There was an error deleting the song: ', error)
        }
    }

    const handleCancel = () => {
        setDeleteModal(false)
    }

    return (
        <>
            <form className="song-form" action="" onSubmit={handleSubmit}>
                <label className="song-form-label" htmlFor="">Song Name:</label>
                <select name="song" id="song" className="select-input" onChange={handleChange}>
                    <option value=""></option>
                    {songs?.map(song => (
                        <option value={song.name} key={song._id}>{song.name}</option>
                    ))}
                </select>
                {formError && <p className="form-error">{formError}</p>}
                {errorMessage && <p className="submission-error">{errorMessage}</p>}
                <button className="song-form-submit">Delete</button>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {deleteModal && 
                    <div className='confirm-delete-modal'>
                        <h3 className='modal-prompt'>Are you sure you want to delete this song?</h3>
                        <div className="buttons-wrapper">
                            <button className="confirm" onClick={handleConfirm}>OK</button>
                            <button className="decline" onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>}
            </form>
        </>
    )
}