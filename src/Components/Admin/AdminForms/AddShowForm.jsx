import './AdminHome.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function AddShowForm () {

    const initialState = {
        venue: '',
        show_poster: '',
        location: '',
        date: '',
        time: '',
        cover: '',
    }

    const [formData, setFormData] = useState(initialState)
    const [successMessage, setSuccessMessage] = useState('')
    const [formError, setFormError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setErrorMessage('')
        setSuccessMessage('')
        setFormError('')
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!Object.values(formData).every(value => value !== '')) {
            setFormError('You have not filled in all the fields.')
            return
        }
        if(!formData.show_poster.includes('i.imgur')) {
            setFormError('Your poster link will not work.')
            return
        } 
        if(!isValidDate(formData.date)) {
            setFormError('Your date is not correctly formatted.')
            return
        }

        console.log('Submitting...')
    }

    const isValidDate = (input) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/
        return regex.test(input)
    }

    return (
        <>
            <h1>Add Show Form</h1>
            <form className="show-form" action="" onSubmit={handleSubmit}>
                <p className="instructions">Please follow the formatting exactly when submitting the data.</p>
                <ol className="image-instructions">
                    <li className="instructions">To create an image link, go to <a href="https://imgur.com/"> Imgur.com </a>and sign in using Google and the band's email.</li>
                    <li className="instructions">Then go to Account/Images and click Add Images.</li>
                    <li className="instructions">Upload the poster image and save.</li>
                    <li className="instructions">Then click on the saved image, right click the image and copy the image address.</li>
                    <li className="instructions">DO NOT use the Image link displayed near the image.</li>
                    <li className="instructions">It should match the EXACT format of the link shown below.</li>
                </ol>
                <label htmlFor="">Venue:</label>
                <p className="format-example">Format: The Light Horse</p>
                <input type="text" name="venue" value={formData.venue} className="data-input" placeholder="Venue Name" onChange={handleChange}/>
                <label htmlFor="">Show Poster:</label>
                <p className="format-example">Format: https://i.imgur.com/T4lMfpo.png</p>
                <input type="text" name="show_poster" value={formData.show_poster} className="data-input" placeholder="Poster URL" onChange={handleChange}/>
                <label htmlFor="">Location:</label>
                <p className="format-example">Format: Alexandria, VA</p>
                <input type="text" name="location" value={formData.location} className="data-input" placeholder="Location" onChange={handleChange}/>
                <label htmlFor="">Date:</label>
                <p className="format-example">Format: 2023-09-30</p>
                <input type="text" name="date" value={formData.date} className="data-input" placeholder="Date" onChange={handleChange}/>
                <label htmlFor="">Time:</label>
                <p className="format-example">Format: 9:30pm - 1:00am</p>
                <input type="text" name="time" value={formData.time} className="data-input" placeholder="Time" onChange={handleChange}/>
                <label htmlFor="">Cover:</label>
                <p className="format-example">Format: Free || $5</p>
                <input type="text" name="cover" value={formData.cover} className="data-input" placeholder="Cover" onChange={handleChange}/>
                {formError && <p className='error-message'>{formError}</p>}
                {errorMessage && <p className="submission-error">{errorMessage}</p>}
                <button className="song-form-submit">Add</button>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
        </>
    )
}