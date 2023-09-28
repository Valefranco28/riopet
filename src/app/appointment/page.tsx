'use client'
import React, { ChangeEvent, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';


function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    date: '',
    time: '',
    reason: '',
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
     // Aquí puedes enviar los datos del formulario, incluida la imagen, a tu servidor o hacer el procesamiento necesario
    console.log(formData);
    try {
        const response = await fetch('http://localhost:3000/pet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('se guardo mascota correctamente', response)
    } catch (error) {
        console.error('error guardando mascota', error)
    }
  };
  
  const [formImage, setFormImage] = useState({
    // ...otros campos del formulario
    image: null, // Nuevo campo para la imagen
  });

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]; // Obtén el archivo seleccionado (puedes permitir múltiples archivos si es necesario)
    setFormImage({
      ...formImage,
      image: file, // Almacena el archivo en el estado del formulario
    });
  };

  {formImage.image && (
    <div className="mb-4">
      <label>Imagen de la Mascota:</label>
      <img src={URL.createObjectURL(formImage.image)} alt="Imagen de la mascota" />
    </div>
  )};

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
            value={formData.name}
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
            value={formData.lastname}
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
            value={formData.email}
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
            value={formData.date}
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
            value={formData.time}
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
            value={formData.reason}
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
     </form>
    </div>
      
  );
}

export default AppointmentForm;