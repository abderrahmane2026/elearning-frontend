import { useRef, useState } from "react"

const FaqsCourse = (props) => {
    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "ما هي فكرة المنصة فيما يخص الدورات التدريبية المتاحة ؟",
            a: "تتمثل فكرة الدورات المفتوحة المقدمة عبر الإنترنت في نقل التجربة التعليمية من داخل الفصل التقليدي إلى منصة تعليمية عبر الإنترنت في جميع المجالات والتخصصات مفتوحة لأي فرد يريد تطوير قدراته ومهاراته. يمكنك التسجيل في هذه الدورات وفعل الآتي: 1. حضور المحاضرات التدريبية. 2. المناقشة مع زملائك ومع طاقم التدريس بالدورات. 3. حل الاختبارات والواجبات للتأكد من فهمك للمحتوى. 4. إصدار شهادة إتمام للمادة إذا درست بمنصة طور نفسك بنجاح."
        },
        {
            q: "ماهي الدورات؟ وماهي شروط التسجيل؟",
            a: "كلمة دورات هي المصطلح الذي نستخدمه لوصف البرنامج التعليمي التفاعلي الذي يقدم عبر منصة طور نفسك. تقدم جميع الدورات بدفع مبلغ الدورة، ويمكن لأي شخص الاشتراك بها ودراستها وإصدار شهادة إتمام حين إكمال متطلبات الدورة بنجاح."
        },
        {
            q: "ماذا يعني النظام التعليمي الخاص بالدورات بمنصة طور نفسك؟",
            a: "يتميز النظام التعليمي الخاص بمنصة طور نفسك بمجموعة من الخصائص التي تسهل عملية التعلم والتواصل بين الأساتذة والمتعلمين. يمكنك مشاهدة المحاضرات بمختلف أنواعها، تسليم الواجبات والاختبارات، متابعة العلامات الخاصة بك، وإتمام الدورة بنجاح."
        },
        {
            q: "هل الدورات المتاحة في المنصة مجانية؟",
            a: "توجد دورات ومواد تعليمية مدفوعة وأخرى مجانية."
        },
        {
            q: "هل تمنحون شهادات على إكمال الدورات في منصة طور نفسك؟",
            a: "نعم، يتم منح الطالب شهادة في حال كانت الدورة تمنح شهادة في نهاية الدورة، وتحصل على الشهادة بعد التسجيل في دورة معينة ومتابعة جميع مواد الدورة واجتياز الاختبارات والواجبات."
        },
        {
            q: "كيف يمكنني معرفة فيما إذا كانت الدورة تقدم شهادة بعد نهاية الدورة؟",
            a: "يمكنك معرفة ذلك بسهولة من خلال معلومات الدورة."
        },
        {
            q: "ما هو مصدر اعتماد الشهادة المقدمة في منصة طور نفسك؟",
            a: "الشهادة المقدمة من منصة طور نفسك هي شهادة معتمدة من المنصة وهي شهادة غير رسمية، وبالتالي فهي غير معتمدة من أي جهة رسمية، ولكن يمكنك إدراجها إلى سيرتك الذاتية لتثبت مهاراتك وقدراتك."
        },
        {
            q: "أنهيت متابعة الدورة ولكني لم أحصل على شهادة؟",
            a: "لتحصل على شهادة، يتطلب منك مشاهدة جميع المواد التعليمية الموجودة في الدورة، كما يتطلب منك اجتياز جميع الاختبارات وتسليم الواجبات إن وجدت."
        },
        {
            q: "ما هو الحد الأقصى لعدد الدورات التي يمكنني الالتحاق بها؟",
            a: "ليس هناك عدد محدد، يمكنك الالتحاق بقدر ما ترغب من الدورات المتاحة في المنصة."
        },
        {
            q: "هل يوجد وقت محدد للالتحاق بالدورات؟",
            a: "لا يرتبط نظام الالتحاق بالدورات المقدمة على المنصة بمواعيد محددة، فإنه بإمكانك الالتحاق بأي دورة تعليمية موجودة على المنصة، وذلك في أي وقت تريده، بشرط أن تكون الدورة ما زالت متاحة على المنصة."
        },
        {
            q: "ماذا أستفيد من الالتحاق بدورات منصة طور نفسك؟",
            a: "سيكون بإمكانك الاطلاع على جميع المواد الخاصة بالدورة التعليمية بعد التحاقك بها، وستستطيع مناقشة مقدمي المحتوى بخصوص ما يرد فيها، وستتمكن من إضافة تقييم لتطوير المحتوى المقدم مستقبلاً."
        },
        {
            q: "هل يمكنني إعادة مشاهدة الدورات التعليمية؟",
            a: "نعم، يمكنك الولوج إلى أي دورة طالما أنها لا زالت متاحة، حيث توفر منصة طور نفسك بطبيعة الحال محتوى مرئي مسجل يمكنك مشاهدته في أي وقت ومن أي مكان باستخدام حسابك الشخصي على المنصة."
        }
    ];
    

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    الأسئلة الشائعة
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    تم الإجابة على جميع الأسئلة الشائعة، إذا كنت لا تزال في حاجة إلى مساعدة، لا تتردد في الاتصال بنا.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCourse
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}
