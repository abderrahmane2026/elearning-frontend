import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Reports.css"; // Add appropriate styling

export default function Reports() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("https://develop-yourself.onrender.com/api/contact/");
        setMessages(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (messageId) => {
    try {
      await axios.delete(`https://develop-yourself.onrender.com/api/contact/delete/${messageId}`);
      setMessages(messages.filter((message) => message._id !== messageId));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Contact Us Messages
          </h3>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">الاسم</th>
                <th className="py-3 px-6">الريد </th>
                <th className="py-3 px-6">الهاتف</th>
                <th className="py-3 px-6">الموضوع</th>
                <th className="py-3 px-6">التاريخ</th>
                <th className="py-3 px-6">الحالة</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {messages.map((message, idx) => (
                <tr key={message._id}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{message.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{message.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{message.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{message.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(message.date).toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(message._id)}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
