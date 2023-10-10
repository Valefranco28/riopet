'use client'
import { useEffect, useState } from 'react';
import ModalDelete from '../components/modal';
import { useRouter } from 'next/navigation';

const AgendaPage = () => {
  const idToken =  window.sessionStorage.getItem('idToken');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [agenda, setAgenda] = useState([]);
  const [page, setPage] = useState('1'); // Current page
  const [pageSize, setPageSize] = useState('5'); // Number of items per page
  const [lastDocumentId, setLastDocumentId] = useState(null); // ID of the last document
  const [docEliminar, setDocEliminar] = useState(false);
  const router = useRouter()
  

  useEffect(() => {

    const url = new URL('http://localhost:3000/appointment');
    url.searchParams.append('page', page); // Send as string
    url.searchParams.append('pageSize', pageSize); // Send as string
    if (lastDocumentId) {
      url.searchParams.append('lastDocumentId', lastDocumentId);
    }

    // Realiza una solicitud GET a la API para obtener la lista de la agenda
    fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${idToken}`, // Agrega el encabezado Bearer con el token
      },
    })
    .then((response) => response.json())
    .then((data) => {
        setAgenda(data);
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
      const response = await fetch(`http://localhost:3000/appointment/${docEliminar}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${idToken}`,
      },
    });
    console.log('se elimino la agenda correctamente', response)
  } catch (error) {
      console.error('error guardando la agenda', error)
  }
    setIsModalOpen(false);
  };


  const handleEdit = async (appointment: any) => {
    window.sessionStorage.setItem('appointment', JSON.stringify(appointment));
    router.push(`/appointment?type=update`);
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Lista Agenda</h1>
      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Motivo</th>
          </tr>
        </thead>
        <tbody>
          {agenda.map((agenda:any) => (
            <tr key={agenda.id}>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agenda.name}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agenda.lastname}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agenda.email}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agenda.date}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agenda.time}</td>
              <td className="px-3 py-2 sm:px-6 sm:py-4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{agenda.reason}</td>
              <td>
                {/* Botón para eliminar */}
                <button
                  onClick={() => {setIsModalOpen(true); setDocEliminar(agenda.doc)}}
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
                  onClick={() => handleEdit(agenda)}
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

export default AgendaPage; 