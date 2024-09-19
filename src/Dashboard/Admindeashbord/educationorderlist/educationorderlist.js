import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './educationorder.css';

const RequestsList = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // جلب الطلبات من الخادم عند تحميل الصفحة
        const fetchRequests = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/educationorder');
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching requests', error);
            }
        };

        fetchRequests();
    }, []);

    // قبول الطلب
    const acceptRequest = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/educationorder/${id}`, { status: 'accepted' });
            setRequests(requests.map(request => request._id === id ? { ...request, status: 'accepted' } : request));
        } catch (error) {
            console.error('Error accepting request', error);
        }
    };

    // رفض الطلب
    const rejectRequest = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/educationorder/${id}`, { status: 'rejected' });
            setRequests(requests.map(request => request._id === id ? { ...request, status: 'rejected' } : request));
        } catch (error) {
            console.error('Error rejecting request', error);
        }
    };

    // حذف الطلب
    const deleteRequest = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/educationorder/${id}`);
            setRequests(requests.filter(request => request._id !== id));
        } catch (error) {
            console.error('Error deleting request', error);
        }
    };

    return (
        <div className="requests-list-container">
            <h2>الطلبات الواردة</h2>
            <ul>
                {requests.map((request) => (
                    <li key={request._id} className={`request-item ${request.status}`}>
                        <div className="request-info">
                            <p><strong>اسم الطالب:</strong> {request.studentName}</p>
                            <p><strong>التخصص:</strong> {request.specialization}</p>
                            <p><strong>الوصف:</strong> {request.description}</p>
                            <p><strong>الحالة:</strong> {request.status || 'Pending'}</p>
                        </div>
                        <div className="request-actions">
                            <button onClick={() => acceptRequest(request._id)} disabled={request.status === 'accepted'}>
                                قبول
                            </button>
                            <button onClick={() => rejectRequest(request._id)} disabled={request.status === 'rejected'}>
                                رفض
                            </button>
                            <button onClick={() => deleteRequest(request._id)}>
                                حذف
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RequestsList;
