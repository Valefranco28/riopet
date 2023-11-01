import React from 'react';

const ModalDelete = ({ isOpen, onClose, onDelete } : { isOpen: boolean, onClose: () => void, onDelete: () => void })  => {
    if (!isOpen) return null;
  
    return (
      <div className=" modal-overlay fixed inset-0 flex items-center justify-center z-50">
        <div className="modal-content bg-white p-4 rounded shadow-lg">
          <h2 className="text-lg font-semibold mb-4">
            ¿Estás seguro de que deseas eliminar esta mascota?
          </h2>
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
              onClick={onDelete}
            >
              Eliminar
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  

export default ModalDelete;