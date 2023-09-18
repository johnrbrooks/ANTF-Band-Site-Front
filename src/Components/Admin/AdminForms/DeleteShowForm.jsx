import { useState, useEffect } from 'react'
import axios from 'axios'
import './AdminHome.css'
import { BASE_URL } from '../../../App'

export default function DeleteShowForm() {

    const [shows, setShows] = useState([])
    const [showSelection, setShowSelection] = useState('')
    const [formError, setFormError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [deleteModal, setDeleteModal] = useState(false)

    useEffect(() => {
        retrieveShows()
    }, [])

    const retrieveShows = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/shows/get/all`)
            if(response.status === 200) {
                setShows(response.data)
            } 
        } catch (error) {
            console.error('There was an error retrieving the shows: ', error)
        }
    }

    const handleChange = (e) => {
        const selectedShow = e.target.value
        setShowSelection(selectedShow)
        setDeleteModal(false)
        setFormError('')
        setSuccessMessage('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(showSelection === '') {
            setFormError('You did not select a show!')
        } else {
            setDeleteModal(true)
        }
    }

    const handleConfirm = async () => {
        try {
            const response = await axios.delete(`${BASE_URL}shows/delete/${showSelection}`)
            if(response.status === 200) {
                setDeleteModal(false)
                setSuccessMessage('Show deleted!')
                setShowSelection('')
                retrieveShows()
            }
        } catch(error) {
            console.error('There was an error deleting the show: ', error)
        }
    }

    const handleCancel = () => {
        setDeleteModal(false)
    }

    return (
        <>
            <form className="song-form" action="" onSubmit={handleSubmit}>
                <label className="song-form-label" htmlFor="">Show:</label>
                <select name="show" id="show" className="select-input" onChange={handleChange}>
                    <option value=""></option>
                    {shows?.map(show => (
                        <option value={show._id} key={show._id}>{show.venue} - {show.date}</option>
                    ))}
                </select>
                {formError && <p className="form-error">{formError}</p>}
                {errorMessage && <p className="submission-error">{errorMessage}</p>}
                <button className="song-form-submit">Delete</button>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {deleteModal && 
                    <div className='confirm-delete-modal'>
                        <h3 className='modal-prompt'>Are you sure you want to delete this show?</h3>
                        <div className="buttons-wrapper">
                            <button className="confirm" onClick={handleConfirm}>OK</button>
                            <button className="decline" onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>}
            </form>
        </>
    )
}