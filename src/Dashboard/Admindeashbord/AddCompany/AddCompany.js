import React, { useState } from 'react';
import axios from 'axios';
import './AddCompany.css'; // استيراد ملف CSS

const NewCompanyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone_number: '',
        email: '',
        price: '',
        detail: '',
        image: '',
        capacity: '',
        contracted: false, // New field for contracted status
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/companies', formData);
            console.log('Company created:', response.data);
            alert('تمت إضافة الشركة بنجاح!');
            // مسح النموذج بعد الإرسال
            setFormData({
                name: '',
                address: '',
                phone_number: '',
                email: '',
                price: '',
                detail: '',
                image: '',
                capacity: '',
                contracted: false, // Reset contracted status
            });
        } catch (error) {
            console.error('Error creating company:', error);
            alert('حدث خطأ أثناء إضافة الشركة.');
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">إضافة شركة جديدة</h2>
            <form onSubmit={handleSubmit} className="company-form">
                <div className="form-group">
                    <label>الاسم:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>العنوان:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>رقم الهاتف:</label>
                    <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>البريد الإلكتروني:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>السعر:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>التفاصيل:</label>
                    <input
                        type="text"
                        name="detail"
                        value={formData.detail}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>رابط الصورة:</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>الكمية (الحد الأقصى لعدد الأشخاص):</label>
                    <input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name="contracted"
                            checked={formData.contracted}
                            onChange={handleChange}
                            className="form-checkbox"
                        />
                        الشركة متعاقدة معنا
                    </label>
                </div>
                <button type="submit" className="submit-button">إضافة الشركة</button>
            </form>
        </div>
    );
};

export default NewCompanyForm;
