'use client'
// components/Menu.js

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';

interface FirebaseUser {
  email: string;
}

const Menu = () => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    // Escucha los cambios en el estado de autenticación
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        // El usuario ha iniciado sesión
        console.log('usuario que esta en session', user)
        setUser(user);
      } else {
        // El usuario no ha iniciado sesión
        setUser(null);
      }
    });

    // Detén la escucha cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('idToken');
    auth.signOut();
  };


  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center text-white">
        <img src="/images/logoRiopet.png" className="w-12 h-15" />
        {user && typeof user === 'object' && 'email' in user ? (
          // Si el usuario ha iniciado sesión y tiene la propiedad 'email', muestra el correo electrónico
          <div className="ml-2">
            <span className="ml-2">Bienvenido: {user.email}</span>
          </div>
        ) : null}
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              Inicio
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
          {user ? (
            // Si el usuario ha iniciado sesión, muestra "Cerrar Sesión"
            <li>
              <button onClick={handleLogout}>Cerrar Sesión</button>
            </li>
          ) : (
            // Si el usuario no ha iniciado sesión, muestra "Iniciar Sesión"
            <li>
              <Link href="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;