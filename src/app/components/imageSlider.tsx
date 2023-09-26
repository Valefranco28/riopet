import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css"; // Cambia la importación del archivo CSS
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ images }) => {
  return (
    <Carousel showThumbs={false}>
      {images.map((image: string | undefined, index: React.Key | null | undefined) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};



export default ImageSlider;



