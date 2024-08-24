import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseOrders.css';

const CompanyOrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanyOrders = async () => {
      try {
        const response = await axios.get('https://develop-yourself.onrender.com/api/order/company-orders');
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching company orders');
        setLoading(false);
      }
    };

    fetchCompanyOrders();
  }, []);

  const handleAcceptOrder = async (orderId) => {
    try {
      await axios.put(`https://develop-yourself.onrender.com/api/order/accept/${orderId}`);
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order._id === orderId ? { ...order, status: 'accepted' } : order
        )
      );
      alert('Order accepted successfully');
    } catch (error) {
      alert('Error accepting order: ' + error.message);
    }
  };
  const handlerejectedOrder = async (orderId) => {
    try {
      await axios.put(`https://develop-yourself.onrender.com/api/order/rejected/${orderId}`);
      setOrders(prevOrders =>
        prevOrders.map(order =>
          order._id === orderId ? { ...order, status: 'rejected' } : order
        )
      );
      alert('Order rejected successfully');
    } catch (error) {
      alert('Error rejected order: ' + error.message);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`https://develop-yourself.onrender.com/api/order/delete/${orderId}`);
      setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
      alert('Order deleted successfully');
    } catch (error) {
      alert('Error deleting order: ' + error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <table className="course-orders-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Payment Method</th>
          <th>Course Name</th>
          <th>Status</th>
          <th>CV</th> {/* إضافة عمود لعرض السيرة الذاتية */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order._id}>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.Adress}</td>
            <td>{order.phoneNumber}</td>
            <td>{order.paymentMethod}</td>
            <td>{order.nameofchois}</td>
            <td>{order.status}</td>
            <td>
              
              {order.cv && (
                <a href={`https://develop-yourself.onrender.com/${order.cv}`} download>
                  Download CV
                </a>
              )}
            </td>
            <td>
              {order.status !== 'accepted' && (
                <button
                  onClick={() => handleAcceptOrder(order._id)}
                  className="accept-button"
                >
                  قبول
                </button>
              )}
              {order.status !== 'rejected' && (
                <button
                  onClick={() => handlerejectedOrder(order._id)}
                  className="rejected-button"
                >
                  رفض
                </button>
              )}
              <button
                onClick={() => handleDeleteOrder(order._id)}
                className="delete-button"
              >
                حذف
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompanyOrdersTable;
