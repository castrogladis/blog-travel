import { NavLink } from "react-router-dom";
//import { useContext } from "react";
//import { BlogTravelContext } from "../../Context";
import "./styles.css"

function Navbar() {
//  const context = useContext(BlogTravelContext);
  const activeStyle = "underline underline-offset-8 text-rose-400"

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full h-14 bg-black font-light px-4">
      <ul className="flex items-center gap-6  text-white">
        <li className="font-bold text-lg">
          <NavLink
          to={"/"}>
            Travel
          </NavLink>
        </li>
        <li className="">
          <NavLink
          to={"/visas"}
          className={({ isActive }) => isActive ? activeStyle : undefined}>
            Visas
          </NavLink>
        </li>
        <li>
          <NavLink
          to={"/sigue-tu-viaje"}
          className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sigue Tu Viaje
          </NavLink>
        </li>
        <li>
          <NavLink
          to={"/tour-actividades"}
          className={({ isActive }) => isActive ? activeStyle : undefined}>
            Tours y Actividades
          </NavLink>
        </li>
      </ul>
      <div>
         <a href="mailto:gladiscastro756@gmail.com?subject=Nombre:%20%20%20%20%20Apellido:%20"
         className="email-link">info@travel.com</a> 
      </div>
    </nav>
  )
}

export default Navbar;