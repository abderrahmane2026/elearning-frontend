import { Link } from "react-router-dom";
import "./ContactSection.css";


export default function ContactSection() {
   // استخدام useTranslation

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Algeria, Constantine",
            title: ('الموقع الخاص بنا')
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "+213 673772432",
            title: ('رقم الهاتف')
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "tefer1988nadjet@gmail.com",
            title: ('البريد الالكتروني')
        },
    ];

    return (
        <div className="Contact-Section">
            <main className="py-14 mb-5">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                    <div className="max-w-xl space-y-3">
                        <h3 className="text-indigo-600 font-semibold">
                            {('تواصل معنا')}
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        {("نرحب بتواصلكم مع منصة طور نفسك وسنرد عليكم في أسرع وقت ممكن")}
                        </p>
                        <p>
                           
                            {(' إذا كان لديك مشكلة أو استفسار يرجى البحث أولا في مركز المساعدة و الاسئلة الشائعة')}
                        </p>
                    </div>
                    <div>
                        <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                            {contactMethods.map((item, idx) => (
                                <li key={idx}>
                                    <h4 className="text-gray-800 text-lg font-medium">{item.title}</h4>
                                    <div className="mt-3 flex items-center gap-x-3">
                                        <div className="flex-none text-gray-400">
                                            {item.icon}
                                        </div>
                                        <p>{item.contact}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <form className="items-center space-y-3 sm:justify-center sm:space-x-3 sm:space-y-0 sm:flex lg:justify-start">
                        <Link to="/Contact">
                            <button className="outline-none bg-indigo-700 text-white text-center px-4 py-3 rounded-md shadow w-full ring-offset-2 ring-gray-700 focus:ring-2  sm:w-auto">
                                {('Contact')}
                            </button>
                        </Link>
                    </form>
                </div>
            </main>
        </div>
    );
}
