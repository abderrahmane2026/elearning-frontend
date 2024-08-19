import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import "./CompanyDetailsPage.css";

const CompanyDetails = () => {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
   
   
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    // State for order details
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [cvFile, setCvFile] = useState(null); // State لتخزين ملف السيرة الذاتية
    const [showOrderForm, setShowOrderForm] = useState(false); // Control order form visibility

    const user = JSON.parse(window.localStorage.getItem("userr"));
    const userId = user?._id;
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const response = await axios.get(`https://develop-yourself.onrender.com/api/companies/${id}`);
                setCompany(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching company details');
                setLoading(false);
            }
        };

        fetchCompany();
    }, [id]);

    const handleSubmitOrder = async (e) => {
        e.preventDefault();
    
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('address', address);
            formData.append('phone', phone);
            formData.append('paymentMethod', paymentMethod);
            formData.append('userId', userId);
            formData.append('catigory', 'company');
            formData.append('nameofchois', company.name);
            formData.append('cv', cvFile);
          
           
    
            await axios.post('https://develop-yourself.onrender.com/api/order/submit', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            alert('Order submitted successfully!');
        } catch (error) {
            alert('Error submitting order: ' + error.message);
        }
    };
    
      const handleEnrollClick = () => {
        setShowOrderForm(true);
      };
    
      if (loading) return <div>Loading...</div>;

      if (error) return <div>{error}</div>;
    
    if (!company) {
        return <div>Company not found</div>;
    }

    return (
        <div className="company-details">
            <img src={company.image} alt={company.name} className="company-image" />
            <div className="company-info-container">
                <h1 className="company-name">{company.name}</h1>
                <h2>التفاصيل:</h2>
                <p className="company-detail">{company.detail}</p>
                <p className="company-price">السعر: {company.price}</p>
                <p className="company-info"><FaMapMarkerAlt /> {company.address}</p>
                <p className="company-info"><FaPhoneAlt /> {company.phone_number}</p>
                <p className="company-info"><FaEnvelope /> {company.email}</p>
                <p className="company-capacity">Capacity: {company.capacity}</p>
                
                <h2 className="people-title">People:</h2>
                <ul className="people-list">
                    {company.people.map((person, index) => (
                        <li key={index} className="person-item">{person.name}</li>
                    ))}
                </ul>

                {/* زر لعرض نموذج الطلب */}
                <button className="order-button" onClick={handleEnrollClick}>Place an Order</button>

                {/* نموذج الطلب */}
                {showOrderForm && (
     <form onSubmit={handleSubmitOrder} className="order-form">
     <h2>تفاصيل الطلب </h2>
     <div className="form-group">
         <label>الاسم:</label>
         <input 
             type="text" 
             value={name} 
             onChange={(e) => setName(e.target.value)} 
             required 
         />
     </div>
     <div className="form-group">
         <label>البريد الالكتروني:</label>
         <input 
             type="email" 
             value={email} 
             onChange={(e) => setEmail(e.target.value)} 
             required 
         />
     </div>
     <div className="form-group">
         <label>الموقع:</label>
         <input 
             type="text" 
             value={address} 
             onChange={(e) => setAddress(e.target.value)} 
             required 
         />
     </div>
     <div className="form-group">
         <label>رقم الهاتف:</label>
         <input 
             type="text" 
             value={phone} 
             onChange={(e) => setPhone(e.target.value)} 
             required 
         />
     </div>
     <div className="form-group">
         <label>طريقة الدفع :</label>
         <select 
             value={paymentMethod} 
             onChange={(e) => setPaymentMethod(e.target.value)} 
             required
         >
             <option value="">اختر طريقة الدفع</option>
             <option value="Credit Card">البطاقة البنكية</option>
             <option value="PayPal">باليد</option>
             <option value="Bank Transfer">تحويل البنكي </option>
         </select>
     </div>
     <div className="form-group">
         <label> رفع السيرة الذاتية:</label>
         <input 
             type="file" 
             onChange={(e) => setCvFile(e.target.files[0])} 
             accept=".pdf,.doc,.docx" // قبول فقط ملفات PDF و Word
             required 
         />
     </div>
     <button type="submit" className="submit-order-button">ارسال الطلب </button>
 </form>
)}

            </div>
        </div>
    );
};

export default CompanyDetails;
