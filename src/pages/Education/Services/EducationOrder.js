import React, { useState } from 'react';
import axios from 'axios';
import './EducationOrder.css'; // تأكد من إنشاء ملف CSS لتنسيق الصفحة

const EducationOrder = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        specialization: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://develop-yourself.onrender.com/api/EducationOrder', formData);
            console.log(response.data);
            alert('Request submitted successfully');
            
        } catch (error) {
            console.error('Error submitting request', error);
            alert('Failed to submit request');
        }
    };

    return (
        <div className="request-form-container">
            <h2>إضافة طلب</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="studentName">اسم و اللقب</label>
                    <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="studentName">المستوى الدراسي</label>
                    <select  type="text"           
                       required
                       >
                        <option>ابتدائي</option>
                        <option>متوسط</option>
                        <option>ثانوي</option>
                        <option>جامعي</option>
                    </select>
                       
                    
                </div>
                <div className="form-group">
                    <label htmlFor="studentName">رقم التسجيل </label>
                    <input
                        type="number"
                       
                       
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="studentName">رقم بطاقة التعريف </label>
                    <input
                        type="text"                                            
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="studentName">العنوان    </label>
                    <input
                        type="text"                                            
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="studentName">  البريد اللكتروني </label>
                    <input
                        type="text"                                            
                        required
                    />
                </div>
              
                <div className="form-group">
                    <label htmlFor="studentName">   رقم الهاتف </label>
                    <input
                        type="number"                                            
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="specialization">التخصص</label>
                    <input
                        type="text"
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">وصف الطلب  </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                 <div className="form-group">
                    <label htmlFor="studentName">  شهادة عمل + شهادة تثبت  المستوى الدراسي  </label>
                    <input
                        type="file"                                            
                        required
                    />
                </div>
                <button type="submit">إرسال الطلب</button>
            </form>
        </div>
    );
};

export default EducationOrder;
