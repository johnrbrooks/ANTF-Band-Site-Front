import { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../App'
import emailjs from '@emailjs/browser'
import axios from 'axios'
import Nav from './Nav'
import Footer from './Footer'

export default function Contact () {

    const initialState = {
        name: '',
        email: '',
        reference: '',
        message: '',
    }

    const form = useRef()

    const [formData, setFormData] = useState(initialState)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleChange = (e) => {
        setErrorMessage('')
        setSuccessMessage('')
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
            return
        }
        if(!formData.email.includes('@')) {
            setErrorMessage('You must use a valid email address.')
            return
        }
        submitForm()
        sendEmail()
    }

    const sendEmail = () => {
        emailjs.sendForm(
            `${import.meta.env.VITE_SERVICE_ID}`, 
            `${import.meta.env.VITE_TEMPLATE_ID}`, 
            form.current, 
            `${import.meta.env.VITE_PUBLIC_KEY}`
        )
        .then(
            (result) => {
                console.log(result.text)
            },
            (error) => {
                console.log(error.text)
            }
        )
    }

    const submitForm = async() => {
        try {
            const formSubmission = await axios.post(`${BASE_URL}/forms/create`, formData)
            setFormData(initialState)
            setSuccessMessage('We have received your submission!')
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return (
        <div>
            <Nav />
            <div className="contact-section">
                <form action="" className="contact-form" ref={form} onSubmit={onSubmit}>
                    <div className="call-to-action-container">
                        <h1 className='call-to-action'>Got a gig or a question?</h1>
                        <h2 className='call-to-action'>Contact us below:</h2>
                    </div>
                    <p className="disclaimer">*All fields are required.</p>
                    <label htmlFor="">Name:</label>
                    <input type="text" placeholder='John Doe' name='name' className='input-box' value={formData.name} onChange={handleChange}/>
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder='example@example.com' name='email' className='input-box' value={formData.email} onChange={handleChange}/>
                    <label htmlFor="">How'd you hear about us?</label>
                    <select name="reference" id='reference' value={formData.reference} onChange={handleChange}>
                        <option value=""></option>
                        <option value="Saw a show">Saw a show</option>
                        <option value="From a friend">From a friend</option>
                        <option value="Social Media">Social Media</option>
                    </select>
                    <label htmlFor="">Message:</label>
                    <textarea className='text-box' value={formData.message} name='message' placeholder='I have a gig for you guys...' cols="30" rows="10" onChange={handleChange}></textarea>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    {successMessage && <p className='success-message'>{successMessage}</p>}
                    <button className='contact-submit-button' type='submit'>Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}