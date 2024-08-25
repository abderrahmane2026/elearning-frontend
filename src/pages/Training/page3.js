import React, { useState } from "react";
import axios from "axios";
import "./page3.css"; // Import the CSS file for styling
import { toast, ToastContainer } from "react-toastify";

import Modal from "react-modal"; // Import Modal

Modal.setAppElement('#root'); // Set the root element for accessibility


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
      const response = await axios.post("https://develop-yourself.onrender.com/api/form", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("تم ارسال الطلب بنجاح ستجد باقي التفاصيل في صفحة طلباتي  :")
      console.log("Student added successfully:", response.data);
    } catch (error) {
      toast.error(("حدث خطا"));
      console.error("There was an error adding the student:", error)
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
  return (
    <div className="form-container">
      <h1 className="form-title"> تاكيد المنصة قبول التربص / التكوين عند المؤسسة المرغوبة من المستخدم</h1>
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

        <div>
        <label>
        <input
          type="radio"
          name="options"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
         تربص ميداني
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="options"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
         تكوين
      </label>
      </div>
      
        <label>اسم المؤسسة:</label>
        <input type="text" name="institutionName" placeholder="أدخل اسم المؤسسة" value={formData.institutionName} onChange={handleChange} />

        <label>تفاصيل المؤسسة :</label>
        <input type="text" name="institutionAddress" placeholder="أدخل عنوان المؤسسة" value={formData.institutionAddress} onChange={handleChange} />

        <label>الملف المطلوب : <button type="button" onClick={openModal} className="note-button">ملاحظة</button></label>
        <input type="file" name="cv" onChange={handleFileChange} required />

        <button type="submit" className="submit-button">إضافة الطالب</button>
      </form>

      {/* Modal for the note */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Note Modal"
        className="note-modal"
        overlayClassName="note-modal-overlay"
      >
        <h2>ملاحظات:</h2>
        <p>-إرسال شهادة البطالة  + إرسال تصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية مثلا البلدية التابعة لمقر سكنه .
+شهادة سابقة تثبت تكوينه في نفس المجال ان وجدت+إرسال شهادة تثبت مستواه الدراسي بصيغة PDF). ...(بالنسبة للعاطلين عن العمل).
- شهادة عمل + la convention + la demande de stage بالمعلومات المتوفرة في المنصة عن المؤسسة المختارة للتربص فيها مختومة مختومة وممضية من طرف المدير أو المسؤول عن المؤسسة المرخصة له بالقيام بالتربص ان وجدت او تصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية مثلا البلدية التابعة لمقر سكنه او من طرف مديره + إ شهادة تثبت تكوينه في نفس المجال ان وجدت +ارسال شهادة تثبت مستواه الدراسي بصيغة PDF……(بالنسبة للأستاذ أو الموظف)
- إرسال تصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية مثلا البلدية+ شهادة تثبت تكوينه في نفس المجال ان وجدت إرسال شهادة تثبت مستواه الدراسي بصيغة PDF...... (مواطن حر) .
- إرسال (بالنسبة للطالب او المتمهن) :  la demande de stage  +la convention  بالمعلومات المتوفرة في المنصة عن المؤسسة المراد التربص عندها مختومة وممضية من طرف المدير أو المسؤول عن المؤسسة المرخصة له بالقيام بالتربص + شهادة تثبت تكوينه في نفس المجال ان وجدت +شهادة تثيت مستواه الدراسيpdf.
- شهادة عمل + la convention ou la demande de stageمختومة وممضية من طرف المدير أو المسؤول عن المؤسسة المرخصة له بالقيام بالتربص ان وجدت او تصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية + شهادة تثبت تكوينه في نفس المجال ان وجدت......(اذا كان دون المستوى وبعمل).
- يقوم بإرسال تصريح شرفي يثبث الهدف من طلب إجراء التربص وفي أي غرض سيقوم به ممضية من طرفه ومختوم عليها من الجهات المعنية مثلا البلدية التابعة لمقر سكنه أو المصلحة التي يعمل عندها+شهادة تثبت تكوينه في نفس المجال ان وجدت.......دون مستوى

</p>
        {/* Add all other points here */}
        <button onClick={closeModal} className="close-modal-button">إغلاق</button>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default AddStudent;
