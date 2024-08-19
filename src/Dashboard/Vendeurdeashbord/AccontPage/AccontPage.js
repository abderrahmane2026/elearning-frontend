import React, { useEffect, useState } from "react";
import "./AccontPage.css";

const AccountPage = () => {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    avatar: "",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userr");

    if (storedUserData) {
      try {
        const userData = JSON.parse(storedUserData);
        setUserData(userData);
        setFormData({
          name: userData.name,
          email: userData.email,
          phoneNumber: userData.phoneNumber || "",
          address: userData.address || "",
          dateOfBirth: userData.dateOfBirth || "",
          avatar: userData.avatar || "",
        });
      } catch (error) {
        console.error("Error parsing user data from local storage:", error);
      }
    }
  }, []);

  const updateUserProfile = async (formData) => {
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      const response = await fetch(
        `http://localhost:5000/api/user/${userData._id}/updateUserProfile`,
        {
          method: "PUT",
          body: formDataToSend,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user profile");
      }
      const updatedUserData = await response.json();
      return updatedUserData;
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      const updatedUserData = await updateUserProfile(formData);
      setUserData((prevData) => ({
        ...prevData,
        ...updatedUserData,
      }));
      localStorage.setItem("userr", JSON.stringify(updatedUserData));
      setFormData((prevFormData) => ({
        ...prevFormData,
        ...updatedUserData,
        avatar: updatedUserData.avatar ? updatedUserData.avatar : null,
      }));
      setEditMode(false);
      // إعادة تحميل الصفحة بعد التحديث
      window.location.reload();
    } catch (error) {
      console.error("Failed to save changes:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setFormData({
        ...formData,
        avatar: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="account-page">
      <h1>Profile</h1>
      {userData && (
        <div className="profile-info">
          <div className="profile-image">
            {formData.avatar ? (
              typeof formData.avatar === "string" ? (
                <img
                  src={formData.avatar}
                  alt="Profile"
                  className="profile-picture"
                />
              ) : (
                <img
                  src={URL.createObjectURL(formData.avatar)}
                  alt="Profile"
                  className="profile-picture"
                />
              )
            ) : (
              <div className="placeholder">+</div>
            )}
            {editMode && (
              <label htmlFor="avatar" className="custom-file-upload">
                Upload Image
              </label>
            )}
            <input
              id="avatar"
              className="input-file"
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <div className="profile-details">
            <h2>{userData.name}</h2>
            {editMode ? (
              <div className="edit-fields">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  placeholder="Address"
                  onChange={handleChange}
                />
                <label htmlFor="dateOfBirth">Date of Birth:</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  placeholder="Date of Birth"
                  onChange={handleChange}
                />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <>
                <p>Email: {userData.email}</p>
                <p>Phone Number: {userData.phoneNumber}</p>
                <p>Address: {userData.address}</p>
                <p>Date of Birth: {userData.dateOfBirth}</p>
                <button onClick={handleEdit}>Edit</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
