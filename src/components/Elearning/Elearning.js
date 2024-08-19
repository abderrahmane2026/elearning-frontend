import { Link } from "react-router-dom"


export default () => {

  
    return (
        <>
        
            <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
                <div className="text-center space-y-4">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                    منصة
                         <span className="text-indigo-600">  تعليمية</span>
                    </h1>
                    <p className="text-gray-700 max-w-xl mx-auto font-semibold">
                    منصة تحسين المستوى والتكوين الرقمي
منصة تعنى بالتكوين الرقمي في جميع المجاالت التخصصات
تدريب / تربص / التعلم عن بعد
التكوين من اجل التوظيف والترقية

                      </p>

                      <p className="text-gray-700 max-w-xl mx-auto font-semibold">
                      منصة التكوين والتعليم الرقمي الموثوق
رسالتنا ...........التكوين من أجل التوظيف والترقية في منصب العمل 
رؤيتنا.............التقدم بمستقبل التعليم والتكوين اونالين فنجمع أفضل المدرسين، الخبراء، المكونين المتخصصين في مكان واحد.
سجل اآلن.............وطور مهاراتك واحصل على شهادة التي تساعدك في سوق العمل
                      </p>
                      <p className="text-gray-800 py-3 text-lg font-semibold">
                      اطمح، تعلم، تقدم.
                      قم ببناء مهاراتك العملية من خالل االلتحاق ببرامج تدريبية متطورة،
                      واكتسب شهادات تساعدك للدخول في سوق العمل وتطوير مسيرتك المهنية
                        </p>
                </div>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <Link to="/Education" className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto">
                        تحسين المستوى
                    </Link>
                    <Link to="/Courses" className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto">
                       تعلم الذاتي
                    </Link>
                </div>
            </section>
        </>
    )
}