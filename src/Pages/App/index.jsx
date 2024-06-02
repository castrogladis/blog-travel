import { useRoutes, BrowserRouter } from "react-router-dom";
import BlogTravelProvider from "../../Context";
import Travel from "../Travel";
import Visas from "../Visas";
import SigueTuViaje from "../SigueTuViaje";
import TourActividades from "../TourActividades";
import NotFound from "../NotFound"
import Navbar from "../../Componentes/Navbar";
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Travel /> },
    { path: "/visas", element: <Visas /> },
    { path: "/sigue-tu-viaje", element: <SigueTuViaje /> },
    { path: "/tour-actividades", element: <TourActividades /> },
    { path: "/*", element: <NotFound /> }
  ])

  return routes;
}
function App() {

  return (
    <BlogTravelProvider>
      <BrowserRouter>
      <AppRoutes />
      <Navbar />
      </BrowserRouter>
    </BlogTravelProvider>
  )
}

export default App
