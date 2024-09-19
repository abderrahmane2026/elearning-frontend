import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CourseDetails.css';

const CourseDetailsPage = () => {
  const { id } = useParams(); 
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [cvFile, setCvFile] = useState(null);

  const user = JSON.parse(window.localStorage.getItem("userr"));
  const userId = user?._id;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourse(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching course details');
        setLoading(false);
      }
    };

    fetchCourse();
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
        formData.append('catigory', 'Course');
        formData.append('nameofchois', course.title);
        formData.append('cv', cvFile);

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

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="course-details">
         <div className="course-content">
      <img src={course.image} alt={course.title} className="course-image" />
      <h1 className="course-title">{course.title}</h1>
      <p className="course-description">{course.description}</p>
      <p className="course-duration"><strong>التفاصيل:</strong> {course.duration}</p>
      <p className="course-level"><strong>المستوي:</strong> {course.level}</p>
      <p className="course-price"><strong>السعر:</strong> دج{course.price}</p>
     <p className="course-description">سجل الان وابدأ رحلتك التعليمية
     اكتسب مهارات جديدة وتميز في سوق العمل بمهاراتك
     
     </p>
      <button className="enroll-button" onClick={handleEnrollClick}>اطلب الان </button>


      {showOrderForm && (
      <form onSubmit={handleSubmitOrder} className="order-form">
      <h2>تفاصيل الطلب </h2>
      <div className="form-group">
          <label>الاسم و اللقب:</label>
          <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
          />
      </div>
      <div className="form-group">
          <label> رقم التسجيل:</label>
          <input 
              type="number" 
              
              required 
          />
      </div>
      <div className="form-group">
          <label> رقم بطاقة التعريف الوطني:</label>
          <input 
              type="number" 
              
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
          <label>العنوان:</label>
          <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required 
          />
      </div>
      <div className="form-group">
          <label> المستوى الدراسي :</label>
          <select 
             
          >
              <option >  الابتدائي</option>
              <option > المتوسط</option>
              <option >الثانوي</option>
              <option > الجامعي </option>
          </select>
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
          <label> شهادة عمل + شهادة مستوى الدراسي  :</label>
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

export default CourseDetailsPage;
