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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid grid-cols-1 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3">
        {/* Mapea las mascotas y crea una card para cada una */}
        {mascotas.map((mascota:any) => (
          <div
            key={mascota.id} // Asegúrate de usar un valor único como clave
            className="border rounded-lg p-4 mb-4 hover:shadow-lg transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold">{mascota.name}</h2>
            <p className="text-lg text-gray-500">Especie: {mascota.species}</p>
            <p className="text-lg text-gray-500">Edad: {mascota.age}</p>
            <p className="text-lg text-gray-500">Color: {mascota.color}</p>
            <p className="text-lg text-gray-500">Sexo: {mascota.sex}</p>
            <p className="text-lg text-gray-500">Tamaño: {mascota.size}</p>
            <p className="text-lg text-gray-500">Estado: {mascota.estate}</p>
            <p className="text-lg text-gray-500">
              Enfermedades: {mascota.diseases.join(', ')}
            </p>
            <p className="text-lg text-gray-500">Esterilizado: {mascota.Sterilized}</p>
            <img
              src={mascota.image}
              alt={mascota.name}
              className="mt-4 w-full h-auto"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
