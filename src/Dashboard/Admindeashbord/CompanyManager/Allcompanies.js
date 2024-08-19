import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Allcompanies.css'; 

const CompaniesSelection = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('https://develop-yourself.onrender.com/api/companies');
                setCompanies(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching companies');
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    const handleSelectCompany = (id) => {
        navigate(`add-person/${id}`);
    };

    const handleDeleteCompany = async (id) => {
        try {
            await axios.delete(`https://develop-yourself.onrender.com/api/companies/${id}`);
            setCompanies(companies.filter((company) => company._id !== id));
        } catch (err) {
            console.error('Error deleting company:', err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="companies-selection">
            <h2>Select a Company</h2>
            <table className="companies-table">
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company._id}>
                            <td>
                                <img src={company.image} alt={company.name} className="company-image" />
                            </td>
                            <td>{company.name}</td>
                            <td>{company.address}</td>
                            <td>
                                <button onClick={() => handleSelectCompany(company._id)}>
                                    Select
                                </button>
                                <button onClick={() => handleDeleteCompany(company._id)} className="delete-button">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompaniesSelection;
