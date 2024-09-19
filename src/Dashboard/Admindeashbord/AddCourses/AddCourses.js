import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './AddCourses.css'; // يمكنك تخصيص التصميم هنا
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const AddCourse = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [course, setCourse] = useState({
    title: '',
    description: '',
    duration: '',
    level: '',
    price: '',
    image: '',
    
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/courses', course);
      
      toast.success('تم إضافة الكورس بنجاح!');
      setTimeout(() => navigate("/Courses"), 2000);
      setCourse({
        title: '',
        description: '',
        duration: '',
        level: '',
        price: '',
        image: '',
        
      });
    } catch (error) {
      console.error('Error adding course:', error);
     
      toast.error('حدث خطأ أثناء إضافة الكورس.');
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
    <div className="add-course">
      <h2>إضافة كورس جديد</h2>
      <form onSubmit={handleSubmit}>
        <label>
          العنوان:
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          الوصف:
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          المدة:
          <input
            type="text"
            name="duration"
            value={course.duration}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          المستوى:
          <input
            type="text"
            name="level"
            value={course.level}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          السعر:
          <input
            type="number"
            name="price"
            value={course.price}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          صورة:
          <input
            type="text"
            name="image"
            value={course.image}
            onChange={handleChange}
            required
          />
        </label>
       
        <button type="submit">إضافة الكورس</button>
      </form>
    </div>
  );
};
}

export default AddCourse;
