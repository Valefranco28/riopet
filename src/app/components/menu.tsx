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
        <div>
          <Link href="/">
            Inicio
          </Link>
        </div>
        <ul className="flex space-x-4">
        <li>
            <Link href="pages/login">
              Iniciar Sesión
            </Link>
          </li>
          <li>
            <Link href="pages/about">
              Acerca de
            </Link>
          </li>
          <li>
            <Link href="pages/contact" >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;