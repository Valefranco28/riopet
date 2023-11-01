import React, { useState, useEffect } from 'react';

const images = [
  'slider.jpg',
  'slider2.jpg',
  'ceiba.jpg',
  'ceiba2.png',
  // Agrega más imágenes aquí
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-90 mx-auto overflow-hidden" style={{ paddingBottom: '10%', paddingLeft: '7%', paddingRight: '3%', height: '1000px' }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={`/images/${image}`} alt={`Image ${index}`} className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;