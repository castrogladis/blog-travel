//import { useContext } from "react";
//import { BlogTravelContext } from "../../Context"
import "../../Componentes/HoverFigure"
import Layout from "../../Componentes/Layout";
import "./style.css"
import HoverFigure from "../../Componentes/HoverFigure";

function TourActividades() {
//const context = useContext(BlogTravelContext);

const references1 = ["LA HABANA", "60 Excursiones y Actividades", "182.828 Viajeros", "9.3/10 Valoración", "12.405 Opiniones"];
const references2 = ["BRASIL", "1318 Excursiones y Actividades", "188.538 Viajeros", "9.0/10 Valoración", "15.839 Opiniones"];
const references3 = ["BARCELONA","161 Excursiones y Actividades", "846.192 Viajeros", "9.3/10 Valoración", "88.997 Opiniones"];
const references4 = ["MADRID", "154 Excursiones y Actividades", "1.564.710 Viajeros", "9.1/10 Valoración", "121.663 Opiniones"];



  return (
    <Layout>
     <div className="flex flex-col relative justify-center items-center w-screen h-screen bg-black/90 p-3">
        <span className="text-white text-4xl font-bold mb-4">Tu Nuevo Destino</span>
      <div className="grid gap-4 grid-cols-4 w-62 h-62 contenedor-tour bg-white p-4 rounded-sm mb-4">
        <HoverFigure 
          imageUrl="https://images.pexels.com/photos/1845870/pexels-photo-1845870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          linkUrl="https://www.civitatis.com/ar/la-habana/"
          altText="LA HABANA"
          references={references1}
          />
          <HoverFigure 
          imageUrl="https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          linkUrl="https://www.civitatis.com/ar/brasil"
          altText="BRASIL"
          references={references2}
          />
          <HoverFigure 
          imageUrl="https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          linkUrl="https://www.civitatis.com/es/barcelona/"
          altText=" BARCELONA"
          references={references3}
          />
          <HoverFigure 
          imageUrl="https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          linkUrl="https://www.civitatis.com/es/madrid/"
          altText="MADRID"
          references={references4}
          />
        </div>
        <button className="bg-black/30 rounded-lg p-2 text-white hover:text-rose-400">
          <a href="https://www.civitatis.com/es/">+ Destinos</a>
          </button>
        </div>
    
    </Layout>
  )
}

export default TourActividades;