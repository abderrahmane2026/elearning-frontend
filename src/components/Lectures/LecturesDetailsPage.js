import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./LectureDetailsPage.css";
import SuccessPartners from "../SuccessPartners/SuccessPartners";
import { toast, ToastContainer } from "react-toastify";
export default function LectureDetailsPage() {


  const partnersData = [
    { name: 'الاستاذ الاول ', image: 'https://cdn.alweb.com/thumbs/takhassosat/article/fit710x532/%D9%84%D9%82%D8%A8-%D9%8A%D8%B7%D9%84%D9%82-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A.jpg' },
    { name: 'الاستاذالثاني', image: 'data:image/jpeg;base64,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' },
    { name: 'الاستاذ الثالث', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEG72fyTXbBTs59ryOHpjbEEmMrmrTyq37U-7eYiXYI1JpqN2hibhult_KzpAaE_BvzPk&usqp=CAU' },
   
  ];

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
        const response = await axios.get(`https://develop-yourself.onrender.com/api/lectures/${id}`);
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

        await axios.post('https://develop-yourself.onrender.com/api/order/submit', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        toast.success("تم ارسال الطلب بنجاح ستجد باقي التفاصيل في صفحة طلباتي  :")
        
    } catch (error) {
      toast.error(("حدث خطا"));
       
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

      <h2>مجموعة من افضل المدرسين لجميع المراحل الدراسية:</h2>
      <SuccessPartners partners={partnersData} />

      <button className="order-button" onClick={handleEnrollClick}>قم بتقديم طلب الان</button>

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
  );
}
