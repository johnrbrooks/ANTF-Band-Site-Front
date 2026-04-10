import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../../config.js';
import './AdminHome.css';

export default function DeleteVenueForm() {
    const [venues, setVenues] = useState([]);
    const [venueSelection, setVenueSelection] = useState('');
    const [formError, setFormError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        retrieveVenues();
    }, []);

    const retrieveVenues = async () => {
        try {
            const response = await axios.get(`${BASE_URL}venues/get/all`, {
                withCredentials: true,
            });
            if (response.status === 200) {
                setVenues(response.data);
            }
        } catch (error) {
            console.error('There was an error retrieving the shows: ', error);
        }
    };

    const handleChange = (e) => {
        const selectedVenue = e.target.value;
        setVenueSelection(selectedVenue);
        setDeleteModal(false);
        setFormError('');
        setSuccessMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (venueSelection === '') {
            setFormError('You did not select a venue!');
        } else {
            setDeleteModal(true);
        }
    };

    const handleConfirm = async () => {
        try {
            const response = await axios.delete(
                `${BASE_URL}venues/delete/${venueSelection}`,
                { withCredentials: true },
            );
            if (response.status === 202) {
                setDeleteModal(false);
                setSuccessMessage('Venue deleted!');
                setVenueSelection('');
                retrieveVenues();
            }
        } catch (error) {
            console.error('There was an error deleting the venue: ', error);
        }
    };

    const handleCancel = () => {
        setDeleteModal(false);
    };
    return (
        <>
            <form className="song-form" action="" onSubmit={handleSubmit}>
                <label className="song-form-label" htmlFor="">
                    Venue:
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
                {formError && <p className="form-error">{formError}</p>}
                {errorMessage && (
                    <p className="submission-error">{errorMessage}</p>
                )}
                <button className="song-form-submit">Delete</button>
                {successMessage && (
                    <p className="success-message">{successMessage}</p>
                )}
                {deleteModal && (
                    <div className="confirm-delete-modal">
                        <h3 className="modal-prompt">
                            Are you sure you want to delete this venue?
                        </h3>
                        <div className="buttons-wrapper">
                            <button className="confirm" onClick={handleConfirm}>
                                OK
                            </button>
                            <button className="decline" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </>
    );
}
