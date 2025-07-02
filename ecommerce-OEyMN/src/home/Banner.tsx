import { Link } from "react-router-dom"

export const Banner = () => {
    return (
        <div className="relative bg-gray-900 text-white min-h-[900px] overflow-hidden">
            {/* Imagen de fondo sin opacidad directa */}
            <div
                className="absolute inset-0 bg-cover bg-center h-full"
                style={{ backgroundImage: 'url(/img/banner.png)' }}
                role="img"
                aria-label="Fondo de componentes electrónicos reacondicionados"
            />

            {/* Capa de overlay negra con opacidad ligeramente ajustada (puedes probar 50 o 40) */}
            <div className="absolute inset-0 bg-black opacity-40" aria-hidden="true" />

            <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center lg:py-40 px-4 md:px-8">
                <h1 className="text-4xl font-bold mb-4 lg:text-6xl max-w-4xl leading-tight tracking-wide">
                    Encuentra Calidad y Ahorro: Componentes Reacondicionados Certificados
                </h1>
                <p className="text-lg mb-8 lg:text-2xl max-w-3xl md:text-xl">
                    Potencia tu equipo, alarga la vida útil de la tecnología y contribuye a un futuro más sostenible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Link
                        to="/componentes"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 sm:px-6 md:px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105" // Ajuste de px responsivo
                    >
                        Explorar Catálogo
                    </Link>
                    <Link
                        to="/canje"
                        className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 sm:px-6 md:px-8 rounded-lg shadow-lg hover:bg-white hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105" // Ajuste de px responsivo
                    >
                        Conoce el Plan Canje
                    </Link>
                </div>
            </div>
        </div>
    )
}