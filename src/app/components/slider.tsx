import React, { useState, useEffect } from 'react';

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps>  = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambia la imagen cada 3 segundos
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-90 mx-auto overflow-hidden" style={{ paddingBottom: '10%', paddingLeft: '7%', paddingRight: '3%', height: '1000px' }}>
    <img
      src={`/images/${images[currentImageIndex]}`}
      alt="Slider"
      className="object-cover w-full h-full"
    />
  </div>
  );
};

export default Slider;
