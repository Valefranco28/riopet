'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener la lista de mascotas
    fetch('http://localhost:3000/pet')
      .then((response) => response.json())
      .then((data) => setMascotas(data))
      .catch((error) => console.error('Error al obtener la lista de mascotas', error));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
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
              Enfermedades: {mascota.diseases.join(', ')}
            </p>
            <p className="text-sm text-gray-500">Esterilizado: {mascota.sterilized}</p>
          </div>
        ))}
      </div>
    </main>
  );
}