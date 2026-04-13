import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../../config.js';
import './AdminHome.css';

const initialState = {
    name: '',
    location: '',
    show_poster: '',
    show_time: '',
    ae_needed: null,
    cover: '',
    pay: '',
};

export default function UpdateVenueForm() {
    const [venues, setVenues] = useState(null);
    const [selectedVenue, setSelectedVenue] = useState(null);
    const [venueData, setVenueData] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState(initialState);
    const [formError, setFormError] = useState('');

    const getVenues = async () => {
        try {
            const response = await axios.get(`${BASE_URL}venues/get/all`, {
                withCredentials: true,
            });

            if (response.status === 200) {
                setVenues(response.data);
            }
        } catch (error) {
            console.error(
                'There was an error retrieving the venues list: ',
                error,
            );
        }
    };

    const getVenueData = useCallback(async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}venues/get/${selectedVenue}`,
                { withCredentials: true },
            );

            if (response.status === 200) {
                setVenueData(response.data);
            }
        } catch (error) {
            console.error(
                'There was an error retrieving the venue data: ',
                error,
            );
        }
    }, [selectedVenue]);

    const handleChange = (e) => {
        const selectedVenue = e.target.value;
        setSelectedVenue(selectedVenue);
        setErrorMessage('');
        setSuccessMessage('');
    };

    useEffect(() => {
        getVenues();
    }, []);

    useEffect(() => {
        if (!selectedVenue) {
            setVenueData(null);
            setFormData(initialState);
            setFormError('');
            return;
        }

        getVenueData();
        setFormError('');
        setFormData(initialState);
    }, [selectedVenue, getVenueData]);

    const handleFormChange = (e) => {
        setFormError('');
        setErrorMessage('');
        setSuccessMessage('');

        const { name, value, type } = e.target;

        let newValue = value;

        if (type === 'radio' && (value === 'true' || value === 'false')) {
            newValue = value === 'true';
        }

        if (name === 'pay') {
            newValue = value === '' ? '' : Number(value);
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !Object.values(formData).some(
                (value) => value !== '' && value !== null,
            )
        ) {
            setFormError(
                'Please fill in at least one field before submitting.',
            );
            return;
        }
        if (
            formData.show_poster !== '' &&
            !formData.show_poster.includes('i.imgur')
        ) {
            setFormError('Your poster link will not work.');
            return;
        }

        updateVenue();
    };

    const updateVenue = async () => {
        try {
            const filteredPayload = Object.fromEntries(
                Object.entries(formData).filter(
                    ([_, value]) => value != null && value !== '',
                ),
            );

            const response = await axios.patch(
                `${BASE_URL}venues/update/${selectedVenue}`,
                filteredPayload,
                { withCredentials: true },
            );

            if (response.status === 200) {
                setVenueData(response.data);
                setErrorMessage('');
                setSuccessMessage('Venue updated successfully!');
                setFormError('');
                setFormData(initialState);
            }
        } catch (error) {
            console.error('There was an error updating the venue: ', error);
            setErrorMessage('There was an error updating the venue.');
        }
    };

    return (
        <>
            <label className="song-form-label" htmlFor="">
                Select venue to update:
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
            {venueData && (
                <form action="" className="show-form" onSubmit={handleSubmit}>
                    <h1>{venueData.venue.name}</h1>
                    <label htmlFor="">Venue Name</label>
                    <p className="format-example">
                        Current: {venueData.venue.name}
                    </p>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        className="data-input"
                        placeholder={venueData.venue.name}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="">Venue Location</label>
                    <p className="format-example">
                        Current: {venueData.venue.location}
                    </p>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        className="data-input"
                        placeholder={venueData.venue.location}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="">Show Poster Link</label>
                    <p className="format-example">
                        Current: {venueData.venue.show_poster}
                    </p>
                    <input
                        type="text"
                        name="show_poster"
                        value={formData.show_poster}
                        className="data-input"
                        placeholder={venueData.venue.show_poster}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="">Show Time/Length</label>
                    <p className="format-example">
                        Current: {venueData.venue.show_time}
                    </p>
                    <input
                        type="text"
                        name="show_time"
                        value={formData.show_time}
                        className="data-input"
                        placeholder={venueData.venue.show_time}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="">Pay Amount</label>
                    <p className="format-example">
                        Current: {venueData.venue.pay}
                    </p>
                    <input
                        type="number"
                        name="pay"
                        value={formData.pay}
                        className="data-input"
                        placeholder={venueData.venue.pay}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="">
                        Is the show free or is there a cover?
                    </label>
                    <p className="format-example">
                        Current: {venueData.venue.cover}
                    </p>
                    <input
                        type="text"
                        name="cover"
                        value={formData.cover}
                        className="data-input"
                        placeholder={venueData.venue.cover}
                        onChange={handleFormChange}
                    />
                    <label htmlFor="">Audio Engineer needed?</label>
                    <p className="format-example">
                        Current:{' '}
                        {venueData.venue.ae_needed === true ? 'Yes' : 'No'}
                    </p>
                    <div className="radio-button-input-wrapper">
                        <input
                            type="radio"
                            id="Yes"
                            name="ae_needed"
                            value="true"
                            checked={formData.ae_needed === true}
                            className="radio-button-input"
                            onChange={handleFormChange}
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
                            onChange={handleFormChange}
                        />
                        <label htmlFor="No">No</label>
                    </div>
                    {formError && <p className="error-message">{formError}</p>}
                    {errorMessage && (
                        <p className="submission-error">{errorMessage}</p>
                    )}
                    <button className="song-form-submit">Update Venue</button>
                    {successMessage && (
                        <p className="success-message">{successMessage}</p>
                    )}
                </form>
            )}
        </>
    );
}
