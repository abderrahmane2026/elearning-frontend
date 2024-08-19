// SuccessPartners.js
import React from 'react';
import Slider from 'react-slick';
import './SuccessPartners.css';

const SuccessPartners = ({ partners }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="partners-section">
      <h2>شركاؤنا في النجاح</h2>
      <Slider {...settings} className="partners-slider">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.image} alt={partner.name} className="partner-image" />
            <p className="partner-name">{partner.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SuccessPartners;
