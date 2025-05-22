
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
                        Suscríbete a nuestro plan para Estudiantes
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold text-center lg:text-left mb-4">
                        Suscripcion para alquilar una PC Reacondicionada que puede ser Tuya
                    </h2>
                    <p className="text-sm text-center lg:text-left mb-6">
                        Introduce tu correo electrónico para cometar nuestros terminos y condiciones.
                    </p>
                    <form className="flex flex-col gap-4 sm:flex-row transition-all duration-500 ease-in-out">
                        <input
                            type="email"
                            className="flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ease-in-out"
                            placeholder="Correo electrónico"
                        />
                        <button
                            type="submit"
                            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full px-6 py-3 text-sm transition duration-300 ease-in-out"
                        >
                            Suscribirme
                        </button>
                    </form>
                </div>
            </div>
        </div>



    )
}

