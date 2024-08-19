import { useRef, useState } from "react"

const FaqsCard = (props) => {

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

export default function FAQs() {

    const faqsList = [
        {
            q: "خدمات منصة طور نفسك غير واضحة بالنسبة إلي، الرجاء التوضيح؟",
            a: "نوفر لك منصة طور نقسك خدمات تقدم عبر األنترنيت لمستخدمي االنرتنت الراغبون:- في حتسني املستوى التعليمي عن بعد للموظفني.- يف التكوين عن طريق دورات تعليمية يف خمتلف اجملاالت والتخصصات للجميع عن بعد لكل مستخدمي االنرتنت.- توفر للمرتبص واملتمهن ضمان احلصول على الرتبص دون عناء التنقل وتضييع الوقت واجلهد يف البحث عن املؤسسات املكونةكل ما تحتاجه هو جهاز كمبيوتر وهاتف محمول وأنترنيت للبدء بالتعلم والتكوين، عن بعد. كما ويمكنك التسجيل مجانا عبر الضغط على موقعنا االلكتروني .w"
        },
        {
            q: "من يمكنه التسجيل في منصة طور نفسك؟",
            a: "موظفون دائمون أو متعاقدون، طالب جامعي، تالميذ من معاهد التكوين املهين، متخرجني متحصلني على شهادات، احرار، مؤسسات اقتصادية وعمومية."
        },
        {
            q: "متى يمكنني التسجيل في منصة طور نفسك؟",
            a: "متاحة في أي وقت، ألي شخص له الرغبة في التحسين المستمر من نفسه وتطوير قدراته وزيادة مؤهالته مرحبا به"
        },
        {
            q: "كيق يمكنني التسجيل في منصة طور نفسك؟",
            a: "1 قم بإنشاء حساب جديد خاص بك على الموقع .2 فعل حسابك عبر ادخال البريد االلكتروني وكلمة السر الخاصة بك .3 الضغط على انشاء حساب ثم قم بتفعيله ليتمكن من الدخول الى لوحة المعلومات الخاصة بك.4 سجل في أي من الخدمات المتوفرة في المنصة"
        },
        {
            q: "ين أجد رسالة التفعيل؟",
            a: "يرجى التأكد من تعبئة جميع الخانات في صفحة التسجيل والتأكد من صحتها وباألخص االيميل، بعدها ستصلك رسالة تفعيل على البريد االلكتروني الذي تم تزويده في صفحة التسجيل قم بالضغط على الرابط لتفعيل الحساب، احرص على تفقد صندوق البريد الغير مرغوب به )Spam (ممكن أن تكون وصلت رسالة التفعيل اليه"
        },
        {
            q: " ماذا أفعل اذا نسيت كلمة السر التي استخدمتها إلنشاء حسابي على منصة طور نفسك؟",
            a: "انقر علىنسيت كلمة السر الموجود أسفل حقل كلمة السر ومن ثم أدخل البريد االلكتروني الخاص بك والذي تم استخدامه عند التسجيل لتلقي رسالة تسمح لك باعادة تعيين كلمة السر الخاص بك"
        },
        {
            q: "ماذا أفعل اذا أردت تغيير اعدادات ومعلومات الحساب على منصة طور نفسك؟",
            a: "يمكنك الدخول صفحة االعدادات الخاصة بك من خالل الضغط على االسم الخاص بك أعلى الصفحة، ثم ملفي الشخصي ستظهر لك المعلومات األساسية عن حسابك يمكنك تغيير كل المعلومات ما عدا اسم المستخدم"
        },
        {
            q: "ماهي رسوم االشتراك؟",
            a: "هناك رسوم اشتراكات سنوية وسداسية تختلف حسب الخدمة المقدمة، ستجدها موضحة أمام كل خدمة مقدم"

        },
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                الاسئلة الشائعة
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                   
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}