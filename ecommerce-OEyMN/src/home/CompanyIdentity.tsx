import React from 'react';
import { Link } from "react-router-dom"; // Importa Link

export const CompanyIdentity = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md mb-5">
            <div className="max-w-6xl mx-auto text-center">
                {/* Logo de la Empresa - Reemplaza con tu logo real */}
                <div className="mb-8">
                    <img
                        src="/img/foto.png"
                        alt="Logo de Ecomputers"
                        className="h-24 mx-auto object-contain"
                    />
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Somos <span className="text-green-600">Ecomputers</span>:
                    <br className="sm:hidden" /> Lo Mejor en Hardware, Nuevo o Reacondicionado.
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                    Tu aliado en tecnología de calidad, consciente y accesible.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Eje 1: Precios Justos y Ahorro */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        {/* Icono de Dinero/Ahorro (Puedes usar Lucide React, Font Awesome, etc.) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-coin h-12 w-12 text-green-600 mb-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" /><path d="M12 7v10" /></svg>
                        <h3 className="text-xl font-semibold text-gray-900">Precios Justos y Ahorro</h3>
                        <p className="mt-2 text-gray-600">
                            Accede a hardware de alto rendimiento a precios convenientes, incluyendo opciones reacondicionadas de calidad garantizada.
                        </p>
                    </div>

                    {/* Eje 2: Tecnología Sostenible */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        {/* Icono de Hoja/Ecología (Puedes usar Lucide React, Font Awesome, etc.) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-battery-eco h-12 w-12 text-green-600 mb-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-5.5" /><path d="M3 16.143c0 -2.84 2.09 -5.143 4.667 -5.143h2.333v.857c0 2.84 -2.09 5.143 -4.667 5.143h-2.333v-.857z" /><path d="M3 20v-3" /></svg>
                        <h3 className="text-xl font-semibold text-gray-900">Tecnología Sostenible</h3>
                        <p className="mt-2 text-gray-600">
                            Fomentamos la reutilización y el reacondicionamiento para reducir el impacto ambiental y promover un consumo responsable.
                        </p>
                    </div>

                    {/* Eje 3: Asesoramiento Experto */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        {/* Icono de Asesoramiento/Soporte (Puedes usar Lucide React, Font Awesome, etc.) */}
                        <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                        <h3 className="text-xl font-semibold text-gray-900">Asesoramiento Experto</h3>
                        <p className="mt-2 text-gray-600">
                            Recibe acompañamiento personalizado para elegir el equipo ideal, sin sobreventa, solo lo que realmente necesitas.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-lg text-gray-700">
                        Nos diferenciamos por nuestro compromiso con el cliente y el planeta. Facilitamos la actualización de tus dispositivos con nuestro programa de canje y te brindamos el soporte profesional que mereces.
                    </p>
                </div>

                {/* Nuevo Botón "Averigua más sobre nosotros" */}
                <div className="mt-10">
                    <Link
                        to="/nosotros"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Averigua más sobre nosotros
                    </Link>
                </div>
            </div>
        </section>
    );
};