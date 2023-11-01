'use client'
import { useEffect, useState } from 'react';
import ModalDelete from '../components/modal';
import { useRouter } from 'next/navigation';

const MascotasPage = () => {
  let idToken: any;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mascotas, setMascotas] = useState([]);
  const [page, setPage] = useState('1'); // Current page
  const [pageSize, setPageSize] = useState('5'); // Number of items per page
  const [lastDocumentId, setLastDocumentId] = useState(null); // ID of the last document
  const [docEliminar, setDocEliminar] = useState(false);
  const router = useRouter()
  

  useEffect(() => {
    idToken =  window.sessionStorage.getItem('idToken');
    const url = new URL('http://localhost:3000/pet');
    url.searchParams.append('page', page); // Send as string
    url.searchParams.append('pageSize', pageSize); // Send as string
    if (lastDocumentId) {
      url.searchParams.append('lastDocumentId', lastDocumentId);
    }

    // Realiza una solicitud GET a la API para obtener la lista de mascotas
    fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${idToken}`, // Agrega el encabezado Bearer con el token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMascotas(data);
        // Update the lastDocumentId if available in the response
        const lastItem = data[data.length - 1];
        if (lastItem) {
          setLastDocumentId(lastItem.doc);
        }
      }) 
      .catch((error) => console.error('Error al obtener la lista de mascotas', error));
  }, [page, pageSize, lastDocumentId]);

  const handlePrevPage = () => {
    const currentPage = parseInt(page, 10);
    if (currentPage > 1) {
      setPage((currentPage - 1).toString());
    }
  };

  const handleNextPage = () => {
    const currentPage = parseInt(page, 10);
    setPage((currentPage + 1).toString());
  };

  const handleDelete = async () => {
   try {
      const response = await fetch(`http://localhost:3000/pet/${docEliminar}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idToken}`,
      },
    });
    console.log('se elimino mascota correctamente', response)
  } catch (error) {
      console.error('error guardando mascota', error)
  }
    setIsModalOpen(false);
  };


  const handleEdit = async (pet: any) => {
    window.sessionStorage.setItem('pet', JSON.stringify(pet));
    router.push(`/pet?type=update`);
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Lista de Mascotas</h1>
      <div className="overflow-x-auto">
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mascotas.map((mascota:any) => (
            <tr key={mascota.id}>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.name}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.species}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.age}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.color}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.sex}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.size}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.estate}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.diseases}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mascota.Sterilized}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <img src={mascota.image} alt={mascota.name}  />
              </td>
              <td>
                {/* Botón para eliminar */}
                <button
                  onClick={() => {setIsModalOpen(true); setDocEliminar(mascota.doc)}}
                  className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
                >
                  Eliminar
                </button>

                <ModalDelete
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onDelete={handleDelete}
                 />
              </td>
              <td>
                {/* Botón para editar */}
                <button
                  onClick={() => handleEdit(mascota)}
                  className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row justify-between">
        <button
          onClick={handlePrevPage}
          disabled={page === '1'}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default MascotasPage; 