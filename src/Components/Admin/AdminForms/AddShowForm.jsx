import './AdminHome.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../../config';

const intitialState = {
    venue: '',
    date: '',
};

export default function AddShowForm() {
    const [formData, setFormData] = useState(intitialState);
    const [successMessage, setSuccessMessage] = useState('');
    const [formError, setFormError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [venues, setVenues] = useState(null);

    useEffect(() => {
        if (!venues) {
            getVenues();
        }
    });

    const getVenues = async () => {
        try {
            const response = await axios.get(`${BASE_URL}venues/get/all`, {
                withCredentials: true,
            });

            if (response.status === 200) {
                setVenues(response.data);
                setErrorMessage('');
            }
        } catch (error) {
            console.error(
                'There was an error retrieving the venues list: ',
                error,
            );
            setErrorMessage('There was an error retrieving the venues list.');
        }
    };

    const handleChange = (e) => {
        setErrorMessage('');
        setSuccessMessage('');
        setFormError('');
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Object.values(formData).every((value) => value !== '')) {
            setFormError('You have not filled in all the fields.');
            return;
        }
        if (!isValidDate(formData.date)) {
            setFormError('Your date is not correctly formatted.');
            return;
        }
        addShow();
    };

    const isValidDate = (input) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(input);
    };

    const addShow = async () => {
        try {
            const response = await axios.post(
                `${BASE_URL}shows/create`,
                formData,
                { withCredentials: true },
            );
            if (response.status === 201) {
                setSuccessMessage('The show has been added!');
                setFormData(intitialState);
            } else {
                setErrorMessage('There was an error creating the show.');
            }
        } catch (error) {
            console.error('There was an error creating the show: ', error);
        }
    };

    return (
        <>
            <h1>Add Show Form</h1>
            <form className="show-form" action="" onSubmit={handleSubmit}>
                <label className="song-form-label" htmlFor="">
                    Select the venue:
                </label>
                <select
                    name="venue"
                    id="venue"
                    className="select-input"
                    onChange={handleChange}
                >
                    <option value=""></option>
                    {venues?.map((venue) => (
                        <option value={venue._id} key={venue._id}>
                            {venue.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="">Date:</label>
                <p className="format-example">Format: 2023-09-30</p>
                <input
                    type="text"
                    name="date"
                    value={formData.date}
                    className="data-input"
                    placeholder="Date"
                    onChange={handleChange}
                />

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
