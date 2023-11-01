// pages/citas.js
//import { useEffect, useState } from 'react';

//const CitasPage = () => {
  //const [citas, setCitas] = useState([]);

  /*useEffect(() => {
    // Llama a la API de Nest.js para obtener las citas del cliente actual y actualiza el estado "citas"
  }, []);

  return (
    <div>
      <h1>Tus Citas</h1>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            {cita.fecha} - {cita.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CitasPage;
