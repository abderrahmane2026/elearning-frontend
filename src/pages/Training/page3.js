import React, { useState } from "react";
import axios from "axios";
import "./page3.css"; // Import the CSS file for styling

const AddStudent = () => {
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
    cv: null,
  });

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
      console.log("Student added successfully:", response.data);
    } catch (error) {
      console.error("There was an error adding the student:", error);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title"> التربص في المؤسسات المرغوبة من طرف المستخدم </h1>
      <form onSubmit={handleSubmit} className="student-form">
        <label>الاسم الكامل:</label>
        <input type="text" name="fullName" placeholder="أدخل الاسم الكامل" value={formData.fullName} onChange={handleChange} required />

        <label>الولاية:</label>
        <input type="text" name="wilaya" placeholder="أدخل الولاية" value={formData.wilaya} onChange={handleChange} required />

        <label>رقم التسجيل:</label>
        <input type="text" name="registrationNumber" placeholder="أدخل رقم التسجيل" value={formData.registrationNumber} onChange={handleChange} required />

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

        <label>عنوان الأطروحة:</label>
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

        <label>اسم المؤسسة:</label>
        <input type="text" name="institutionName" placeholder="أدخل اسم المؤسسة" value={formData.institutionName} onChange={handleChange} />

        <label>تفاصيل المؤسسة :</label>
        <input type="text" name="institutionAddress" placeholder="أدخل عنوان المؤسسة" value={formData.institutionAddress} onChange={handleChange} />

        <label>السيرة الذاتية:</label>
        <input type="file" name="cv" onChange={handleFileChange} required />

        <button type="submit" className="submit-button">إضافة الطالب</button>
      </form>
    </div>
  );
};

export default AddStudent;
