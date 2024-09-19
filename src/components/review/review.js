import React, { useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import './review.css';

const ReviewPage = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://develop-yourself.onrender.com/api/reviews', { name, rating, comment });
      setMessage('تم إرسال رأيك بنجاح!');
      setName('');
      setRating(0);
      setComment('');
    } catch (error) {
      setMessage('حدث خطأ أثناء إرسال رأيك. حاول مرة أخرى.');
    }
  };

  return (
    <div className="review-container">
      <h2>تقديم رأيك</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">اسمك:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">التقييم:</label>
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    className="star"
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    size={30}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="comment">تعليقك:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">إرسال</button>
      </form>
    </div>
  );
};

export default ReviewPage;
