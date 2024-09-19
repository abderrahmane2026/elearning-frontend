import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AddPersonToCompany = () => {
    const { id } = useParams(); // Get company ID from URL
    const navigate = useNavigate(); // For redirecting after successful submission
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://develop-yourself.onrender.com/api/companies/${id}/people`, {
                name,
                email,
            });
            setName('');
            setEmail('');
            setSuccess('Person added successfully!');
            setError('');
            // Redirect or perform other actions if needed
        } catch (err) {
            setError('Error adding person to company. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="add-person-container">
            <h2>Add Person to Company</h2>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <form onSubmit={handleSubmit} className="add-person-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <button type="submit" className="submit-btn">Add Person</button>
            </form>
        </div>
    );
};

export default AddPersonToCompany;
