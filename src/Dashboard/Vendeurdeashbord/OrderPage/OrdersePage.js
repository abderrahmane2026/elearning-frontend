import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrdersPage.css"; // Import the CSS file

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("userr"));
  const sellerId = user?._id;

  useEffect(() => {
    const fetchOrders = async () => {
      if (!sellerId) return;
      
      try {
        const response = await axios.get(`https://develop-yourself.onrender.com/api/order/seller/${sellerId}`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]);
      }
    };

    fetchOrders();
  }, [sellerId]);

  const handleDelete = async (orderId) => {
    try {
      await axios.put(`https://develop-yourself.onrender.com/api/order/delete/${orderId}`);
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleAccept = async (orderId) => {
    try {
      const response = await axios.put(`https://develop-yourself.onrender.com/api/order/accept/${orderId}`);
      setOrders(
        orders.map((order) =>
          order._id === orderId ? { ...order, status: response.data.status } : order
        )
      );
    } catch (error) {
      console.error("Error accepting order:", error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <h1>Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
          <tr>
            
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Address</th>
            <th className="py-3 px-6">Phone</th>
            <th className="py-3 px-6">Payment Method</th>
            <th className="py-3 px-6">Duration</th>
            <th className="py-3 px-6">Start Time</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Actions</th>

          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {orders.map((order) => (
            <tr key={order._id}>
             
              <td className="px-6 py-4 whitespace-nowrap">{order.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.Adress}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.phoneNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.paymentMethod}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.duration}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.startTime}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
              <td className="text-right px-6 whitespace-nowrap">
                <button
                  onClick={() => handleAccept(order._id)}
                  className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDelete(order._id)}
                   className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                >
                  Refuse
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      )}
      
      {/* new */}

     
          
        </div>
    
  );
};

export default OrdersPage;
