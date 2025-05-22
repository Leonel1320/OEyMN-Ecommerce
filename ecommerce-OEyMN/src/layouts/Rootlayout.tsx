import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/shared/navbar"
import { Footer } from "../components/shared/footer"
import { Banner } from "../home/Banner";
import { NewsLetter } from "../home/NewsLetter";


export const Rootlayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      {pathname === '/' && (<Banner />)}

      <main className="container my-8 flex-1">
        <Outlet />
      </main>


      {pathname === '/' && (<NewsLetter />)}


      <Footer />
    </div>
  )
}


