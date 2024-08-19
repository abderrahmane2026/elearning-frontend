import React, { useState, useEffect } from 'react';

const AdsSection = ({ ads }) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000); // تغيير الإعلان كل 3 ثواني

    return () => clearInterval(interval);
  }, [ads.length]);

  return (
    <div className="partner-ads">
      <img src={ads[currentAdIndex]} alt={`Ad ${currentAdIndex + 1}`} />
    </div>
  );
};

export default AdsSection;
