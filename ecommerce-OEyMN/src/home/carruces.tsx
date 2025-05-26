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
            className="min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px]"
          >
            <Link to={`/productos/${id}`} className="block h-full">
              <div className="bg-white text-black rounded-xl shadow-lg p-4 hover:shadow-[0_10px_25px_rgba(0,0,0,0.7)] transition-shadow duration-300 flex flex-col items-center h-full">
                <div className="w-full h-48 max-w-[220px] mx-auto flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-200">
                  <img src={imageUrl} alt={altText} className="max-h-full max-w-full object-contain" />
                </div>

                <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
                <p className="text-cyan-600 font-bold text-xl flex items-center gap-3">
                  {oldPrice && <span className="line-through text-gray-400 text-base">{oldPrice}</span>}
                  <span>{price}</span>
                </p>
                 <button
                type="button"
                className="mt-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 w-full"
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
