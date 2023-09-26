'use client'
// components/Menu.js

import Link from 'next/link';
import { useEffect, useState } from 'react';
import ImageSlider from "../components/imageSlider";

const Menu = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null; 
    }

    const Home = () => {
      const images = [
        "/images/adopcion.jpg",
        "/images/slider.jpg",
        "/images/slider2.jpg",
      ];
    
      return (
        <div>
          <h1>Slider de Imágenes</h1>
          <ImageSlider images={images} />
        </div>
      );
    };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center text-white">
      <img src="/images/logoRiopet.png" className="w-12 h-15"/>
        <ul className="flex space-x-4">
        <li>
            <Link href="/">
              Inicio
            </Link>
          </li>
        <li>
            <Link href="/login">
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link href="/about">
              Acerca de
            </Link>
          </li>
          <li>
            <Link href="/pet" >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;