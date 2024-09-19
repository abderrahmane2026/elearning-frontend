import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("userr"));
  const userId = user?._id;

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userId) return;
      
      try {
        const response = await axios.get(`http://localhost:5000/api/order/user/${userId}`);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]);
      }
    };

    fetchOrders();
  }, [userId]);

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/api/order/delete/${orderId}`);
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const renderStatus = (status) => {
    switch (status) {
      case 'pending':
        return <span className="text-black">طلبك قيد المعالجة</span>;
      case 'accepted':
        return <span className="text-green-600">تم قبول طلبك</span>;
      case 'rejected':
        return <span className="text-red-600">لقد تم رفض طلبك</span>;
      default:
        return <span className="text-gray-600">{status}</span>;
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
                <th className="py-3 px-6">الاسم</th>
                <th className="py-3 px-6">البريد الالكتروني</th>
                <th className="py-3 px-6">وقت الطلب </th>
                <th className="py-3 px-6">اختيار</th>
                <th className="py-3 px-6">الحالة</th>
                <th className="py-3 px-6">حذف</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.startTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.nameofchois}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{renderStatus(order.status)}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="py-2 px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
