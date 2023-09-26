 'use client'
 import { useState } from "react";
 import  { auth, signInWithEmailAndPassword } from '../firebase'
 import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  

  const handleLogin = async (e:any) => {
    e.preventDefault();

    try {
     const autenticacion =  await signInWithEmailAndPassword(auth, email, password);
     const idToken = await autenticacion.user.getIdToken();
     console.log('autenticacion', autenticacion);
     sessionStorage.setItem('idToken', idToken);
     router.push('/about', { scroll: false });
      // El usuario ha iniciado sesión con éxito
    } catch (error: any) {
      // Maneja los errores de inicio de sesión
      console.error('Error de inicio de sesión:', error.message);
    }
  };

  const createAccount = async (e:any) => {
    e.preventDefault();
    router.push('/signup', { scroll: false });
    
  };
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 relative z-10">
        <div className="flex items-center justify-center ">
        <img src="/images/logoRiopet.png" className="w-30 h-40"/>
        </div>
        <form onSubmit={handleLogin} className="rounded-lg">
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 bg-white-200"
              placeholder="Correo electronico"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 bg-white-200"
              placeholder="Contraseña"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
          <button
            type="submit"
            className="mb-2 bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600"
          >
            Iniciar sesión
          </button>
          <button onClick={createAccount}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600"
          >
           Crear cuenta nueva
          </button>
          </div>
          <div className="flex justify-center items-center">
            <a href="">¿Olvidaste tu contraseña?</a>
            </div>
        </form>
      </div>
    </div>
    );
  }
  