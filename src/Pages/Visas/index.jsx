import Layout from "../../Componentes/Layout";
import SelectVisaCountry from "../../Componentes/SelectVisaCountry";
import "./style.css"

function Visas() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-black/90 p-3">
        <span className="text-white text-lg font-bold mb-4">Seleciona Tu Pasaporte</span>
      <div className="grid gap-4 grid-cols-4 contenedor">
        <SelectVisaCountry 
        linkUrl="https://www.passportindex.org/comparebyPassport.php?p1=es&y1=2024"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pasaporte_ES.svg/800px-Pasaporte_ES.svg.png"
        />
        <SelectVisaCountry 
        linkUrl="https://www.passportindex.org/comparebyPassport.php?p1=mx&y1=2024"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/c/c8/Pasaporte_Mexicano.jpg"
        />
        <SelectVisaCountry 
        linkUrl="https://www.passportindex.org/comparebyPassport.php?p1=cl&y1=2024"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d1/Portada_del_pasaporte_biom%C3%A9trico_actual%2C_vigente_desde_2013.jpg"
        />
        <SelectVisaCountry 
        linkUrl="https://https://www.passportindex.org/comparebyPassport.php?p1=ve&y1=2024"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Pasaporte_Venezolano_Mercosur.jpeg/320px-Pasaporte_Venezolano_Mercosur.jpeg"
        />
      </div>
      <div className="">
        <button className="bg-black/30 rounded-lg p-2 text-white hover:text-rose-400">
          <a href="https://www.passportindex.org/comparebyPassport.php?p1=ve&y1=2024" target="_blank" rel="noopener noreferrer">+ Pasaportes</a>
        </button>
      </div>
      </div>
    </Layout>
  )
}

export default Visas;