import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './lecturesmanager.css'; 

const LecturesSelection = () => {
    const [lectures, setLectures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLectures = async () => {
            try {
                const response = await axios.get('https://develop-yourself.onrender.com/api/lectures');
                setLectures(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching lectures');
                setLoading(false);
            }
        };

        fetchLectures();
    }, []);

    const handleDeleteLecture = async (id) => {
        try {
            await axios.delete(`https://develop-yourself.onrender.com/api/lectures/${id}`);
            setLectures(lectures.filter((lecture) => lecture._id !== id));
        } catch (err) {
            console.error('Error deleting lecture:', err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="lectures-selection">
            <h2>Select a Lecture</h2>
            <table className="lectures-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {lectures.map((lecture) => (
                        <tr key={lecture._id}>
                            <td>
                                <img src={lecture.image} alt={lecture.title} className="lecture-image" />
                            </td>
                            <td>{lecture.title}</td>
                            <td>{lecture.description}</td>
                            <td>
                                <button onClick={() => handleDeleteLecture(lecture._id)} className="delete-button">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LecturesSelection;
