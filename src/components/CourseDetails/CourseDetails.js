// CourseDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
    </div>
  );
};

export default CourseDetails;
