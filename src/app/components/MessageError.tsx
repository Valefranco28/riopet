import React, { useState } from 'react';
import Modal from 'react-modal';
import 'tailwindcss/tailwind.css'; // Importa las clases de Tailwind CSS si aún no lo has hecho

// Asegúrate de que tu aplicación sepa cómo manejar la accesibilidad (A11y) con react-modal
Modal.setAppElement('#__next');

function TuComponente() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      {/* Contenido principal de tu componente */}
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Abrir Pop-up
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo de Pop-up"
        className="modal" // Clases de estilo para el modal (personalízalas según tus necesidades)
        overlayClassName="overlay" // Clases de estilo para el fondo oscuro detrás del modal
      >
        <div className="modal-content p-4">
          <h2 className="text-2xl font-bold mb-4">Mi Pop-up</h2>
          <p>Este es el contenido de tu pop-up.</p>
          <button
            onClick={closeModal}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Cerrar Pop-up
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default TuComponente;