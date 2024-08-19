import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./LectureDetailsPage.css";

export default function LectureDetailsPage() {
  const { id } = useParams();
  const [lecture, setLecture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // State for order details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showOrderForm, setShowOrderForm] = useState(false); // Control order form visibility
  const [cvFile, setCvFile] = useState(null); // State لتخزين ملف السيرة الذاتية

  const user = JSON.parse(window.localStorage.getItem("userr"));
  const userId = user?._id;

  
  useEffect(() => {
    const fetchLectureDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/lectures/${id}`);
        setLecture(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching lecture details');
        setLoading(false);
      }
    };

    fetchLectureDetails();
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
        formData.append('catigory', 'Lecture');
        formData.append('nameofchois', lecture.title);
        formData.append('cv', cvFile); // إضافة ملف السيرة الذاتية إلى FormData

        await axios.post('http://localhost:5000/api/order/submit', formData, {
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

  return (
    <div className="lecture-details-page">
      <div className="lecture-header">
        <img src={lecture.image} alt={lecture.title} className="lecture-image" />
        <div className="lecture-info">
          <h1>{lecture.title}</h1>
          <p>التصنيف: {lecture.category}</p>
          <p>السعر: {lecture.price} دج</p>
          <p>{lecture.details}</p>
        </div>
      </div>

      <h2>المحاضرون:</h2>
      <div className="lecturers">
        {lecture.lecturers.map((lecturer, index) => (
          <div key={index} className="lecturer-card">
            <img src={lecturer.image} alt={lecturer.name} className="lecturer-image" />
            <div className="lecturer-info">
              <h3>{lecturer.name}</h3>
              <p>{lecturer.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="order-button" onClick={handleEnrollClick}>قم بتقديم طلب الان</button>

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
  );
}
