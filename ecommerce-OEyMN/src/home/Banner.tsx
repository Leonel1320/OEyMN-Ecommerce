import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <div className="relative bg-gray-900 text-white">
            {/* Imagen */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-70 h-full"
                style={{ backgroundImage: 'url(/img/banner.png)' }}
            />

            <div className="absolute inset-0 bg-black opacity-50" />

            <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center lg:py-40 lg:px-8">
                <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
                    Los Mejores Componentes Reacondicionados
                </h1>
                <p className="text-lg mb-8 lg:text-2xl">
                    Descubre nuestros planes exclusivos y ofertas
                </p>
                <Link
                    to="/componentes"
                    className="bg-gray-900 hover:bg-gray-950 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
                >
                    Ver Reacondicionados
                </Link>
            </div>
        </div>
    )
}

