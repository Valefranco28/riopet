'use client'
import Link from "next/link"

const SubMenu = () => {
    return (
        <div className="mb-12 flex flex-row items-end bg-black rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg"> {/* Contenedor flex */}
        <ul className="flex space-x-4 ml-10 mr-10 "> {/* Contenedor flex */}
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
    )
}


export default SubMenu;