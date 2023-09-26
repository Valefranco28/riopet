import Link from "next/link";


export default function about(){
    return (
        <div>
        <h1>Somos el Centro Integral de Bienestar Animal CEIBA</h1>
        <p>
        trabajamos por los caninos y felinos más vulnerables de las áreas urbanas y rurales
        de nuestro municipio. Fomentamos la tenencia responsable de animales de compañía 
        y semovientes como vacas, caballos, burros entre otros.
        </p>
        <Link href="/">
          Go back to the homepage
        </Link>
      </div>
    )
}