import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Elimina el token de autenticación almacenado al cargar la página de cierre de sesión
    localStorage.removeItem('authToken');
    // Redirige al usuario a la página de inicio de sesión o a la página principal
    router.push('/login'); // Cambia la ruta según tu configuración
  }, []);

  return <div>Cerrando sesión...</div>;
}

export default Logout; 