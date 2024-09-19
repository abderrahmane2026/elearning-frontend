import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import LoadingSubmite from "./Loading";
import loginpic from "../../assets/picturs/login.png";
import "./Login.css";

export default function LoginPage() {
  //loading
  const [loading, setLoading] = useState(false);
  //navigation
  const navigate = useNavigate();

  // error for submit
  const [err, setErr] = useState(null);

  //Login function
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("http://localhost:5000/api/user/login", values);
      setLoading(false);
      window.localStorage.setItem("userr", JSON.stringify(data.user));
      navigate("/");
      window.location.reload(); // Refresh the page after navigation
    } catch (err) {
      console.log(err);
      setLoading(false);

      if (err.response && err.response.status === 401) {
        setErr("البريد الإلكتروني أو كلمة المرور خاطئة");
      } else {
        setErr("خطأ في الخادم الداخلي");
      }
    }
  }

  return (
    <div className="Login-page">
      {loading && <LoadingSubmite />}
      {/* Main Container */}
      <div className="container d-flex justify-content-center mb-5">
        {/* Login Container */}
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/* Left Box */}
          <div
            className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: "rgb(79, 70, 229,0.5)" }}
          >
            <div className="featured-image mb-3">
              <img
                src={loginpic}
                className="img-fluid"
                style={{ width: "250px" }}
                alt="logo"
              />
            </div>
            <p className="fs-2" style={{ fontWeight: 700, color: "000000" }}>
              تحقق من الحساب
            </p>
            <small
              className="text-wrap text-center"
              style={{ width: "17rem", color: "black" }}
             >  مرحبا بك، في لمنصة طور نفسك ........واصنع مستقبلك  انت معنا في امان  
             </small>
          </div>
          {/* Right Box */}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h1>تسجيل الدخول</h1>
                <p>مرحبا بعودتك</p>
              </div>

              <Form onSubmit={handleSubmit}>
                <div className="input-group mb-4">
                  <input
                    className="form-control form-control-lg bg-light fs-6"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleInput}
                    placeholder="أدخل بريدك الإلكتروني..."
                    required
                  />
                </div>

                <div className="input-group mb-3">
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
                <div className="input-group mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
                    />
                    <label
                      htmlFor="formCheck"
                      className="form-check-label text-secondary"
                    >
                      <small>تذكرني</small>
                    </label>
                  </div>
                  <div className="forgot">
                    <small>
                      <a
                        style={{ textDecoration: "none", color: "rgb(79, 70, 229)" }}
                        href="#"
                      >
                        هل نسيت كلمة المرور؟
                      </a>
                    </small>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <button
                    style={{
                      backgroundColor: "rgb(79, 70, 229)",
                      border: "rgb(79, 70, 229)",
                    }}
                    className="btn btn-lg btn-primary w-100 fs-6"
                  >
                    تسجيل الدخول
                  </button>
                </div>
                <div className="err-masseg ">
                  {err && <span className="errur">{err}</span>}
                </div>
              </Form>

              <div className="row mt-3">
                <small>
                  ليس لديك حساب؟{" "}
                  <Link
                    style={{ textDecoration: "none", color: "rgb(79, 70, 229)" }}
                    to={"/signup"}
                    href="#"
                  >
                    سجل الآن
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
