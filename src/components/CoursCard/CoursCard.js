// CourseCard.js
import React from "react";
import "./CoursCard.css";
import { Link } from "react-router-dom";

const CourseCard = ({id, title, description, image, instructor, duration }) => {
    return (
      <div className="course-card">
        <Link to={`/course/${id}`} style={{textDecoration:'none'}}>
        <img src={image} alt={title} className="course-card-image" />
        <div className="course-card-content">
          <h3 className="course-card-title">{title}</h3>
          <p className="course-card-description">{description}</p>
          <div className="course-card-details">
            <p className="course-card-instructor">Instructor: {instructor}</p>
            <p className="course-card-duration">Duration: {duration}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  };

export default CourseCard;
