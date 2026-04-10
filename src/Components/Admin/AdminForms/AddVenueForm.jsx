import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../../config.js';
import './AdminHome.css';

export default function AddVenueForm() {
    const initialState = {
        name: '',
        location: '',
        show_poster: '',
        show_time: '',
        ae_needed: null,
        cover: '',
        pay: '',
    };

    const [formData, setFormData] = useState(initialState);
    const [successMessage, setSuccessMessage] = useState('');
    const [formError, setFormError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setErrorMessage('');
        setSuccessMessage('');
        setFormError('');

        const { name, value, type } = e.target;

        let newValue = value;

        if (type === 'radio' && (value === 'true' || value === 'false')) {
            newValue = value === 'true';
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Object.values(formData).every((value) => value !== '')) {
            setFormError('You have not filled in all the fields.');
            return;
        }
        if (!formData.show_poster.includes('i.imgur')) {
            setFormError('Your poster link will not work.');
            return;
        }

        addVenue();
    };

    const addVenue = async () => {
        try {
            const response = await axios.post(
                `${BASE_URL}venues/add`,
                formData,
                { withCredentials: true },
            );
            if (response.status === 201) {
                setSuccessMessage('The venue has been added!');
            } else {
                setErrorMessage('There was an error creating the venue.');
            }
        } catch (error) {
            console.error('There was an error creating the venue: ', error);
        }
    };

    return (
        <>
            <h1>Add Venue Form</h1>
            <form className="show-form" action="" onSubmit={handleSubmit}>
                <p className="instructions">
                    Please follow the formatting exactly when submitting the
                    data.
                </p>
                <label htmlFor="">Venue Name</label>
                <p className="format-example">Format: The Light Horse</p>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    className="data-input"
                    placeholder="Venue Name"
                    onChange={handleChange}
                />
                <label htmlFor="">Venue Location</label>
                <p className="format-example">Format: Alexandria, VA</p>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    className="data-input"
                    placeholder="Venue Location"
                    onChange={handleChange}
                />
                <label htmlFor="">Show Poster Link</label>
                <p className="format-example">
                    Format: https://i.imgur.com/mPI5Kkl.png
                </p>
                <input
                    type="text"
                    name="show_poster"
                    value={formData.show_poster}
                    className="data-input"
                    placeholder="Show Poster"
                    onChange={handleChange}
                />
                <label htmlFor="">Show Time/Length</label>
                <p className="format-example">Format: 9:30pm - 1:00am</p>
                <input
                    type="text"
                    name="show_time"
                    value={formData.show_time}
                    className="data-input"
                    placeholder="Show Time"
                    onChange={handleChange}
                />
                <label htmlFor="">Pay Amount</label>
                <p className="format-example">Format: 800</p>
                <input
                    type="text"
                    name="pay"
                    value={formData.pay}
                    className="data-input"
                    placeholder="Pay Amount"
                    onChange={handleChange}
                />
                <label htmlFor="">Is the show free or is there a cover?</label>
                <p className="format-example">Format: Free || $5</p>
                <input
                    type="text"
                    name="cover"
                    value={formData.cover}
                    className="data-input"
                    placeholder="Cover"
                    onChange={handleChange}
                />
                <label htmlFor="">Audio Engineer needed?</label>
                <div className="radio-button-input-wrapper">
                    <input
                        type="radio"
                        id="Yes"
                        name="ae_needed"
                        value="true"
                        checked={formData.ae_needed === true}
                        className="radio-button-input"
                        onChange={handleChange}
                    />
                    <label htmlFor="Yes">Yes</label>
                </div>
                <div className="radio-button-input-wrapper">
                    <input
                        type="radio"
                        id="No"
                        name="ae_needed"
                        value="false"
                        checked={formData.ae_needed === false}
                        className="radio-button-input"
                        onChange={handleChange}
                    />
                    <label htmlFor="No">No</label>
                </div>
                {formError && <p className="error-message">{formError}</p>}
                {errorMessage && (
                    <p className="submission-error">{errorMessage}</p>
                )}
                <button className="song-form-submit">Add</button>
                {successMessage && (
                    <p className="success-message">{successMessage}</p>
                )}
            </form>
        </>
    );
}
