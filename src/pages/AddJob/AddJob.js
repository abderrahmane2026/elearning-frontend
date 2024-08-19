import React, { useState } from "react";
import axios from "axios";
import "./AddJob.css";
import addjobpic from "../../assets/picturs/addjob.png";

export default function AddJob() {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    specialization: "",
    cv: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleFileInput = (event) => {
    setValues({ ...values, cv: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("surname", values.surname);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("specialization", values.specialization);
    formData.append("cv", values.cv);
  
    try {
      await axios.post("http://localhost:5000/api/job-application", formData); // Ensure the URL is correct
      setLoading(false);
      setMessage("تم تقديم الطلب بنجاح!");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setMessage("حدث خطأ. حاول مرة أخرى.");
    }
  };
  return (
    <main className="flex overflow-hidden">
      <div className="flex-1 hidden lg:block">
        <img src={addjobpic} className="addjob-pictur w-full   object-cover" />
      </div>
      <div className="addjob-form py-12 flex-1 lg:flex lg:justify-center  lg:overflow-auto">
        <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
          <div>
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              تقديم طلب العمل
            </h3>
            <p className="mt-3">
              نحن نتطلع لسماع أخباركم! يرجى ملء النموذج أدناه.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 mt-12 lg:pb-12">
            <div>
              <label className="font-medium">
                الاسم
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleInput}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                اللقب
              </label>
              <input
                type="text"
                name="surname"
                value={values.surname}
                onChange={handleInput}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                رقم الهاتف
              </label>
              <input
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleInput}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleInput}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                التخصص
              </label>
              <input
                type="text"
                name="specialization"
                value={values.specialization}
                onChange={handleInput}
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">
                رفع السيرة الذاتية
              </label>
              <div className="max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">
                  <svg className="w-10 h-10 mx-auto" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1667 26.6667C8.48477 26.6667 5.5 23.6819 5.5 20C5.5 16.8216 7.72428 14.1627 10.7012 13.4949C10.5695 12.9066 10.5 12.2947 10.5 11.6667C10.5 7.0643 14.231 3.33334 18.8333 3.33334C22.8655 3.33334 26.2288 6.19709 27.0003 10.0016C27.0556 10.0006 27.1111 10 27.1667 10C31.769 10 35.5 13.731 35.5 18.3333C35.5 22.3649 32.6371 25.7279 28.8333 26.5M25.5 21.6667L20.5 16.6667M20.5 16.6667L15.5 21.6667M20.5 16.6667L20.5 36.6667" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className="mt-3 text-gray-700 max-w-xs mx-auto">اضغط لرفع الملف أو اسحب وأسقط الملف هنا</p>
                </label>
                <input id="file" type="file" name="cv" onChange={handleFileInput} className="hidden" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
            >
              تقديم الطلب
            </button>
            {message && <div className="message">{message}</div>}
            {loading && <div className="loading">جار التحميل...</div>}
          </form>
        </div>
      </div>
    </main>
  );
}
