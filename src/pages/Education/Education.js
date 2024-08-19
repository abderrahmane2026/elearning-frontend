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
                    -التواصل الفعال: حيث يمكن للموظف في حال عدم فهمه الدرس التواصل المباشر والفوري بسهولة عبر المنصة <br/>
مع األستاذ عبر التعليقات أو أحد وسائل التواصل االجتماعي)تيليغرام، واتساب، فايسبوك، انستغرام، in).
-مشاركة المحتوى: يمكن للمعلم وضع محاضراته التعليمية في شكل فيديوهات مسجلة وتحميلها من طرف <br/>
الموظف في أي وقت ومن أي مكان.
-ارسال المهام واالختبارات: تقديم األعمال الى الموظفين وتقييم أدائهم عبر المنصة.<br/>
- تتبع التقدم: عن طريق تحسين عملية التدريس في كل مرة وتتبع فهم واستيعاب الموظف للدروس.<br/>
- مناقشات: كما يمكن منافشتها في مجموعات وتعزيز التفاعل وتبادل األفكار واالراء حول المواد التعليمية سواءا 
عن طريق المحادثات الخاصة أو المناقشات الجماعية.

تم انشاء منصة طور نفسك للتعليم والتنمية والتي تحرص على بذل كافة الجهود والمساعي<br/>

للمساهمة في وضع الجزائر في المقدمة في مجال التربية والتعليم كونهم حجر األساس لتطور وازدهار الشعوب<br/>

                        </p>
     
                        <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl pb-10">
                        التخصصات المتاحة في                          <span className="text-indigo-600 mt-4"> المنصة</span>
                    </h1>
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

      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
                <div className="text-center space-y-4">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                       خدمة توفير التخصص 
                         <span className="text-indigo-600"> حسب الطلب</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
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
