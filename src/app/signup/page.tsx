'use client'
// SignupForm.js
import React, { ChangeEvent, FormEvent, useState } from 'react';

function SignupForm() {
  // Estados locales para los campos del formulario
  const [displayName, setDisplayName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estado para manejar el resultado del envío del formulario
  const [submitStatus, setSubmitStatus] = useState(null);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Construye un objeto con los datos del formulario
    const userData = {
      displayName,
      email,
      password,
    };

    try {
      // Realiza una solicitud POST al endpoint deseado
      const response = await fetch('http://localhost:3000/autenticacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // El registro fue exitoso
        //setSubmitStatus('Registro exitoso');
      } else {
        // El registro falló
        //setSubmitStatus('Error en el registro');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      //setSubmitStatus('Error en la solicitud');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="flex items-center justify-center"></div>
   <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
   <h2 style={{ fontSize: '24px', fontWeight: 'bold' }} className="mb-4">Registrarte</h2>
    <div className="mb-4">
      <div className="flex space-x-4">
        <div className="w-1/2">
          <input
            type="text"
            name="firstName"
            placeholder="Nombre de usuario"
            value={displayName} 
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="w-1/2">
          <input
            type="text"
            name="lastName"
            placeholder="Apellido"
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>
    </div>
    <input
      type="text"
      name="email"
      placeholder="Correo electrónico"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    />
    <input
      type="password"
      name="password"
      placeholder="Contraseña"
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    />
      {/* Agrega más campos de registro aquí */}

      <div className="mb-6 text-center">
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Registrarte
        </button>
      </div>
    </form>
  </div>
  );
  }

export default SignupForm;