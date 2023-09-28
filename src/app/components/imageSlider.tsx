import React from 'react';
import Slider from 'react-slick';

// Importa los estilos de slick-carousel (asegúrate de agregar los estilos CSS necesarios)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CardSlider({ mascotas }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de tarjetas que se muestran a la vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {mascotas.map((mascota) => (
        <div key={mascota.id} className="border rounded-lg p-4 hover:shadow-lg transition-transform hover:scale-105">
          {/* Contenido de tu tarjeta */}
        </div>
      ))}
    </Slider>
  );
}



