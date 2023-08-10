import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Contact () {

    const initialState = {
        name: '',
        email: '',
        reference: '',
        message: '',
    }

    const [formData, setFormData] = useState(initialState)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setErrorMessage('')
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const requiredFields = ['name', 'email', 'reference', 'message']

        const missingFields = requiredFields.filter((field) => !formData[field])

        if (missingFields.length > 0) {
            setErrorMessage(`All fields are required.`)
        }
    }


    return (
        <div>
            <Nav />
            <div className="contact-section">
                <form action="" className="contact-form" onSubmit={onSubmit}>
                    <div className="call-to-action-container">
                        <h1 className='call-to-action'>Got a gig or a question?</h1>
                        <h2 className='call-to-action'>Contact us below:</h2>
                    </div>
                    <p className="disclaimer">*All fields are required.</p>
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder='John Doe' name='name' className='input-box' onChange={handleChange}/>
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder='example@example.com' name='email' className='input-box' onChange={handleChange}/>
                    <label htmlFor="">How'd you hear about us?</label>
                    <select name="reference" id='reference' onChange={handleChange}>
                        <option value=""></option>
                        <option value="Saw a show">Saw a show</option>
                        <option value="From a friend">From a friend</option>
                        <option value="Social Media">Social Media</option>
                    </select>
                    <label htmlFor="">Message:</label>
                    <textarea className='text-box' name='message' placeholder='I have a gig for you guys...' cols="30" rows="10" onChange={handleChange}></textarea>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    <button className='contact-submit-button' type='submit'>Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}