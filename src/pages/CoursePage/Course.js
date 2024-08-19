// App.js
import React, { useState } from "react";
import CourseCard from "../../components/CoursCard/CoursCard";
import "./Course.css";
import AdsSection from "../../components/Ads/Ads";
import pic1 from "../../assets/picturs/ads/About us page-rafiki.png"
import pic2 from "../../assets/picturs/ads/Contact us-amico.png"
import pic3 from "../../assets/picturs/ads/Coworking-rafiki.png"
import pic4 from "../../assets/picturs/ads/Business mission-pana.png"
const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn the basics of React, a popular JavaScript library for building user interfaces.",
      image: "https://via.placeholder.com/300",
      instructor: "John Doe",
      duration: "3 hours",
      specialization: "Web Development",
    },
    {
      id: 2,
      title: "Advanced React",
      description: "Dive deeper into React and learn about hooks, context API, and more.",
      image: "https://via.placeholder.com/300",
      instructor: "Jane Smith",
      duration: "5 hours",
      specialization: "Web Development",
    },
    {
      id: 3,
      title: "Data Science with Python",
      description: "Learn data science concepts and how to apply them using Python.",
      image: "https://via.placeholder.com/300",
      instructor: "Alice Johnson",
      duration: "6 hours",
      specialization: "Data Science",
    },
    // أضف المزيد من الدورات هنا
  ];
  
  const ads = [
    pic1,
    pic2,
    pic3,
    pic4,
  ];
const specializations = ["All", "Web Development", "Data Science"];

export default function Courses  (){
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  const filteredCourses = selectedSpecialization === "All"
    ? courses
    : courses.filter(course => course.specialization === selectedSpecialization);

  return (
    <div className="Courses-page">
      <h1 className="Courses-page-tital">الكورسات المتاحة في المنصة</h1>
      <p className="Courses-page-p">جميع التخصصات المتاحة في المنصة من اجل التعلم وتحسين 
المستوى في جميع المجاالت واكتساب خبرات وكفاءات تأهلك لسوق 
العمل
      </p>
      <div className="specialization-buttons">
        {specializations.map((specialization) => (
          <button
            key={specialization}
            className={`specialization-button ${selectedSpecialization === specialization ? "active" : ""}`}
            onClick={() => setSelectedSpecialization(specialization)}
          >
            {specialization}
          </button>
        ))}
      </div>
      <section className="partners">
        <h2>شركاؤنا</h2>
        <div className="ads-container">
        <AdsSection ads={ads} />
        <AdsSection ads={ads} />
        <AdsSection ads={ads} />
        </div>
      </section>
      <p className="Courses-page-p">وظائف المهمة بالمنصة
و طور نفسك لتحدث نقلة نوعية في مسيرتك المهنية من خالل:<br></br>
البرامج المصممة لتزويدك بالمهارات التي تحتاجها الستكشاف طاقاتك وامكانياتك الذاتية 
اكتساب المهارات المطلوبة في سوق العمل مع افضل المدرسين والخبراء والمتخصصين
التعلم في اي وقت عبر حاسوبك او هاتفك المتنقل.
تميزك بمهارات مستمرة وذلك بالتعلم والتطور تأهلك في سوق العمل      </p>
      <div className="course-list">
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
            instructor={course.instructor}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  );
};

