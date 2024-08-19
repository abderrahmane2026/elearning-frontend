import React from 'react';
import './HelpCenterPage.css';

const HelpCenterPage = () => {
  return (
    <div className="help-center">
      <h1>مركز المساعدة</h1>
      
      <div className="search-section">
        <input type="text" placeholder="ابحث في مركز المساعدة..." />
      </div>

      <div className="help-section">
        <h2>عام</h2>
        <ul>
          <li>إنشاء حساب جديد</li>
          <li>إعدادات الملف الشخصي</li>
          <li>إعدادات الأمان وتسجيل الدخول</li>
          <li>إعدادات الخصوصية</li>
          <li>المعاملات المالية وحالات الرصيد</li>
        </ul>
      </div>

      <div className="help-section">
        <h2>الطلاب</h2>
        <ul>
          <li>الالتحاق بدورة / محاضرة معينة في منصة طور نفسك</li>
          <li>كيفية الحصول على الشهادة</li>
          <li>تقييم الدورة/المحاضرة</li>
          <li>كيفية التحقق من صحة شهادة</li>
          <li>الوصول إلى دوراتي/محاضراتي الحالية والشهادة</li>
          <li><a href="#">عرض الكل</a></li>
        </ul>
      </div>

      <div className="help-section">
        <h2>المحاضرون</h2>
        <ul>
          <li>الالتحاق كمحاضر</li>
          <li>دليل إنشاء دورة (1) - إنشاء دورة جديدة</li>
          <li>دليل إنشاء دورة (2) - معلومات الدورة</li>
          <li>دليل إنشاء دورة (3) - المواد والأقسام</li>
          <li>دليل إنشاء دورة (4) - إعدادات</li>
          <li><a href="#">عرض الكل</a></li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>الاتصال بالدعم الفني</h2>
        <p>إذا كنت بحاجة إلى مساعدة إضافية، فال تتردد في التواصل مع فريق الدعم لدينا.</p>
        <p>رقم الهاتف: <strong>123-456-789</strong></p>
        <p>البريد الإلكتروني: <strong>support@example.com</strong></p>
      </div>
      <div className="contact-section">

        <h2> إنشاء حساب جديد</h2>
        <p>توجه نحو الصفحة الرئيسية للمنصة ثم انقر على زر "تسجيل".
سيظهر لديك نموذج التسجيل، يتوجب عليك إدخال المعلومات التالية:
الاسم الكامل: قم بكتابة اسمك الحقيقي، حيث سيظهر اسمك في ملفك الشخصي والشهادات التي ستحصل عليها من المنصة.
البريد الإلكتروني: قم بإدخال بريد إلكتروني فعال وتستطيع الوصول إليه حيث ستحتاج تفعيل حسابك من خلاله.
كلمة المرور: استخدم كلمة مرور قوية تحتوي على حروف ورموز وأرقام ومكونة من 8 خانات كحد أدنى.
التحقق: قم بالنقر على المربع الظاهر لإضافة إشارة التحقق. بعد ذلك، تأكد من الاطلاع على شروط الاستخدام وسياسة الخصوصية والنقر على زر "تسجيل". </p>        
      </div>


      <div className="contact-section">

        <h2>  </h2>
        <p>   </p>        
      </div>


      <div className="contact-section">

        <h2>  </h2>
        <p>  </p>        
      </div>


      <div className="contact-section">
        <h2> </h2>
        <p> </p>   

      </div>

      <div className="contact-section">

        <h2> </h2>
        <p> </p>   

      </div>

      <div className="contact-section">
        <h2></h2>
        <p></p>        
      </div>
      
    </div>
  );
};

export default HelpCenterPage;
