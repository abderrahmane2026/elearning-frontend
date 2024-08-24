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
            "q": "خدمات منصة طور نفسك غير واضحة بالنسبة لي، الرجاء التوضيح؟",
            "a": "نوفر لك منصة طور نفسك خدمات تقدم عبر الإنترنت لمستخدمي الإنترنت الراغبين في: تحسين المستوى التعليمي عن بعد للموظفين، التكوين عن طريق دورات تعليمية في مختلف المجالات والتخصصات للجميع عن بعد. كما توفر المنصة للمستخدمين إمكانية الحصول على التكوين دون عناء التنقل وتضييع الوقت والجهد في البحث عن المؤسسات المكونة. كل ما تحتاجه هو جهاز كمبيوتر أو هاتف محمول وإنترنت للبدء بالتعلم والتكوين عن بعد. كما يمكنك التسجيل مجانًا عبر موقعنا الإلكتروني."
        },
        {
            "q": "من يمكنه التسجيل في منصة طور نفسك؟",
            "a": "الموظفون الدائمون أو المتعاقدون، الطلاب الجامعيون، التلاميذ من معاهد التكوين المهني، المتخرجون الحاصلون على شهادات، الأحرار، والمؤسسات الاقتصادية و العامة و المؤسسات الناشئة."
        },
        {
            "q": "متى يمكنني التسجيل في منصة طور نفسك؟",
            "a": "متاحة في أي وقت، لأي شخص له الرغبة في التحسين المستمر من نفسه وتطوير قدراته وزيادة مؤهلاته مرحبا به"
        },
        {
            "q": "كيف يمكنني التسجيل في منصة طور نفسك؟",
            "a": "⦁	قم بإنشاء حساب جديد خاص بك على الموقع ⦁	فعل حسابك عبر ادخال البريد الالكتروني وكلمة السر الخاصة بك ⦁	الضغط على انشاء حساب ثم قم بتفعيله ليتمكن من الدخول الى لوحة المعلومات الخاصة بك⦁	سجل في أي من الخدمات المتوفرة في المنصة."
        },
        {
            "q": "أين أجد رسالة التفعيل؟",
            "a": "يرجى التأكد من تعبئة جميع الخانات في صفحة التسجيل والتأكد من صحتها وبالأخص الايميل، بعدها ستصلك رسالة تفعيل على البريد الالكتروني الذي تم تزويده في صفحة التسجيل قم بالضغط على الرابط لتفعيل الحساب، احرص على تفقد صندوق البريد الغير مرغوب به ( (Spamممكن أن تكون وصلت رسالة التفعيل اليه"
        },
        {
            "q": "ماذا أفعل إذا نسيت كلمة السر التي استخدمتها لإنشاء حسابي على منصة طور نفسك؟",
            "a": "انقر على 'نسيت كلمة السر' الموجود أسفل حقل كلمة السر، ثم أدخل البريد الإلكتروني الخاص بك والذي تم استخدامه عند التسجيل لتلقي رسالة تسمح لك بإعادة تعيين كلمة السر الخاصة بك."
        },
        {
            "q": "ماذا أفعل إذا أردت تغيير إعدادات ومعلومات الحساب على منصة طور نفسك؟",
            "a": "يمكنك الدخول إلى صفحة الإعدادات الخاصة بك من خلال الضغط على اسمك في أعلى الصفحة، ثم اختيار 'ملفي الشخصي'. ستظهر لك المعلومات الأساسية عن حسابك، ويمكنك تغيير كل المعلومات ما عدا اسم المستخدم."
        },
        {
            "q": "ما هي رسوم الاشتراك؟",
            "a": "هناك رسوم اشتراكات سنوية ونصف سنوية تختلف حسب الخدمة المقدمة، وستجدها موضحة أمام كل خدمة مقدمة."
        }
        
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