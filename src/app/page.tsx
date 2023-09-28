'use client'
import { User, browserLocalPersistence, onAuthStateChanged, setPersistence } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import Link from 'next/dist/client/link';

export default function Home() {
  const [mascotas, setMascotas] = useState([]);
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false); 

  let token;
  let userData;

   // Esta función se ejecutará cuando se inicie sesión o al cargar la página
   const handleAuthStateChanged = async () => {
    try {
      // Establece la persistencia en local para mantener la sesión activa
      await setPersistence(auth, browserLocalPersistence);
      // Verifica si el usuario está autenticado
      const currentUser = auth.currentUser;

      token = await currentUser?.getIdToken();
      getUserData(token);
    } catch (error: any) {
      // Maneja los errores de inicio de sesión
      console.error('Error de inicio de sesión:', error.message);
    }
  };

  const getUserData = async (token?: string) => {

      // Realiza una solicitud GET a la API para obtener la lista de mascotas
    fetch('http://localhost:3000/autenticacion', {
    headers: {
      'Authorization': `Bearer ${token}`, // Agrega el encabezado Bearer con el token
     },
   })
   .then((response) => response.json())
   .then((data) => {
     userData = data;
     const isAdminUser = data?.role === 'admin';
     setIsAdmin(isAdminUser);
     console.log('informacion de usuario app ', data)
   }) 
   .catch((error) => console.error('Error al obtener la lista de mascotas', error));
  }

  useEffect(() => {
    // Configura el listener para detectar cambios en la autenticación
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);
    // Limpia el listener cuando se desmonta el componente
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener la lista de mascotas
    fetch('http://localhost:3000/pet')
      .then((response) => response.json())
      .then((data) => setMascotas(data))
      .catch((error) => console.error('Error al obtener la lista de mascotas', error));
  }, []);

  return (
    <main className="flex   flex-col items-center justify-between" >
      {isAdmin && (
        <div className="mb-12 flex flex-row items-end bg-black"> {/* Contenedor flex */}
          <ul className="flex space-x-4  "> {/* Contenedor flex */}
            <li className="h-12 bg-black ">
              <Link className="text-white" href="/pet">Crear mascota</Link>
            </li>
            <li className="h-12 bg-black ">
              <Link className="text-white" href="/pets">Lista Mascota</Link>
            </li>
            <li className="h-12 bg-black ">
              <Link className="text-white" href="/pet">Agendamiento</Link>
            </li>
          </ul>
        </div>
      )}
      {!isAdmin && (
        <div className="bg-gray-100 h-12">

        </div>
      )}
      <div className="container mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <link rel="icon" href="/images/logoRiopet.ico" />
        {/* Mapea las mascotas y crea una card para cada una */}
        {mascotas.map((mascota: any) => (
          <div
            key={mascota.id} // Asegúrate de usar un valor único como clave
            className="bg-red-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={mascota.image}
              alt={mascota.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-white mb-2">{mascota.name}</h2>
            <p className="text-sm text-gray-500">Especie: {mascota.species}</p>
            <p className="text-sm text-gray-500">Edad: {mascota.age}</p>
            <p className="text-sm text-gray-500">Color: {mascota.color}</p>
            <p className="text-sm text-gray-500">Sexo: {mascota.sex}</p>
            <p className="text-sm text-gray-500">Tamaño: {mascota.size}</p>
            <p className="text-sm text-gray-500">Estado: {mascota.estate}</p>
            <p className="text-sm text-gray-500">
              Enfermedades: {mascota.diseases}
            </p>
            <p className="text-sm text-gray-500">Esterilizado: {mascota.sterilized}</p>
          </div>
        ))}
      </div>
    </main>
  );
}