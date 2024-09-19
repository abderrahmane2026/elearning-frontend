import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Coursemanager.css'; 

const CoursesSelection = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses');
                setCourses(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching courses');
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleDeleteCourse = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/courses/${id}`);
            setCourses(courses.filter((course) => course._id !== id));
        } catch (err) {
            console.error('Error deleting course:', err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="courses-selection">
            <h2>Select a Course</h2>
            <table className="courses-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course._id}>
                            <td>
                                <img src={course.image} alt={course.title} className="course-image" />
                            </td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>
                                <button onClick={() => handleDeleteCourse(course._id)} className="delete-button">
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

export default CoursesSelection;
