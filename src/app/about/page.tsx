import Link from "next/link";


export default function events(){
    return (

      <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
        <h1 className="text-5xl font-semibold text-left mb-4">Centro Integral de Bienestar Animal CEIBA</h1>
          <p className="text-black-700 text-2xl mb-4">
          Trabajamos por los caninos y felinos más vulnerables de las áreas urbanas 
          y rurales de nuestro municipio. Fomentamos la tenencia responsable de animales de compañía 
          y semovientes como vacas, caballos, burros entre otros.</p>
        </div>
          
        <div className="flex flex-col lg:flex-row items-center">
          {/* Columna de imagen de Misión */}
          <div className="lg:w-1/2 lg:pr-10">
            <img
              src="images/slider.jpg"
              alt="Misión"
              className="w-65 h-[300px] rounded-lg"
            />
          </div>
          {/* Columna de texto de Misión */}
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-5xl font-semibold text-red-500 mb-4">Misión</h2>
            <p className="text-black-700 text-2xl mb-6">
              Tu texto de misión puede ir aquí. Puedes describir la misión de tu proyecto de adopción de animales de manera detallada.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col lg:flex-row">
  {/* Columna de texto de Visión */}
  <div className="lg:w-1/2 lg:pr-10">
    <h2 className="text-5xl font-semibold text-red-500 mb-4">Visión</h2>
    <p className="text-black-700 text-2xl mb-6">
      Tu texto de visión puede ir aquí. Puedes describir la visión de tu proyecto de adopción de animales de manera detallada.
    </p>
  </div>
  {/* Columna de imagen de Visión */}
  <div className="lg:w-1/2 lg:pl-10">
    <img
      src="images/adopcion.jpg"
      alt="Visión"
      className="w-65 h-[300px] rounded-lg"
    />
  </div>
</div>
<div className="flex flex-col lg:flex-row items-center">
          {/* Columna de imagen de Misión */}
          <div className="lg:w-1/2 lg:pr-10">
            <img
              src="images/ubicacion.jpg"
              alt="Ubicación"
              className="w-900 h-[300px] rounded-lg"
            />
          </div>
          {/* Columna de texto de Misión */}
          <div className="lg:w-1/2 lg:pl-10">
            <h2 className="text-5xl font-semibold text-red-500 mb-4">Ubicación</h2>
            <p className="text-black-700 text-2xl mb-6">
              Estado ubicados en la vereda El Carmin, sector El Rodeo.
            </p>
          </div>
        </div>
      </div>
    </div>


     
    )
}


