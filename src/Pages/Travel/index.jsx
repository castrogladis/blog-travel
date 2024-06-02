import { useContext } from "react";
import { BlogTravelContext } from "../../Context";
import Layout from "../../Componentes/Layout";

function Travel() {
const context = useContext(BlogTravelContext)

  return (
    <Layout>
      <figure className="w-screen h-screen overflow-hidden flex items-center justify-center"
      onMouseEnter={() => {context.setIsHover(true)}}
      onMouseLeave={() => {context.setIsHover(false)}}>

        <img src="https://images.pexels.com/photos/7368309/pexels-photo-7368309.jpeg" alt="Travel image"
        className="w-full h-full object-cover"/>
        {context.isHover  && (
          <div
          className="absolute top-0 left-0 w-full h-full bg-black/30 bg-opacity-60 text-black flex flex-col items-center justify-center font-medium" >
            <h1 className="font-bold text-rose-500 text-5xl mb-4 ">¡Bienvenido Viajero!</h1>
            <p className="flex justify-center items-center text-center font-medium"> Aquí encontrarás toda la información tu viaje, si necesitas visa según tu nacionalidad, <br />seguimiento de vuelos de tus seres queridos y las mejores actividades y tours en cualquier ciudad o país que elijas. </p>
            <p className="font-extrabold mt-3">¡Espero que disfrutes tu visita y encuentres todo lo que buscas!</p>
          </div>
          )}
      </figure>
    </Layout>
  )
}

export default Travel;