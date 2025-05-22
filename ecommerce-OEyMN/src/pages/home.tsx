import { Link } from "react-router-dom"

const productosEnOferta = [
  {
    id: 1,
    nombre: "Procesador Intel i7 - 10ª Gen",
    precio: "$149.99",
    imagen: "/img/ofertas/oferta1.jpg",
  },
  {
    id: 2,
    nombre: "SSD Kingston 1TB",
    precio: "$59.99",
    imagen: "/img/ofertas/oferta2.jpg",
  },
  {
    id: 3,
    nombre: "Memoria RAM 16GB DDR4",
    precio: "$39.99",
    imagen: "/img/ofertas/oferta3.jpg",
  },
]



export const Home = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">🔥 Ofertas Especiales</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productosEnOferta.map((producto) => (
            <div
              key={producto.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                <p className="text-cyan-600 font-bold mt-2">{producto.precio}</p>
                <Link
                  to="/components"
                  className="inline-block mt-4 text-sm bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-full transition-colors"
                >
                  Ver Producto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


