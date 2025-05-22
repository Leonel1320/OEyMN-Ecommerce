// OfertasCarousel.tsx o .jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { AllHardwareProducts } from '../data/AllHardwareProducts'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'



export const OfertasCarousel = () => {
    const productosConOferta = AllHardwareProducts.filter((p) => p.oldPrice)


    return (
        <section className="my-12 px-6 lg:px-20">
            <h2 className="text-2xl font-bold mb-6 text-center font-sans">🔥 Ofertas Especiales</h2>
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
                {productosConOferta.map(({ id, imageUrl, altText, name, price, oldPrice }) => (
                    <SwiperSlide key={id} className='min-h-[320px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[400px]'>
                        <div className="bg-white text-black rounded-xl shadow-lg p-4 hover:shadow-[0_10px_25px_rgba(0,0,0,0.7)] transition-shadow duration-300 flex flex-col items-center h-[350px]">
                            <div className="w-full h-48 max-w-[220px] mx-auto flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-200">
                                <img
                                    src={imageUrl}
                                    alt={altText}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            <h2 className="text-lg font-semibold mb-2">{name}</h2>
                            <p className="text-cyan-600 font-bold text-xl flex items-center gap-3">
                                <span className="line-through text-gray-400 text-base">{oldPrice}</span>
                                <span>{price}</span>
                            </p>
                            <button
                                type="button"
                                className="mt-auto bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                                onClick={() => alert(`Añadido ${name} al carrito`)}
                            >
                                Añadir al carrito
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}