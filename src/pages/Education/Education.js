import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Education.css";
import LecturesCard from "../../components/Lectures/LecturesCard";
import FAQsEducation from "./FAQsEducation";
import { Link } from "react-router-dom";

export default function LecturesPage() {
  const [lectures, setLectures] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceSort, setPriceSort] = useState("asc");

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await axios.get("https://develop-yourself.onrender.com/api/lectures");
        setLectures(response.data);
      } catch (error) {
        console.error("Error fetching lectures", error);
      }
    };

    fetchLectures();
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceSort = (e) => {
    setPriceSort(e.target.value);
  };

  const filteredLectures = lectures
    .filter((lecture) => {
      return (
        lecture.title.toLowerCase().includes(query.toLowerCase()) &&
        (selectedCategory === "" || lecture.category === selectedCategory)
      );
    })
    .sort((a, b) => {
      return priceSort === "asc"
        ? a.price - b.price
        : b.price - a.price;
    });

  return (
    <div className="lectures-page">

<h1 className="text-gray-800 font-bold text-4xl xl:text-5xl pb-10">
    منصة التعليم لتحسين مستوى  
    <span className="text-indigo-600 mt-4"> الموظفين عن بعد</span>
</h1>

<p className="text-gray-700 py-3 text-lg font-semibold">
    <span className="text-indigo-600 font-bold"> التواصل الفعال:</span> حيث يمكن للموظف في حال عدم فهمه للدرس التواصل المباشر والفوري بسهولة عبر المنصة <br/>
    .(تيليغرام، واتساب، فايسبوك، انستغرام، in)  مع الأستاذ عبر التعليقات أو أحد وسائل التواصل الاجتماعي <br/>
    <span className="text-indigo-600 font-bold"> مشاركة المحتوى:</span> يمكن للمعلم وضع محاضراته التعليمية في شكل فيديوهات مسجلة وتحميلها من طرف <br/>
   . الموظف في أي وقت ومن أي مكان<br/>
    <span className="text-indigo-600 font-bold"> إرسال المهام والاختبارات:</span> تقديم الأعمال إلى الموظفين وتقييم أدائهم عبر المنصة<br/>
    <span className="text-indigo-600 font-bold"> تتبع التقدم:</span> عن طريق تحسين عملية التدريس في كل مرة وتتبع فهم واستيعاب الموظف للدروس<br/>
    <span className="text-indigo-600 font-bold"> مناقشات:</span> كما يمكن مناقشتها في مجموعات وتعزيز التفاعل وتبادل الأفكار والآراء حول المواد التعليمية سواء 
    عن طريق المحادثات الخاصة أو المناقشات الجماعية
</p>

<p className="text-gray-700 py-3 text-lg font-semibold">
    <br/>
    طور مهاراتك المهنية والعلمية مع منصة طور نفسك من خلال سلسلة من الدورات التدريبية المترابطة، والمحاضرات التعليمية واحصل على شهادة تخصص من اجل إضافتها إلى سيرتك الذاتية

</p>

     
                        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl pb-10">
                        التخصصات المتاحة في                          <span className="text-indigo-600 mt-4"> المنصة</span>
                    </h1>
                   <p className="text-gray-700 py-3 text-lg font-semibold"
                   >جميع التخصصات المتاحة في المنصة من اجل التعلم وتحسين المستوى وهي برامج تساعدك على التعمق في مجالات مختلفة
                   <br/>
                   

                   </p>
      {/* مربع البحث */}
      <input
        type="text"
        placeholder="ابحث عن محاضرة..."
        value={query}
        onChange={handleSearch}
        className="search-bar"
      />

      {/* فلترة حسب التصنيف */}
      <select value={selectedCategory} onChange={handleCategoryChange} className="category-filter">
        <option value="">كل التصنيفات</option>
        <option value="ابتدائي">ابتدائي</option>
        <option value="متوسط">متوسط</option>
        <option value="ثانوي">ثانوي</option>
        <option value="جامعي">جامعي</option>
      </select>

      {/* تصنيف حسب السعر */}
      <select value={priceSort} onChange={handlePriceSort} className="price-sort">
        <option value="asc">السعر: من الأقل إلى الأعلى</option>
        <option value="desc">السعر: من الأعلى إلى الأقل</option>
      </select>

      <div className="lectures-grid">
        {filteredLectures.map((lecture) => (
          <LecturesCard
            key={lecture._id}
            id={lecture._id}
            image={lecture.image}
            name={lecture.title}
            category={lecture.category}
            new_price={lecture.price}
            moreButton={true}
          />
        ))}


      </div>

      <div>  
      <p className="text-gray-700 py-3 text-lg font-semibold" >
      تصفح جميع التخصصات المتاحة في المنصة
...
قم بالتسجيل في تخصص تختاره انت.


                   </p>
      </div>

      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
                <div className="text-center space-y-4">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                       خدمة توفير التخصص 
                         <span className="text-indigo-600"> حسب الطلب</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                    مخصصة للموظف الذي يريد تحسين مستواه الدراسي دون عناء التنقل
                    <br/>
                      في حالة لم تجد التخصص الذي تريد من بين التخصصات المتوفرة عندنا !
                      يمكنك تقديم طلب  عن التخصص الذي تريد
                      
                    </p>
                </div>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <Link to="/EducationOrder" className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto">
                        قدم طلبك الأن
                    </Link>
                   
                </div>
            </section>
      <FAQsEducation/>

    </div>
  );
}
