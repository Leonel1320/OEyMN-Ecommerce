// src/home/NewsLetter.tsx
import { Link } from 'react-router-dom';

export const NewsLetter = () => {
    return (
        <div className='space-y-8'>

            {/* Primer Banner: Plan de Canje */}
            <div className="relative z-10 container mx-auto py-20 flex flex-col lg:flex-row items-center justify-start text-white rounded-2xl overflow-hidden"
            >
                {/* Contenedor de la IMAGEN */}
                <div
                    className="absolute inset-y-0 right-0 w-full h-full flex items-center justify-center rounded-r-2xl overflow-hidden"
                >
                    <img
                        src="/img/newslatter.png"
                        alt="Imagen de Plan de Canje"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-500 ease-in-out" />
                <div className="relative z-20 w-full lg:w-[40%] h-full flex items-center justify-center px-4">
                    {/* Contenido */}
                    <div
                        className="bg-white text-black p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-xl transform transition-all duration-500 ease-in-out"
                    >
                        <p className="text-xs uppercase font-semibold tracking-wide text-gray-600 text-center lg:text-left mb-2">
                            Aprovecha nuestro exclusivo plan de canje
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-center lg:text-left mb-4">
                            ¡PLAN DE CANJE!
                        </h2>
                        <p className="text-sm text-center lg:text-left mb-6">
                            Recibe un 20% de descuento en tu primera compra y mantente al día con nuestras últimas ofertas y novedades.
                        </p>
                        <Link to="/canje">
                            <button
                                type="button"
                                className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-6 py-3 text-sm transition duration-300 ease-in-out cursor-pointer"
                            >
                                ¡Infórmate Ahora!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Segundo Banner: Membresía */}
            <div
                className="relative z-10 container mx-auto py-20 flex flex-col lg:flex-row items-center justify-end text-white rounded-2xl overflow-hidden bg-[#1a4e2e]"
            >
                {/* Contenedor de la IMAGEN */}
                <div
                    className="absolute inset-y-0 left-0 w-[60%] h-full flex items-center justify-center rounded-l-2xl overflow-hidden"
                >
                    <img
                        src="/img/newslatter2.png"
                        alt="Imagen de Membresía Sostenible"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="relative z-20 w-full lg:w-[40%] h-full flex items-center justify-center px-4">
                    {/* Contenido */}
                    <div
                        className="bg-white text-black p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-xl transform transition-all duration-500 ease-in-out"
                    >
                        <p className="text-xs uppercase font-semibold tracking-wide text-gray-600 text-center lg:text-left mb-2">
                            Únete a nuestra comunidad
                        </p>
                        <h2 className="text-xl md:text-2xl font-bold text-center lg:text-left mb-4">
                            MÁS QUE CLIENTES, UNA COMUNIDAD SOSTENIBLE
                        </h2>
                        <p className="text-sm text-center lg:text-left mb-6">
                            Accede a descuentos exclusivos, eventos especiales y participa activamente en nuestras iniciativas de sostenibilidad.
                        </p>

                        <Link to="/membresia"> {/* NOTA: En tu código original, este Link iba a "/canje" para el segundo banner. Si debe ir a "/membresia", cámbialo. */}
                            <button
                                type="button"
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-6 py-3 text-sm transition duration-300 ease-in-out cursor-pointer"
                            >
                                ¡Hazte Miembro!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};