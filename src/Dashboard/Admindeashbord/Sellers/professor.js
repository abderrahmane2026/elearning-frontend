import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Professor.css";

const Mr = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user")
      .then((response) => {
        const sellers = response.data.filter((user) => user.role === "Mr");
        setSellers(sellers);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleAccept = async (userId) => {
    if (window.confirm("Are you sure you want to accept this Professor?")) {
      try {
        await axios.put(`http://localhost:5000/api/user/${userId}/accept`);
        setSellers(
          sellers.map((seller) =>
            seller._id === userId
              ? { ...seller, sellerStatus: "accepted" }
              : seller
          )
        );
      } catch (error) {
        console.error("Error accepting Professer:", error);
      }
    }
  };

  const handleRefuse = async (userId) => {
    if (window.confirm("Are you sure you want to refuse this Professer?")) {
      try {
        await axios.put(`http://localhost:5000/api/user/${userId}/refuse`);
        setSellers(
          sellers.map((seller) =>
            seller._id === userId
              ? { ...seller, sellerStatus: "refused" }
              : seller
          )
        );
      } catch (error) {
        console.error("Error refusing Professor:", error);
      }
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
   


      <div className="users-container">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Active Members
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
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {sellers.map((seller, idx) => (
                <tr key={seller._id}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap"> {idx + 1} </td>
                  <td className="px-6 py-4 whitespace-nowrap">{seller.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{seller.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{seller.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{seller.sellerStatus}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                  {seller.sellerStatus === "requested" && (
                  <>
                    <button
                      onClick={() => handleAccept(seller._id)}
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleRefuse(seller._id)}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Refuse
                    </button>
                    </>
                )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Mr;
