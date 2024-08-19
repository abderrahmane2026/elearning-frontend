// src/components/CoursesPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Course.css'; // Add your CSS file for styling
import CourseCard from '../../components/CoursCard/CoursCard';
import SuccessPartners from '../../components/SuccessPartners/SuccessPartners';
import FAQsCourse from './FAQsCourse';

const CoursesPage = () => {


  const partnersData = [
    { name: 'Partner 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPpSrpG8_aPQGW8o4V-Nq9tUmy4HClxDNkQ&s' },
    { name: 'Partner 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPpSrpG8_aPQGW8o4V-Nq9tUmy4HClxDNkQ&s' },
    { name: 'Partner 1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPpSrpG8_aPQGW8o4V-Nq9tUmy4HClxDNkQ&s' },
    { name: 'Partner 2', image: 'data:image/png;base64,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' },
    { name: 'Partner 3', image: 'data:image/jpeg;base64,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' },
    // أضف المزيد من الشركاء هنا
  ];

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses'); // Adjust the URL if needed
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching courses');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);




  if (loading) return <div> <div>
  <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl pb-10">
  دورات تعليمية معتمدة في 
                     <span className="text-indigo-600 mt-4"> مختلف المجالات</span>
                </h1>
                <p className="text-gray-700 py-3 text-lg font-semibold">
                ابدأ رحلتك التعليمية واكتسب مهارات جديدة من خالل االلتحاق بدورات تعليمية في مختلف المجاالت وأحصل على شهادات تساعدك للدخول الى سوق العمل وتطوير مسيرتك المهنية
                </p>
                <p className="text-gray-700 py-2 text-lg font-semibold">
                دورات تعليمية
مجموعة كبيرة ومتنوعة من أكثر 
الدورات كفاءة وجودة في مختلف 
المجاالت                </p>
                <p className="text-gray-700 py-2 text-lg font-semibold">
                تعليم مرن
تعلم من مكان واحد، عبر حاسوبك 
الشخصي أو هاتفك المحمول            
    </p> 

<p className="text-gray-700 py-2 text-lg font-semibold">
احصل على شهادة 
لتعزز فرصك في اطالق مسيرتك 
المهنية، أو تنميتها وتطويرها

                </p>
  <h1>كل الدورات التدريبية</h1>
  <div className="courses-grid">
    {courses.map(course => (
      <CourseCard key={course._id} course={course} /> // Use CourseCard component
    ))}
  </div>
  <div>
      
      <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl pb-10">
      شركاؤنا في                
       <span className="text-indigo-600 mt-4">  النجاح</span>
                </h1>
      <SuccessPartners partners={partnersData} />
<FAQsCourse/>
    </div>
</div>

<div>
Loading...
</div>
</div>
;

 
  return (
    <div>
    <div>
    <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl pb-10">
  دورات تعليمية معتمدة في 
                     <span className="text-indigo-600 mt-4"> مختلف المجالات</span>
                </h1>
                <p className="text-gray-700 py-3 text-lg font-semibold">
                ابدأ رحلتك التعليمية واكتسب مهارات جديدة من خالل االلتحاق بدورات تعليمية في مختلف المجاالت وأحصل على شهادات تساعدك للدخول الى سوق العمل وتطوير مسيرتك المهنية
                </p>
                <p className="text-gray-700 py-2 text-lg font-semibold">
                دورات تعليمية
مجموعة كبيرة ومتنوعة من أكثر 
الدورات كفاءة وجودة في مختلف 
المجاالت                </p>
                <p className="text-gray-700 py-2 text-lg font-semibold">
                تعليم مرن
تعلم من مكان واحد، عبر حاسوبك 
الشخصي أو هاتفك المحمول            
    </p> 

<p className="text-gray-700 py-2 text-lg font-semibold">
احصل على شهادة 
لتعزز فرصك في اطالق مسيرتك 
المهنية، أو تنميتها وتطويرها

                </p>
                <p className="text-gray-700 py-2 text-lg font-semibold">
                توفر المنصة عدد كبير من الدورات التدريبية في مجاالت مختلفة 
والتخصصات يقدمها أفضل المحاضرين المتميزين من خالل إطالق 
دوراتهم المجانية أو المدفوعة عبر المنصة، كما يمكن للطالب 
الحصول على شهادات إتمام الدورات بشكل إلكتروني بعد استكمال 
متطلبات الدورة ، من اجل التعلم واكتساب خبرات وكفاءات تأهلك 
لسوق العمل،

                </p>
                <p className="text-gray-700 py-2 text-lg font-semibold" >وظائف المهمة بالمنصة
طور نفسك لتحدث نقلة نوعية في مسيرتك المهنية من خالل:
البرامج المصممة لتزويدك بالمهارات التي تحتاجها الستكشاف طاقاتك وامكانياتك الذاتية 
اكتساب المهارات المطلوبة في سوق العمل مع افضل المدرسين والخبراء والمتخصصين
التعلم في اي وقت عبر حاسوبك او هاتفك المتنقل.
تميزك بمهارات مستمرة وذلك بالتعلم والتطور تأهلك في سوق العمل</p>
                <h1>كل الدورات التدريبية</h1>
  <div className="courses-grid">
    {courses.map(course => (
      <CourseCard key={course._id} course={course} /> // Use CourseCard component
    ))}
  </div>

  <div>
      
      <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl pb-10">
      شركاؤنا في                
       <span className="text-indigo-600 mt-4">  النجاح</span>
                </h1>
      <SuccessPartners partners={partnersData} />
<FAQsCourse/>
    </div>

</div>


</div>

  );
};

export default CoursesPage;
