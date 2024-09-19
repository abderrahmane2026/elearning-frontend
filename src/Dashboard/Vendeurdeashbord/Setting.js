import React, { useState } from "react";
import "./Settings.css";

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("userr"));
  const userId = user._id;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}/updateProfile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("حدث خطأ أثناء تحديث الملف الشخصي.");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/user/${userId}/updatePassword`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setCurrentPassword("");
        setNewPassword("");
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error changing password:", error);
      setMessage("حدث خطأ أثناء تغيير كلمة المرور.");
    }
  };

  return (
    <div className="settings-container">
      <h2>الإعدادات</h2>
      {message && (
        <p className={message.includes("error") ? "error" : "success"}>
          {message}
        </p>
      )}

      <form onSubmit={handleUpdateProfile} className="settings-form">
        <h3>تحديث الملف الشخصي</h3>
        <div className="form-group">
          <label htmlFor="name">الاسم</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          تحديث الملف الشخصي
        </button>
      </form>

      <form onSubmit={handleChangePassword} className="settings-form">
        <h3>تغيير كلمة المرور</h3>
        <div className="form-group">
          <label htmlFor="currentPassword">كلمة المرور الحالية</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">كلمة المرور الجديدة</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          تغيير كلمة المرور
        </button>
      </form>
    </div>
  );
}
