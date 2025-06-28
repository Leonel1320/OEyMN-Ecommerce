// OfertasCarousel.tsx o .jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

interface Product {
  id: string | number
  imageUrl: string
  altText: string
  name: string
  price: string | number
  oldPrice?: string | number
  isRefurbished?: boolean;
}

export const OfertasCarousel = ({ products, title }: { products: Product[], title: string }) => {
  if (!products.length) {
    return <p className="text-center text-gray-500">No hay productos para mostrar</p>
  }

  return (
    <section className="my-12 px-6 lg:px-20">
      <h2 className="text-2xl font-bold mb-6 text-center font-sans">{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="rounded-2xl"
      >
        {products.map(({ id, imageUrl, altText, name, price, oldPrice }) => (
          <SwiperSlide
            key={id}
            // Aseguramos una altura mínima consistente para el slide
            className="min-h-[420px] sm:min-h-[450px] md:min-h-[480px] lg:min-h-[500px] flex items-stretch" // Añadido flex items-stretch
          >
            <Link to={`/productos/${id}`} className="block h-full w-full"> {/* Añadido w-full al Link también */}
              <div className="bg-white text-black rounded-xl shadow-lg p-4 hover:shadow-[0_10px_25px_rgba(0,0,0,0.7)] transition-shadow duration-300 flex flex-col items-center h-full w-full">

                {/* Imagen del producto - Usamos una altura fija y max-w para mantener proporciones */}
                <div className="w-full h-48 max-w-[220px] mx-auto flex items-center justify-center mb-4 overflow-hidden rounded-lg ">
                  <img src={imageUrl} alt={altText} className="max-h-full max-w-full object-contain" />
                </div>

                {/* Contenido de texto y precio - Usamos flex-grow para que ocupe el espacio restante */}
                <div className="flex flex-col items-center flex-grow justify-end text-center"> {/* justify-end para empujar el botón abajo si hay espacio */}
                  <h2 className="text-lg font-semibold mb-2 line-clamp-2"> {/* line-clamp-2 limita el título a 2 líneas */}
                    {name}
                  </h2>
                  <p className="text-cyan-600 font-bold text-xl flex items-center gap-3 mb-4"> {/* Añadido mb-4 para separar del botón */}
                    {oldPrice && <span className="line-through text-gray-400 text-base">{oldPrice}</span>}
                    <span>{price}</span>
                  </p>
                </div>

                {/* Botón "Añadir al carrito" */}
                <button
                  type="button"
                  className="mt-auto bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 w-full cursor-pointer" // mt-auto para empujarlo al final
                  onClick={(e) => {
                    e.stopPropagation(); // evita que el click se propague al Link
                    alert(`Añadido ${name} al carrito`);
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}