import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import "./CompanyDetailsPage.css";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-modal"; // Import Modal

const CompanyDetails = () => {
    const user = JSON.parse(window.localStorage.getItem("userr"));
   
    const userId = user?._id;
   
   
  
    const [formData, setFormData] = useState({
        fullName: "",
        wilaya: "",
        registrationNumber: "",
        address: "",
        email: "",
        phoneNumber: "",
        educationLevel: "",
        specialization: "",
        thesisTitle: "",
        status: "",
        institutionName: "",
        institutionAddress: "",
        companyName: "",
        userId:userId,
        cv: null,
      });
    
      const [isModalOpen, setIsModalOpen] = useState(false);
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, cv: e.target.files[0] });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
    
        for (let key in formData) {
          data.append(key, formData[key]);
        }
    
        try {
          const response = await axios.post("http://localhost:5000/api/form", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          toast.success("تم ارسال الطلب بنجاح ستجد باقي التفاصيل في صفحة طلباتي  :")
          console.log("Student added successfully:", response.data);
        } catch (error) {
          toast.error(("حدث خطا"));
          console.error("There was an error adding the student:", error);
        }
      };
    
      const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
      const [selectedOption, setSelectedOption] = useState('option1');
      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
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

    
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/companies/${id}`);
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
          
           
    
            await axios.post('http://localhost:5000/api/order/submit', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success("تم ارسال الطلب بنجاح ستجد باقي التفاصيل في صفحة طلباتي  :")
            alert('تم ارسال الطلب بنجاح ستجد باقي التفاصيل في صفحة طلباتي  ' );
        } catch (error) {
            toast.error(("حدث خطا"));
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
       <div className="form-container">
       
       <form onSubmit={handleSubmit} className="student-form">
         <label>الاسم الكامل:</label>
         <input type="text" name="fullName" placeholder="أدخل الاسم الكامل" value={formData.fullName} onChange={handleChange} required />
 
         <label>الولاية:</label>
         <input type="text" name="wilaya" placeholder="أدخل الولاية" value={formData.wilaya} onChange={handleChange} required />
 
         <label>رقم التسجيل:</label>
         <input type="text" name="registrationNumber" placeholder="أدخل رقم التسجيل" value={formData.registrationNumber} onChange={handleChange}  />
 
         <label>العنوان:</label>
         <input type="text" name="address" placeholder="أدخل العنوان" value={formData.address} onChange={handleChange} required />
 
         <label>البريد الإلكتروني:</label>
         <input type="email" name="email" placeholder="أدخل البريد الإلكتروني" value={formData.email} onChange={handleChange} required />
 
         <label>رقم الهاتف:</label>
         <input type="text" name="phoneNumber" placeholder="أدخل رقم الهاتف" value={formData.phoneNumber} onChange={handleChange} required />
 
         <label>المستوى التعليمي:</label>
         <select name="educationLevel" value={formData.educationLevel} onChange={handleChange} required>
           <option value="">اختر</option>
           <option value="دون مستوى">دون مستوى</option>
           <option value="ابتدائي">ابتدائي</option>
           <option value="متوسط">متوسط</option>
           <option value="ثانوي">ثانوي</option>
           <option value="جامعي">جامعي</option>
         </select>
 
         <label>التخصص:</label>
         <input type="text" name="specialization" placeholder="أدخل التخصص" value={formData.specialization} onChange={handleChange} />
 
         <label>عنوان المذكرة:</label>
         <input type="text" name="thesisTitle" placeholder="أدخل عنوان الأطروحة" value={formData.thesisTitle} onChange={handleChange} />
 
         <label>الحالة:</label>
         <select name="status" value={formData.status} onChange={handleChange} required>
           <option value="">اختر</option>
           <option value="طالب جامعي">طالب جامعي</option>
           <option value="موظف">موظف</option>
           <option value="مؤسسة">مؤسسة</option>
           <option value="متمهن">متمهن</option>
           <option value="أستاذ/ة">أستاذ/ة</option>
           <option value="مواطن حر">مواطن حر</option>
         </select>
         
         
        
        
         <label>السيرة الذاتية: <button type="button" onClick={openModal} className="note-button">ملاحظة</button></label>
         <input type="file" name="cv" onChange={handleFileChange} required />
         
 
 
         <button type="submit" className="submit-button">إضافة الطالب</button>
       </form>
 
        {/* Modal for the note */}
        <Modal
         isOpen={isModalOpen}
         onRequestClose={closeModal}
         contentLabel="Note Modal"
         className="note-modal-company"
         overlayClassName="note-modal-overlay"
       >
         <h2>ملاحظات:</h2>
         <p>-  مؤسسة المركزية : اسم المؤسسة، عنوان مقرها المركزي، الولاية ، رقم هاتف، البريد الالكتروني، اسم ولقب المدير أو المحاسب أو المسؤول، ارسال الموضوع والامضاء في الورقة المرسلة الى المنصة من طرف المدير او المسؤول.
 <br/>- المؤسسة الفرع: اسمها المؤسسة الام التابعة لها، اسم الفرع، الولاية، رقم هاتف، البريد الالكتروني، اسم ولقب المدير أو المحاسب أو المسؤول، ارسال الموضوع والامضاء في الورقة المرسلة الى المنصة من طرف المدير او المسؤول.
 <br/>-بالنسبة للعاطلين عن العمل: يقوم بإرسال شهادة البطالة وتصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية مثلا البلدية التابعة لمقر سكنه بالإضافة إلى شهادة سابقة تثبت تكوينه في نفس المجال ان وجدت وشهادة تثبت مستواه الدراسي بصيغة PDF) ).
 <br/>- بالنسبة للأستاذ أو الموظف: شهادة عمل + la convention  +  la demande de stage بالمعلومات المتوفرة في المنصة عن المؤسسة المختارة للتربص فيها، او المرغوبة من طرفكم مختومة وممضية من طرف المدير أو المسؤول عن المؤسسة المرخصة له بالقيام بالتربص ان وجدت، او تصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية مثلا البلدية التابعة لمقر سكنه أو من طرف مديره بالإضافة إلى شهادة تثبت تكوينه في نفس المجال إن وجدت +إرسال شهادة تثبت مستواه الدراسي بصيغة.(PDF) 
 <br/> -مواطن حر: إرسال تصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية مثلا البلدية+ شهادة تثبت تكوينه في نفس المجال إن وجدت إرسال شهادة تثبت مستواه الدراسي بصيغة (PDF) .
 <br/>-  بالنسبة للطالب أو المتمهن : إرسال la demande de stage  +la convention  بالمعلومات المتوفرة في المنصة عن المؤسسة المراد التربص عندها، أو المرغوبة من طرفكم مختومة وممضية من طرف المدير أو المسؤول عن المؤسسة المرخصة له بالقيام بالتربص و شهادة تثبت تكوينه في نفس المجال إن وجدت وشهادة تثبت مستواه الدراسي بصيغة  .(PDF) .
 <br/>- دون المستوى وبعمل: شهادة عمل + la convention ou la demande de stage بالمعلومات المتوفرة في المنصة عن المؤسسة المختارة للتربص فيها  أو المرغوبة من طرفكم مختومة وممضية من طرف المدير أو المسؤول عن المؤسسة المرخصة له بالقيام بالتربص إن وجدت أو تصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية وشهادة تثبت تكوينه في نفس المجال إن وجدت.
 <br/>- دون مستوى ولا يعمل: يقوم بإرسال تصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية مثلا البلدية التابعة لمقر سكنه أو المصلحة التي يعمل عندها + شهادة تثبت تكوينه في نفس المجال ان وجدت.
 
 
 </p>
         {/* Add all other points here */}
         <button onClick={closeModal} className="close-modal-button">إغلاق</button>
       </Modal>
 
       <ToastContainer />
     </div>

     
)}


            </div>
        </div>
    );
};

export default CompanyDetails;
