import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoursCard.css';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate(`/courses/${course._id}`); 
  };

  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <h3 className="course-title">{course.title}</h3>
      <p className="course-price">{course.price} دج</p>
      <button onClick={handleShowMore} className="show-more-button">Show More</button>
    </div>
  );
};

export default CourseCard;
