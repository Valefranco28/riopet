
export default function Login() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-\images\fondoLogin.jpg"></div>
        <div className="bg-white p-8 rounded shadow-md w-96 ">
          <div className="flex items-center justify-center">
          <img src="/images/logoRiopet.png" className="w-30 h-40"/>
          </div>
          <form>
            <div className="mb-4">
              {/*
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                Usuario
              </label>
               */}
              <input
                type="text"
                id="username"
                name="username"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 bg-white-200"
                placeholder="Correo electronico"
              />
            </div>
            <div className="mb-4">
              {/*
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Contraseña
              </label>
              */}
              <input
                type="password"
                id="password"
                name="password"
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 bg-white-200"
                placeholder="Contraseña"
              />
            </div>
            <div className="flex flex-col">
            <button
              type="submit"
              className="mb-2 bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600"
            >
              Iniciar sesión
            </button>
            <button
              type="submit"
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