import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon
import "./page1.css"

const CompaniesList2 = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('https://develop-yourself.onrender.com/api/companies');
                const nonContractedCompanies = response.data.filter(company => !company.contracted); // تصفية الشركات غير المتعاقدة
                setCompanies(nonContractedCompanies);
                setLoading(false);
            } catch (err) {
                setError('Error fetching companies');
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="companies-list">
            {companies.map((company) => (
                <div className="company-card" key={company._id}>
                    <img src={company.image} alt={company.name} className="company-image" />
                    <h2>{company.name}</h2>
                    <h2>{company.price}</h2>
                    <p><FaMapMarkerAlt /> {company.address}</p>
                    <Link to={`/companies/${company._id}`}>
                        <button className="show-more-btn">Show More</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CompaniesList2;
