import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './AddLecture.css'; // استيراد ملف CSS المخصص لهذه الصفحة

const AddLecture = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [details, setDetails] = useState('');
    const [lecturers, setLecturers] = useState([{ name: '', image: '', bio: '' }]);

    const handleLecturerChange = (index, field, value) => {
        const newLecturers = [...lecturers];
        newLecturers[index][field] = value;
        setLecturers(newLecturers);
    };

    const addLecturer = () => {
        setLecturers([...lecturers, { name: '', image: '', bio: '' }]);
    };

    const removeLecturer = (index) => {
        const newLecturers = lecturers.filter((_, i) => i !== index);
        setLecturers(newLecturers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newLecture = {
            title,
            image,
            price,
            category,
            details,
            lecturers,
        };

        try {
            const response = await axios.post('http://localhost:5000/api/lectures', newLecture);
            console.log('Lecture created:', response.data);
            // قم بإعادة توجيه المستخدم أو عرض رسالة تأكيد
        } catch (error) {
            console.error('Error creating lecture:', error);
        }
    };
    const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = JSON.parse(window.localStorage.getItem("userr"));
        setCurrentUser(user);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>{("loading")}</div>;
  }

  if (error) {
    return <div>{("error")}: {error}</div>;
  }

  if (!currentUser) {
    return <div>{("user_not_found")}</div>;
  }

  if (currentUser.role !== "Mr") {
    return <div>{("you_must_be_active")}</div>;
  }

  if (currentUser.sellerStatus === "requested") {
    return (
      <div>
        {("review_request")}
      </div>
    );
  }

  if (currentUser.sellerStatus === "refused") {
    return <div>{("request_refused")}</div>;
  }

  if (currentUser.sellerStatus === "accepted") {

    return (
        <div className="add-lecture-container">
            <h2 className="form-title">إضافة محاضرة جديدة</h2>
            <form onSubmit={handleSubmit} className="add-lecture-form">
                <div className="form-group">
                    <label>عنوان المحاضرة:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>صورة المحاضرة:</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>سعر المحاضرة:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>تصنيف المحاضرة:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">اختر التصنيف</option>
                        <option value="ابتدائي">ابتدائي</option>
                        <option value="متوسط">متوسط</option>
                        <option value="ثانوي">ثانوي</option>
                        <option value="جامعي">جامعي</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>تفاصيل المحاضرة:</label>
                    <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                    ></textarea>
                </div>

                <h3 className="section-title">المحاضرون</h3>
                {lecturers.map((lecturer, index) => (
                    <div key={index} className="lecturer-group">
                        <div className="form-group">
                            <label>اسم المحاضر:</label>
                            <input
                                type="text"
                                value={lecturer.name}
                                onChange={(e) => handleLecturerChange(index, 'name', e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>صورة المحاضر:</label>
                            <input
                                type="text"
                                value={lecturer.image}
                                onChange={(e) => handleLecturerChange(index, 'image', e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>تعريف المحاضر:</label>
                            <textarea
                                value={lecturer.bio}
                                onChange={(e) => handleLecturerChange(index, 'bio', e.target.value)}
                            ></textarea>
                        </div>
                        <button type="button" className="remove-button" onClick={() => removeLecturer(index)}>حذف المحاضر</button>
                    </div>
                ))}
                <button type="button" className="add-button" onClick={addLecturer}>إضافة محاضر آخر</button>

                <div>
                    <button type="submit" className="submit-button">إضافة المحاضرة</button>
                </div>
            </form>
        </div>
    );
};
}

export default AddLecture;
