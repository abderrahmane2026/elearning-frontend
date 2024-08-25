import React from 'react'

export default function ServiceSection() {
    const features = [
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: "عصرنة الإدارات",
            desc: "وذلك من خلال العمل على تحسين جودة ونوعية الخدمات الإلكترونية المقدمة من طرف المنصة من أجل تحسين الاستجابة لمتطلبات الناس فيما يخص التعليم والتكوين عن بعد.",
        },
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "اختصار الوقت وتقليص المسافات",
            desc: "تخصيص التعليم للموظف في مكان تواجده عبر منصة التعلم عن بعد دون عناء التنقل.....  التقريب بين المكون والمتكون عبر المنصة حسب التخصص المطلوب، بما يسهم في تحسين المستوى الدراسي فيه.",
        },
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "توفير التكوين",
            desc: "توفير تكوينات تتناسب مع احتياجات الطلاب الذين يرغبون في تطوير مهاراتهم أو تلبية احتياجاتهم المهنية بما يتطلبه سوق العمل الجزائري من أجل الحصول على وظيفة..... أصحاب المؤسسات الناشئة هم الأمل والركيزة الحقيقية لاقتصاد المعرفة في الجزائر، لذلك وجب إعادة دعمهم ودفعهم من جديد من أجل تجديد ثقتهم وايمانهم بالنجاح وذلك من خلال تكوينات في مجالات عديدة تعيد تأهيلهم من جديد لمعالجة النقائص ومواجهة التحديات التي تعرقل ابتكارهم وتقف أمام تطور مؤسساتهم.",
        },
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "تحسين المستوى",
            desc: " المنصة تجمع في مكان واحد الأساتذة والخبراء والمتخصصين في مختلف التخصصات للاستفادة من خبراتهم سواء كان ذلك بغرض التكوين أو تحسين المستوى الدراسي.توفير إمكانية تحسين المستوى عن بعد للموظفين في جميع القطاعات العمومية والاقتصادية. تمكين التكوين للجميع عن بعد لكل مستخدمي الإنترنت.توفير إمكانية التواصل الفوري والمباشر مع الأساتذة والمكونين عبر التعليقات أثناء البث المباشر أو التواصل غير التزامني عبر التعليقات على الفيديوهات المسجلة أو الهاتف أو الماسنجر أو الايميل، دون عناء وجهد التنقل أو السفر أو تضييع الوقت في المواصلات",
        },
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>,
            title: "توفير التربص",
            desc:"	هي منصة توفر للمتربص والمتمهن ضمان الحصول على التربص وهم يزاولون دراستهم.	تلعب المنصة دور الوسيط من خلال العمل على التقريب بين الطالبين للتربص من جهة والمؤسسات المكونة المسؤولة عن التربص من جهة أخرى دون عناء تنقلهم وذلك من خلال:	توفير التسجيل للاستفادة من التربصات المتاحة من طرف المؤسسات المتعاقد معها، أو التي تقوم المنصة باشهارات وإعلانات لها داخل المنصة.	 العمل على عملية تأكيد قبول إجراء التربص عند المؤسسة المختارة من طرف المتربص من عدمه، وتبقى عملية اعادة إختياره لمؤسسة أخرى متواصلة ومكررة الى غاية تأكيدنا له بقبول اجراء التربص عندها.	قيام المنصة بالبحث المستمر والدائم وذلك بتكليف من المتربص بإيجاد التربص الذي يريده حسب طلبه والمجال الذي يريد التكوين فيه."
        },
        {
            icon: 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>,
            title: "التحسين والتطوير المستمر",
            desc: "	لقدرات طالبي التكوين وتحسين المستوى لمواكبة التطور التكنولوجي والتعليم والتطوير والتجديد المستمر من خلال جودة الخدمات الرقمية الالكترونية المقدمة في مجال التكوين والتعليم.	رفع كفاءة أداء العمل المستقبلي.	تحسين نفسية الموظف وزيادة إحساسه بالتجديد المستمر.	تطوير المسار المهني للموظفين، حتى يتسنى لهم الترقية في مناصب عملهم."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            ),
            title: "توفير فرص العمل",
            desc: " 	تكوين وتأهيل الطالب الجامعي وهو يدرس سيجعل منه قوة وكفاءة عاليين تمكنه من العمل في نفس مؤسسة التي قام بإجراء التكوين فيها وذلك من خلال الاعتماد عليه كيد عاملة مؤقتة أو دائمة.	 اكتساب معارف ومهارات متعددة تجعلهم في استعداد دائم للعمل ومحل استقطاب من طرف المؤسسات وأصحاب المشاريع الكبرى" ,
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            ),
            title: "تقديم دورات تكوين ومحاضرات تحسين المستوى",
            desc: "دورات ثرية وغنية بكل ماهو جديد. - تدريب مميز ومحترف بأسلوب بسيط يراعي فيه الفروقات الفردية",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
            ),
            title: "منح شهادات في التكوين وتحسين المستوى",
            desc: "- إعطاء شهادة تكوين أو حتسني املستوى معرتف هبا من طرف وزارة التعليم العايل والبحث العلمي، أو من طرف وزارة التعليم والرتبية.- إعطاء شهادات معتمدة يف خمتلف اجملاالت والتخصصات",
        },
    ]

    return (
        <section className="py-14">
             <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl mx-auto space-y-3 sm:text-center">
                    <h3 className="text-indigo-600 font-semibold">
                    منصة طور نفسك

                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        خدماتنا
                    </p>
                    <p>
                    ما يمكنك فعله باستخدام منصة التكوين وتحسين المستوى؟                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4 mt-14">
                                    <div className="flex-none w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p>
                                            {item.desc}
                                        </p>
                                        
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
