import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import LoadingSubmite from './Loading';
import loginpic from "../../assets/picturs/login.png";
import "./Login.css";

export default function SignupPage() {
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [err, seterr] = useState(null);
  const [privacyChecked, setPrivacyChecked] = useState(false); // حالة مربع سياسة الخصوصية

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    role: 'client', // القيمة الافتراضية
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handlePrivacyCheck = (event) => {
    setPrivacyChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!privacyChecked) {
      seterr("يرجى الموافقة على سياسة الخصوصية");
      return;
    }
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/api/user/signup", values);
      setLoading(false);
      navigate("/Login", { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.response && err.response.status === 422) {
        seterr("البريد الإلكتروني مستخدم بالفعل");
      } else {
        seterr("خطأ في الخادم الداخلي");
      }
    }
  };

  return (
    <div>
      {Loading && <LoadingSubmite />}
      <div className="container d-flex justify-content-center mb-5">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" 
          style={{ background: "rgb(79, 70, 229,0.5)" }}
          >
            <div className="featured-image mb-3">
              <img src={loginpic} className="img-fluid" style={{ width: '250px' }} alt="logo" />
            </div>
            <p className="fs-2" style={{ fontWeight: 700, color: "#000000" }}>أنشئ حسابك مجانا</p>
            <small className="text-wrap text-center" style={{ width: '17rem', color: 'black' }}>مرحبا بك، في لمنصة طور نفسك ........واصنع مستقبلك  انت معنا في امان</small>
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h1>إنشاء حساب</h1>
              </div>

              <Form onSubmit={handleSubmit}>
                <div className="input-group mb-4">
                  <input 
                    className="form-control form-control-lg bg-light fs-6"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleInput}
                    placeholder="أدخل اسمك..."
                    minLength={6}
                    required
                  />
                </div>

                <div className="input-group mb-4">
                  <input 
                    className="form-control form-control-lg bg-light fs-6"
                    type="email"
                    name="email"
                    onChange={handleInput}
                    value={values.email}
                    placeholder="أدخل بريدك الإلكتروني..."
                    required
                  />
                </div>
                
                <div className="input-group mb-4">
                  <input 
                    className="form-control form-control-lg bg-light fs-6"
                    type="password"
                    name="password"
                    onChange={handleInput}
                    value={values.password}
                    placeholder="أدخل كلمة مرورك..."
                    minLength={8}
                    required
                  />
                </div>

                <div className="input-group mb-4">
                  <select 
                    className="form-control form-control-lg bg-light fs-6"
                    name="role"
                    value={values.role}
                    onChange={handleInput}
                    required
                  >
                    <option value="client">عميل</option>
                    <option value="Mr">استاذ</option>
                    <option value="companny">مؤسسة</option>
                  </select>
                </div>

                <div className="input-group mb-4 d-flex">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="privacyCheck" 
                    onChange={handlePrivacyCheck}
                  />
                  <label htmlFor="privacyCheck" className="form-check-label text-secondary ms-2">
                    <small>أوافق على <Link to="/privacy-policy" style={{textDecoration:"none", color:"rgb(79, 70, 229)"}} >سياسة الخصوصية </Link></small>
                    و شروط الخدمة
                  </label>
                </div>

                <div className="input-group mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="formCheck"
                    />
                    <label htmlFor="formCheck" className="form-check-label text-secondary"><small>تذكرني</small></label>
                  </div>
                  <div className="forgot">
                    <small><a style={{textDecoration:"none", color:"rgb(79, 70, 229)"}} href="#">هل نسيت كلمة المرور؟</a></small>
                  </div>
                </div>
                
                <div className="input-group mb-3">
                  <button 
                    style={{ backgroundColor:"rgb(79, 70, 229)", border:"rgba(255, 0, 0, 0.8)"}}  
                    className="btn btn-lg btn-primary w-100 mb-2 fs-6"
                    type="submit"
                    disabled={!privacyChecked} // تعطيل الزر إذا لم يتم التحقق من سياسة الخصوصية
                  >
                    إنشاء حساب
                  </button>
                </div>

                <div className="err-masseg">
                  {err && <span className="errur">{err}</span>}
                </div>
              </Form>
             
              <div className="row mt-3">
                <small>هل لديك حساب؟ <Link style={{textDecoration:"none", color:"rgb(79, 70, 229)"}} to={"/Login"}>تسجيل الدخول</Link></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
