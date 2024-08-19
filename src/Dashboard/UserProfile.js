import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    // Fetch user data on component mount
    const fetchUserData = async () => {
      const response = await axios.get("/api/user/current"); // Adjust endpoint as necessary
      setUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setPhoneNumber(response.data.phoneNumber);
      setAddress(response.data.address);
      setDateOfBirth(response.data.dateOfBirth);
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("address", address);
    formData.append("dateOfBirth", dateOfBirth);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const response = await axios.put(`/api/user/${user._id}/updateUserProfile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUser(response.data.user);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="user-profile">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label>Avatar:</label>
          <input
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      {user.avatar && (
        <div>
          <h3>Current Avatar:</h3>
          <img src={user.avatar} alt="Current Avatar" />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
