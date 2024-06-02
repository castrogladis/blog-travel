import Layout from "../../Componentes/Layout";

function SigueTuViaje() {
  return (
    <Layout>
      <div className="h-screen">
       <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  items-center  bg-black/90 overflow-hidden">
        <div className="flex items-center flex-col text-white px-6">
          <h1 className=" flex  mb-4 italic">Rastrea un vuelo fácil y rápido</h1>
          <p>
          Tienes la oportunidad de seguir el viaje de tus seres queridos. <br />
              Solo necesitas tener a mano lo siguiente:
              <ul className="text-center leading-loose">
                <li>Línea Aérea:</li>
                <li>N° De Vuelo:</li>
                <li>Ciudad o Aeropuerto de Salida:</li>
                <li>Ciudad o Aeropuerto de Llegada:</li>
              </ul>
          </p>
          <a href="https://es.flightaware.com/live/" target="_blank" className=" text-rose-400 text-lg text-center rounded-lg bg-white m-6 w-40 italic">Seguir Viaje</a>
        </div>
        <div className="flex h-full w-full md:justify-end object-contain">
          <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/7412068/pexels-photo-7412068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mapa con Avión" />
        </div>
       </div>
       </div>
    </Layout>
  )
}

export default SigueTuViaje;