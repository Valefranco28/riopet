'use client'
import { useEffect, useState } from 'react';

const MascotasPage = () => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener la lista de mascotas
    fetch('http://localhost:3000/pet')
      .then((response) => response.json())
      .then((data) => setMascotas(data))
      .catch((error) => console.error('Error al obtener la lista de mascotas', error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Lista de Mascotas</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Especie</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edad</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Color</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sexo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamaño</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enfermedades</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Esterilizado</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {mascotas.map((mascota:any) => (
            <tr key={mascota.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.species}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.age}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.color}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.sex}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.size}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.estate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.diseases.join(', ')}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.Sterilized}</td>
              <td>
                <img src={mascota.image} alt={mascota.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MascotasPage; 