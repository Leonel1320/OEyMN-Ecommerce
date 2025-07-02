import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/shared/navbar"
import { Footer } from "../components/shared/footer"
import { Banner } from "../home/Banner";
import { NewsLetter } from "../home/NewsLetter";
import { Membresia } from "../home/NewsLetterMenbre";
import { ScrollToTopButton } from "../components/shared/ScrollToTopButton"; // Importa nuevo componente (ScrollToTopButton.tsx)
import { CompanyIdentity } from "../home/CompanyIdentity";



export const Rootlayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      {pathname === '/' && (<Banner />)}

      <main className="my-8 flex-1 px-4 md:px-8 lg:px-16">{/* Modificado para centrar el contenido de las paginas */}
                {pathname === '/' && (<CompanyIdentity />)}
                {pathname === '/' && (<Membresia />)}
        <Outlet />

      </main>

      {pathname === '/' && (<NewsLetter />)}

      


      <Footer />
      <ScrollToTopButton /> {/* Añade el botón aquí */}

    </div>
  )
}


