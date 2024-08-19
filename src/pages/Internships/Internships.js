import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [contractedCompanies, setContractedCompanies] = useState([]);
  const [nonContractedCompanies, setNonContractedCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/api/companies');
        setCompanies(response.data);
        setContractedCompanies(response.data.filter(company => company.isContracted));
        setNonContractedCompanies(response.data.filter(company => !company.isContracted));
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      <h1>All Companies</h1>
      
      <h2>Contracted Companies</h2>
      <ul>
        {contractedCompanies.map(company => (
          <li key={company._id}>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <p>Address: {company.address}</p>
            <p>Phone: {company.phone}</p>
            <p>Website: <a href={company.website}>{company.website}</a></p>
            <h4>Booking Locations</h4>
            <ul>
              {company.bookingLocations.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2>Non-Contracted Companies</h2>
      <ul>
        {nonContractedCompanies.map(company => (
          <li key={company._id}>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <p>Address: {company.address}</p>
            <p>Phone: {company.phone}</p>
            <p>Website: <a href={company.website}>{company.website}</a></p>
            <h4>Booking Locations</h4>
            <ul>
              {company.bookingLocations.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
