'use client'
// components/Menu.js

import Link from 'next/link';
import { useEffect, useState } from 'react';


const Menu = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null; 
    }


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
            <Link href="/appointment" >
              Agendar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;