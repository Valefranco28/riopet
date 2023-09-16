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
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            Inicio
          </Link>
        </div>
        <ul className="flex space-x-4">
        <li>
            <Link href="pages/login">
              Iniciar Sesion
            </Link>
          </li>
          <li>
            <Link href="pages/about">
              Acerca de
            </Link>
          </li>
          <li>
            <Link href="pages/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;