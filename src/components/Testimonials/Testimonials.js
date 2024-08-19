import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getAllReviews = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/reviews'); // فرضاً أن نقطة النهاية هي '/api/reviews'
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        getAllReviews();
    }, []);

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        آراء المستخدمين عنا
                    </h3>
                    <p className="mt-3 text-gray-600">
                        هنا بعض من تقييمات المستخدمين حول خدمتنا. نحن نعمل دائماً على تحسين تجربة العملاء بناءً على آرائكم.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {reviews.length > 0 ? (
                            reviews.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                           <FaUser/>
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-yellow-500 text-sm mt-0.5">
                                                    {Array(item.rating).fill().map((_, i) => (
                                                        <span key={i}>⭐</span>
                                                    ))}
                                                </span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.comment}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">لا توجد تقييمات حالياً.</p>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
