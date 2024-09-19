import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseOrders.css';

const CourseOrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourseOrders = async () => {
      try {
        const response = await axios.get('https://develop-yourself.onrender.com/api/order/course-orders');
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching course orders');
        setLoading(false);
      }
    };

    fetchCourseOrders();
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
          <th>Actions</th> {/* إضافة عمود للإجراءات */}
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
              {order.status !== 'accepted' && (
                <button
                  onClick={() => handleAcceptOrder(order._id)}
                  className="accept-button"
                >
                  Accept
                </button>
              )}
              <button
                onClick={() => handleDeleteOrder(order._id)}
                className="delete-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseOrdersTable;
