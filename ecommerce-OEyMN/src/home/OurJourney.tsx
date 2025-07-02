import React from 'react';
import { Link } from 'react-router-dom';

export const OurJourney = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
                    <span className="text-green-600">Ecomputers</span>: Más que Hardware, un Compromiso
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Columna Izquierda: Galería de Imágenes y Hito */}
                    <div className="space-y-6">
                        {/* Puedes usar imágenes de tu equipo, instalaciones, o stock de productos */}
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/img/EquipoDeEcomputersTrabajando.png" alt="Equipo de Ecomputers trabajando" className="rounded-lg shadow-md w-full h-auto object-cover" />
                            <img src="/img/InstalacioneDeEcomputers.png" alt="Instalaciones de Ecomputers" className="rounded-lg shadow-md w-full h-auto object-cover" />
                            <img src="/img/CoomponentesReacondicionadosEnStock.png" alt="Componentes reacondicionados en stock" className="rounded-lg shadow-md w-full h-auto object-cover" />
                            <img src="/img/ClienteRecibiendoAsesoramiento.png" alt="Cliente recibiendo asesoramiento" className="rounded-lg shadow-md w-full h-auto object-cover" />
                        </div>

                        {/* Hito de Experiencia / Impacto (Ejemplo: "Más de X años / Y dispositivos") */}
                        <div className="relative text-center mt-8">
                            {/* Un icono grande o un gráfico simple si tuvieran datos de impacto */}
                            <p className="text-6xl font-bold text-green-600">
                                +<span className="text-green-500">10</span>
                            </p>
                            <p className="text-2xl font-semibold text-gray-800 mt-2">
                                Años de compromiso con la tecnología y el planeta.
                            </p>
                            {/* O si tienes datos concretos de reciclaje/reacondicionamiento */}
                            {/* <p className="text-2xl font-semibold text-gray-800 mt-2">
                                +1000 Dispositivos reacondicionados
                            </p> */}
                        </div>
                    </div>

                    {/* Columna Derecha: Texto Descriptivo y Elementos de Impacto/Compromiso */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Queremos Impulsar un acceso tecnológico responsable que beneficie a nuestros clientes, la comunidad y al medio ambiente.
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            En Ecomputers, no solo vendemos hardware. Nos apasiona hacer que la tecnología de calidad sea <strong className="text-green-600">accesible para todos</strong>, desde estudiantes que inician sus estudios hasta profesionales de alto rendimiento. Creemos en un futuro donde la innovación y la <strong className="text-green-600">sostenibilidad</strong> van de la mano. {/* cite: 22, 24, 26, 27 */}
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Nuestro compromiso va más allá de la venta: ofrecemos <strong className="text-green-600">asesoramiento experto y honesto</strong>, asegurando que cada cliente encuentre exactamente lo que necesita, sin sobreventa. Además, nuestro programa de canje facilita la actualización de equipos, contribuyendo a la <strong className="text-green-600">economía circular</strong> y reduciendo el impacto ambiental. {/*cite: 18, 19, 21, 22*/}
                        </p>

                        {/* Podrías añadir barras de progreso si tuvieran datos porcentuales, por ejemplo:
                            - % de clientes satisfechos
                            - % de productos reacondicionados vendidos vs nuevos
                            - % de reducción de residuos electrónicos
                        */}
                        <div className="mt-8 space-y-6">
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Impacto en la Sostenibilidad</h4>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-green-600 h-3 rounded-full" style={{ width: '75%' }}></div> {/* Ejemplo: 75% */}
                                </div>
                                <p className="text-sm text-gray-600 mt-1">75% de nuestros productos prolongan su vida útil gracias al reacondicionamiento.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Comunidad y Confianza</h4>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-cyan-600 h-3 rounded-full" style={{ width: '90%' }}></div> {/* Ejemplo: 90% */}
                                </div>
                                <p className="text-sm text-gray-600 mt-1">90% de satisfacción en asesoramiento y soporte al cliente.</p>
                            </div>
                        </div>

                        {/* Botón opcional para la página "Sobre Nosotros" si esta sección no es la página completa */}
                        <div className="mt-10 text-center lg:text-left">
                            <Link
                                to="/nosotros"
                                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Conoce nuestra historia completa
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};