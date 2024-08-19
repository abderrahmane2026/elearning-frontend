import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import "./LecturesCard.css"; // ملف CSS مخصص لبطاقات المحاضرات

export default function CourseCard({ id, image, name, new_price, moreButton }) {
    const navigate = useNavigate();
  
    const handleMoreClick = () => {
        navigate(`/lectures/${id}`);
    };
  
    return (
      <div className="course-card">
        <img src={image} alt={name} className="course-image" />
        <div className="course-details">
          <h3>{name}</h3>
          <p>السعر: {new_price} دج</p>
          {moreButton && (
            <button className="more-button" onClick={handleMoreClick}>
              المزيد
            </button>
          )}
        </div>
      </div>
    );
  }