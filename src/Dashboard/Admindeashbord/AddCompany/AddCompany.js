import React, { useState } from 'react';
import axios from 'axios';
import "./AddCompany.css";
const AddCompany = () => {
  const [company, setCompany] = useState({
    name: '',
    description: '',
    address: '',
    website: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/companies', company);
      console.log(response.data);
      // Optionally, you can add a success message or redirect the user to another page
    } catch (error) {
      console.error('There was an error adding the company!', error);
    }
  };

  return (
    <div className="add-company">
      <h2>Add New Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={company.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={company.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={company.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={company.website}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={company.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;
