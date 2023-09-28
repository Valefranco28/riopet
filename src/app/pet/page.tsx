'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

function PetForm() {

  const idToken =  window.sessionStorage.getItem('idToken');
  let params = useSearchParams();
  const type = params.get('type');
  let petUpdateObject = window.sessionStorage.getItem('pet');
  window.sessionStorage.setItem('pet', JSON.stringify(null));
  let newUpdateObject;

  if (petUpdateObject) {
    newUpdateObject = JSON.parse(petUpdateObject);
  }

  console.log('type', type)

  const [formData, setFormData] = useState({
    name: newUpdateObject?.name || '',
    species: newUpdateObject?.species || '',
    age: newUpdateObject?.age || '',
    color: newUpdateObject?.color || '',
    gender: newUpdateObject?.gender || '',
    size: newUpdateObject?.size || '',
    estate: newUpdateObject?.estate || '',
    diseases: newUpdateObject?.diseases || [] as string[],
    sterilized: newUpdateObject?.sterilized || '',
    image: newUpdateObject?.image || '',
    monthyear: newUpdateObject?.monthyear || '',
    date: newUpdateObject?.date || '',
    doc: newUpdateObject?.doc || '',
  });
  

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDiseasesChange = (selectedOptions: any) => {
    const selectedDiseases = selectedOptions.map((option: any) => ({
      label: option.label,
      value: option.value,
    }));
    setFormData({ ...formData, diseases: selectedDiseases });
  };
  
  const handleSubmit = async (e: any) => {
   
    e.preventDefault();

    if(type){
      try {
        const response = await fetch('http://localhost:3000/pet', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('se guardo mascota correctamente', response)
    } catch (error) {
        console.error('error guardando mascota', error)
    }
    } else {
    // Aquí puedes enviar los datos del formulario, incluida la imagen, a tu servidor o hacer el procesamiento necesario
    //formData.age = Number(formData.age);
    try {
        const response = await fetch('http://localhost:3000/pet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
          
        },
        body: JSON.stringify(formData),
      });
      console.log('se guardo mascota correctamente', response)
    } catch (error) {
        console.error('error guardando mascota', error)
    }
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

  const handleAgeChange = (e: any) => {
    setSelectedValue(e.target.value); // Actualiza el estado con el valor seleccionado
  };

  
  return (
    
    <div className="min-h-screen flex flex-col items-center  bg-gray-100">
    
    <div className="mb-12 flex flex-row items-end bg-black"> {/* Contenedor flex */}
          <ul className="flex space-x-4  "> {/* Contenedor flex */}
            <li className="h-12 bg-black ">
              <Link className="text-white" href="/pet">Crear mascota</Link>
            </li>
            <li className="h-12 bg-black ">
              <Link className="text-white" href="/pets">Lista Mascota</Link>
            </li>
            <li className="h-12 bg-black ">
              <Link className="text-white" href="/pet">Agendamiento</Link>
            </li>
          </ul>
        </div>
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      
      <h2 className="text-2xl font-bold mb-4 text-center">Datos de la Mascota</h2>
      <div className="mb-4">
      <div className="flex space-x-4">
      <div className="w-custom">
      <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
         Imagen de la Mascota:
       </label>
           <input
         type="file"
         id="image"
         name="image"
         accept="image/*" // Limita la selección a archivos de imagen
         onChange={handleImageChange}
         className="w-50 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
         required
        />
      </div>
      <div className="w-custom">
      <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required/>
      </div>
      </div>
      </div>
      
      <div className="mb-4">
      <div className="flex space-x-4"> 
      <div className="w-custom">
        <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
        Edad:
      </label>
        <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
      </div>
      <div className="w-custom">
       <label htmlFor="monthyear" className="block text-gray-700 font-bold mb-2">
        Mes/Año:
       </label>
        <select
         id="monthyear"
         name="monthyear"
         value={formData.monthyear}
         onChange={handleChange}
         className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
         required
         >
         <option value="">Selecciona una opción</option>
         <option value="mes">Meses</option>
         <option value="año">Años</option>
         </select>
      </div>
      <div className="w-custom">
  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
    Fecha
  </label>
  <input
    type="date"
    id="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
    style={{
      /* Estilos CSS para hacer que el input se parezca más al DatePicker */
      lineHeight: '1.5', // Espaciado entre líneas
      borderRadius: '0.25rem', // Bordes redondeados
      paddingLeft: '0.75rem', // Espaciado izquierdo
    }}
    required
  />
</div>
         </div>
      </div>
      
      <div className="mb-4">
      <div className="flex space-x-4"> 
      <div className="w-custom">
      <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
          Sexo:
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="hembra">Hembra</option>
          <option value="macho">Macho</option>
        </select>
      </div>
          <div className="w-custom">
          <label htmlFor="estate" className="block text-gray-700 font-bold mb-2">
          Estado:
        </label>
        <select
          id="estate"
          name="estate"
          value={formData.estate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="adopcion">En adopción</option>
          <option value="adoptado">Adoptado</option>
        </select>
      </div>
      <div className="w-custom">
          <label htmlFor="size" className="block text-gray-700 font-bold mb-2">
          Tamaño:
        </label>
        <select
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>
      </div>
      </div>
      </div>
      
      <div className="mb-4">
      <div className="flex space-x-4"> 
      <div className="w-custom">
      <label htmlFor="sterilized" className="block text-gray-700 font-bold mb-2">
          Esterilizado:
        </label>
        <select
          id="sterilized"
          name="sterilized"
          value={formData.sterilized}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="w-custom">
        <label htmlFor="color" className="block text-gray-700 font-bold mb-2">
          Color:
        </label>
        <select
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="negro">Negro</option>
          <option value="cafe">Cafe</option>
          <option value="blanco">Blanco</option>
          <option value="otro">Otro</option>
        </select>
         </div>
         <div className="w-custom">
        <label htmlFor="species" className="block text-gray-700 font-bold mb-2">
          Especie:
        </label>
        <select
          id="species"
          name="species"
          value={formData.species}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
        </select>
         </div>
      </div>
      </div>
      <div className="mb-4">
      <div className="flex space-x-4"> 
      <div className="w-55">
        <label htmlFor="diseases" className="block text-gray-700 font-bold mb-2">
          Enfermedades:
        </label>
        <Select
          id="diseases"
          name="diseases"
          value={formData.diseases.map((option:any) => ({
            label: option,
            value: option,
          }))}
          onChange={handleDiseasesChange}
          isMulti // Permite múltiples selecciones
         options={[
          { label: 'Moquillo', value: 'moquillo' },
          { label: 'Dermatitis', value: 'dermatitis' },
          { label: 'La rabia', value: 'rabia' },
          { label: 'Toxocariasis', value: 'Toxocariasis' },
          { label: 'Ninguna', value: 'ninguna' },
        ]}
        />
      </div>
      </div>
      </div>
      
      {/* Agrega campos para especie, edad, sexo, tamaño, etc., de manera similar */}
      
      <div className="flex justify-center mt-2">
  <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      type="button"
    >
      Guardar
    </button>
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
      type="button"
    >
      Actualizar
    </button>
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Eliminar
    </button>
  </div>
     </form>
    </div>
      
  );
}

export default PetForm;