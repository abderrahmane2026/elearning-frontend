import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using axios for HTTP requests
import "./Users.css"; // Import your CSS file

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/user/${userId}`);
      // Filter out the deleted user from the state
      setUsers(users.filter((user) => user._id !== userId));
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="users-container">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Number of users: <div >{users.length}</div>
            </h3>
          </div>
        
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Role</th>
                <th className="py-3 px-6">Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    {idx + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="px-6 py-4  text-red-600 whitespace-nowrap "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
