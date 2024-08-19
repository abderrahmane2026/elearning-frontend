import React, { useEffect, useState } from "react";
import axios from "axios";
import "./orderstudent.css"; // Import the CSS file for styling

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/form/");
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/form/${id}`);
      setStudents(students.filter((student) => student._id !== id));
      alert("تم حذف الطالب بنجاح");
    } catch (err) {
      alert("حدث خطأ أثناء محاولة حذف الطالب");
      console.error(err);
    }
  };

  if (loading) return <p>جار التحميل...</p>;
  if (error) return <p>خطأ: {error}</p>;

  return (
    <div className="students-container">
      <h2>كل الطلاب</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>الاسم الكامل</th>
            <th>الولاية</th>
            <th>رقم التسجيل</th>
            <th>البريد الإلكتروني</th>
            <th>رقم الهاتف</th>
            <th>المستوى التعليمي</th>
            <th>الحالة</th>
            <th>اسم المؤسسة</th>
            <th>عنوان المؤسسة</th>
            <th>السيرة الذاتية</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.fullName}</td>
              <td>{student.wilaya}</td>
              <td>{student.registrationNumber}</td>
              <td>{student.email}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.educationLevel}</td>
              <td>{student.status}</td>
              <td>{student.institutionName}</td>
              <td>{student.institutionAddress}</td>
              <td>
                <a href={`http://localhost:5000/uploads/${student.cv}`} download>
                  تحميل السيرة الذاتية
                </a>
              </td>
              <td>
                <button onClick={() => handleDelete(student._id)} className="delete-button">
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
