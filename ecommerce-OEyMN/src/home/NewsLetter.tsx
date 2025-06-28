// src/home/NewsLetter.tsx
import { Link } from 'react-router-dom';

export const NewsLetter = () => {
    return (
        <div className="relative bg-gray-900 text-white">
            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
                style={{ backgroundImage: 'url(/img/newslatter.png)' }}
            />
            <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-500 ease-in-out" />

            {/* Contenido del formulario */}
            <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center lg:items-start transition-all duration-500 ease-in-out">
                <div
                    className="bg-white text-black p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-xl lg:ml-12 lg:w-[40%] transform transition-all duration-500 ease-in-out"
                >
                    <p className="text-xs uppercase font-semibold tracking-wide text-gray-600 text-center lg:text-left mb-2">
                        Aprovecha nuestro exclusivo plan de canje
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold text-center lg:text-left mb-4">
                        ¡Plan de Canje!
                    </h2>
                    <p className="text-sm text-center lg:text-left mb-6">
                        Recibe un 20% de descuento en tu primera compra y mantente al día con nuestras últimas ofertas y novedades.
                    </p>

                    <Link to="/canje">
                        <button
                            type="button"
                            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-6 py-3 text-sm transition duration-300 ease-in-out cursor-pointer" // <--- ¡Añadido!
                        >
                            ¡Infórmate Ahora!
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}