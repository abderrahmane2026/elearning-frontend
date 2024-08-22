
import React, { useState, useEffect } from "react";
import about from "../../assets/picturs/About us page-bro.png"

export default function About() {
    const stats = [
        {
            data: "35K",
            title: "الزوار"
        },
        {
            data: "10K+",
            title: "تسجيل ادخول"
        },
        {
            data: "40+",
            title: "الزبائن"
        },
        {
            data: "30M+",
            title: "التفاعلات"
        },
    ]
    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Martiana dialan",
            title: "Product designer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Micheal colorand",
            title: "Software engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Brown Luis",
            title: "Full stack engineer",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
        },
    ]
    const features = [
        {
            "title": "طلاب وطالبات الجامعات",
            "desc": "الطلاب المتدربون في الجامعات أو المدارس العليا، سواء كانوا متابعين للدراسة في المدارس العليا أو الجامعات."
        },
        {
            "title": "المؤسسات العمومية التابعة لوزارة التعليم العالي",
            "desc": "المؤسسات التعليمية العامة التابعة لوزارة التعليم العالي، التكوين المهني، ووزارة التربية والتعليم، من خلال عقد اتفاقيات شراكة."
        },
        {
            "title": "المؤسسات الناشئة",
            "desc": "المؤسسات الجديدة التي تبحث عن فرص تعليمية وتدريبية."
        },
        {
            "title": "الطلبة الجامعيون المتخرجون والحاصلون على شهادة",
            "desc": "الطلاب الذين تخرجوا من الجامعات وحصلوا على شهاداتهم الأكاديمية."
        },
        {
            "title": "طلاب المعاهد التابعة لوزارة التكوين المهني",
            "desc": "الطلاب الذين يدرسون في المعاهد التابعة لوزارة التكوين المهني."
        },
        {
            "title": "طلاب التابعون لوزارة التربية والتعليم",
            "desc": "الطلاب الذين يتبعون برامج تعليمية تحت إشراف وزارة التربية والتعليم."
        },
        {
            "title": "الباحثون عن وظيفة",
            "desc": "الأفراد الذين يبحثون عن فرص عمل جديدة."
        }
    ]
    

    const [isVideoPoppedUp, setVideoPopUp] = useState(false)

    return (
        <>
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
                <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
                   
                    <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">من نحن </h1>
                    <p className="max-w-xl mx-auto xl:mx-0">
                    منصة الكرتونية تشجع التعلم المستمر وتطوير المهارات بطريقة سهلة ومرنة وأبسعار مناسبة.
                    <br/>
تقدم المنصة خدمات تعليمية رقمية مخصصة لتحسين مستوى الموظفين بالتعاون مع أساتذة دائمين ومتقاعدين ذوي خبرات وكفاءات عالية. هؤلاء الأساتذة يعملون ساعات إضافية لتقديم محتوى تعليمي مميز، مما يساعد الموظفين على الحصول على شهادات معتمدة.
<br/>
توفر المنصة للمتربصين والمهنيين فرصة الجمع بين الدراسة والعمل لتحقيق أهدافهم المستقبلية، مع دعم شامل في تقديم طلبات التوظيف. تقدم المنصة دورات تعليمية متنوعة، بعضها مجاني وبعضها مدفوع، تغطي مجموعة واسعة من المجالات العلمية والمهنية.
<br/>
من خلال هذه المنصة، يمكن للمتعلم اكتساب المعرفة، المهارات، والخبرات اللازمة لتطوير قدراته تحت إشراف أفضل الأساتذة المتخصصين والخبراء والمدربين في مختلف المجالات، مما يضمن مستوى عالٍ من الاحترافية والتأهيل..


                   </p>
                   <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">يسرنا انضمامكم لنا </h1>
                   
                </div>
                <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
                    <div className="relative">
                        <img src={about} className="rounded-lg" alt="" />
                       
                            
                    </div>
                </div>
            </div>
            {
                isVideoPoppedUp ? (
                    <div className="fixed inset-0 w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
                        <div className="px-4 relative">
                            <button
                                className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                                onClick={() => setVideoPopUp(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                            </button>
                            <video className="rounded-lg w-full max-w-2xl" controls autoPlay={true}>
                                <source src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                ) : ""
            }
        </section>
        {/* ggggggggggg */}

        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-indigo-600 font-semibold">
                    من يمكنه
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                     الاستفادة من منصة التكوين وتحسين المستوى؟
                    </p>
                    <p>
                    .أنت أيضا قادر على تحقيق أهدافك معنا

                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
         <section className="mt-2 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
         <div className="space-y-4 flex-1 sm:text-center lg:text-left">
             <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl">
             منصة مؤهلة من
                  <span className="text-indigo-600"> المركز الوطني للتعليم الالكتروني</span>
             </h1>
             <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
             نبحث عنك لنصنع معا مستقبل مشرق
             " اجعل من كل يوم فرصة لتحسين نفسك والتقدم نحو أحلامك، ولاتدع الفرص تفوتك"             </p>
             <div>
                 <p className="text-gray-800 py-3">
                 اكتشف فرصا مثيرة وانطلق بمستقبلك الى افاق جديدة.
                 </p>
                
             </div>
         </div>
         <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
             <img src="https://i.postimg.cc/kgd4WhyS/container.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
         </div>
     </section>

     <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                        هنا تبدأ رحلتك من العلم إلى العمل
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        تم انشاء منصة طور نفسك للتعليم والتنمية والتي تحرص على بذل كافة الجهود والمساعي 
                        </p>
                        <p className="mt-3 text-gray-600">
                        اكتشف
مجموعة كبيرة ومتنوعة من أكثر الدورات والتخصصات كفاءة وجودة
التحق
باحد البرامج لتنضم الى مجتمع من المتعلمين الراغبين بالتطور، مثلك تماما.
تعلم
مع أكثر المدربين كفاءة لتصقل مهاراتك المهنية والعملية
التفاعل والمشاركة من خالال النقاش والتخاطب التعلمي بين الطالب والمدرسين
احصل على شهادة معتمدة
لتعزز فرصك في إطلاق مسيرتك المهنية، تنميتها وتطويرها.
                             </p>
                       
                    </div>
                </div>
            </div>
        </section>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                       فريق العمل
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                        <p className="text-gray-600 mt-2">{item.desc}</p>
                                        <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                            <a href={item.twitter}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                            <a href={item.linkedin}>
                                                <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                <div className="sm:hidden lg:block lg:max-w-xl">
                    <img src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="rounded-lg" alt="" />
                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        نحن نبذل قصارى جهدنا لإسعاد العملاء دائمًا                        
                        </h3>
                        <p className="mt-3 max-w-xl">
                           
                        </p>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx} className="">
                                        <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     </>
    )
}
