import { Outlet } from "react-router-dom"
import {Navbar} from "../components/shared/navbar"
import {Footer} from "../components/shared/footer"
import { ScrollToTopButton } from "../components/shared/ScrollToTopButton"; // Importa nuevo componente (ScrollToTopButton.tsx)

export const Rootlayout = () => {
  return (
    <div className="h-screen flex flex-col">
        <Navbar/>

        <main className="my-8 flex-1 px-4 md:px-8 lg:px-16"> {/* Modificado para centrar el contenido de las paginas */}
            <Outlet/>
        </main> 
        
        <Footer/>
        <ScrollToTopButton /> {/* Añade el botón aquí */}
    </div>
  )
}


