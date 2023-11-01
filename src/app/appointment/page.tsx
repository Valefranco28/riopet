'use client'
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../components/modal';


function AppointmentForm() {

  const idToken =  window.sessionStorage.getItem('idToken');
  let params = useSearchParams();
  const type = params.get('type');
  let agendaUpdateObject = window.sessionStorage.getItem('agenda');
  window.sessionStorage.setItem('pet', JSON.stringify(null));
  let newUpdateObject;
  let file: any;

  if (agendaUpdateObject) {
    newUpdateObject = JSON.parse(agendaUpdateObject);
  }

  console.log('type', type)

  const [formDataAppointment, setFormData] = useState({
    name: newUpdateObject?.name || '',
    lastname: newUpdateObject?.lastname || '',
    email: newUpdateObject?.email || '',
    date: newUpdateObject?.date || '',
    time: newUpdateObject?.time || '',
    reason: newUpdateObject?.reason || '',
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formDataAppointment,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (e: any) => {
   
    e.preventDefault();

    if(type){
      try {
        const response = await fetch('http://localhost:3000/appointment', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataAppointment),
      });
      setModalMessage('La cita se agendó correctamente.');
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error al agendar la cita', error);
      setModalMessage('Hubo un error al agendar la cita.');
      setIsModalOpen(true);
    }
    } else {
    // Aquí puedes enviar los datos del formulario, incluida la imagen, a tu servidor o hacer el procesamiento necesario
    //formData.age = Number(formData.age);
    try {
        
        const response = await fetch('http://localhost:3000/appointment', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${idToken}`,
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(formDataAppointment),
      });
      setModalMessage('La cita se agendó correctamente.');
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error al agendar la cita', error);
      setModalMessage('Hubo un error al agendar la cita.');
      setIsModalOpen(true);
    }
    }
     
  };
  

  const [selectedValue, setSelectedValue] = useState(''); // Estado para almacenar el valor seleccionado


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center"></div>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Agendar cita</h2>
      <div className="mb-4">
      <div className="flex space-x-4">
      <div className="w-custom">
      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formDataAppointment.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
      </div>
      <div className="flex space-x-4">
      <div className="w-custom">
      <label htmlFor="lastname" className="block text-gray-700 font-medium mb-2">
            Apellido
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formDataAppointment.lastname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
      </div>
      </div>
      </div>
      </div>
      
      <div className="mb-4">
      <div className="flex space-x-4"> 
      <div className="w-custom">
      <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
            Correo electronico
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formDataAppointment.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
      </div>
     <div className="w-custom">
     <label htmlFor="date" className="block text-gray-600 font-medium mb-2">
            Fecha
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formDataAppointment.date}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
      </div>
      <div className="mb-4">
      <label htmlFor="time" className="block text-gray-600 font-medium mb-2">
            Hora
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formDataAppointment.time}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      </div>
      
      <div className="mb-4">
      <label htmlFor="reason" className="block text-gray-600 font-medium mb-2">
            Motivo
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formDataAppointment.reason}
            onChange={handleChange}
            rows= {3}
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          ></textarea>

      </div>
      
      {/* Agrega campos para especie, edad, sexo, tamaño, etc., de manera similar */}
      
      <div className="mb-6 text-center">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Agendar
        </button>
      </div>
      <Modal show={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
     </form>
    </div>
      
  );
}

export default AppointmentForm;