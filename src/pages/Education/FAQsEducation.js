import { useRef, useState } from "react"

const FaqsEducation = (props) => {
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
            q: "من يمكنه التسجيل في خدمة تحسين المستوى؟",
            a: "خدمة تحسين المستوى مخصصة للموظفين لتحسين مستواهم الدراسي في مكان تواجدهم عبر منصة التعلم عن بعد دون عناء التنقل. هذه الخدمة متاحة للموظفين الذين لم يتمكنوا من إكمال دراستهم لأي سبب من الأسباب."
        },
        {
            q: "ماهو المستوى الدراسي المطلوب لتحسين المستوى فيه؟",
            a: "يمكن تحسين المستوى من السنة السابعة متوسط إلى السنة الثانية ماستر جامعي."
        },
        {
            q: "فكرة تقديم خدمة تحسين المستوى غير واضحة بالنسبة إلي، الرجاء التوضيح؟",
            a: "نقدم عبر منصة خدمة تحسين المستوى خدمات تعليمية رقمية عبر الإنترنت مخصصة لتحسين مستوى الموظفين بواسطة أساتذة دائمين، متقاعدين ذوي خبرات وكفاءات، أو يعملون بساعات إضافية. يمكن الحصول على شهادة بعد إتمام الدراسة. كل ما تحتاجه هو جهاز كمبيوتر أو هاتف محمول واتصال بالإنترنت."
        },
        {
            q: "هل يوجد عمر محدد للموظف للتسجيل في خدمة تحسين المستوى؟",
            a: "خدمة تحسين المستوى متاحة لجميع الفئات العمرية من العمال الراغبين في تحسين مستواهم الدراسي."
        },
        {
            q: "ما هي أنواع الأسئلة والتمارين الموجودة؟",
            a: "توفر المنصة فرصاً متعددة للطلاب لاختبار فهمهم للمواد من خلال الأسئلة والإجابة عليها بشكل واضح ومحدد."
        },
        {
            q: "متى يمكنني التسجيل في خدمة تحسين المستوى؟",
            a: "يمكن للطلاب التسجيل في التخصص الذي يريدونه طوال السنة الدراسية عبر المنصة."
        },
        {
            q: "هل يوجد شهادة في تحسين المستوى؟ وهل الشهادة معتمدة؟",
            a: "نعم، نقدم شهادة معتمدة عند النجاح في الامتحانات النهائية."
        },
        {
            q: "كيف تكون محاضرات تحسين المستوى؟",
            a: "تقدم المنصة دروس ومواد تعليمية في عدة صيغ، مثل النصوص، الصور، الفيديوهات المسجلة مع خبراء المادة وشرحها بطريقة مبسطة وسهلة. يمكن أيضاً عرضها في ملفات صوتية ومقروءة مثل PDF و Powerpoint."
        }
    ]

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
                        <FaqsEducation
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}
