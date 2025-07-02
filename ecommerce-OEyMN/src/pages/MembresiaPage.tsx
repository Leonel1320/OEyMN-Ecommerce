// src/pages/MembresiaPage.tsx
import React, { useState, useEffect } from 'react';

export const MembresiaPage = () => {
    // Estado para controlar qué beneficio está expandido.
    const [expandedBenefits, setExpandedBenefits] = useState({});

    // Función para alternar el estado de expansión de un beneficio específico
    const toggleBenefit = (id) => {
        setExpandedBenefits(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    // Efecto para desplazar la ventana al inicio cuando se carga la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Array de objetos para los beneficios
    const benefits = [
        {
            id: 'beneficio1',
            title: 'Soporte técnico preferencial',
            description: 'Acceso prioritario a nuestro equipo de expertos para solucionar tus dudas y problemas técnicos de forma rápida y eficiente.',
            icon: (
                <svg className="w-6 h-6 mr-3 flex-shrink-0 transition-transform duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            id: 'beneficio2',
            title: 'Descuentos en productos y servicios',
            description: 'Disfruta de precios exclusivos en una amplia gama de productos reacondicionados y servicios de reparación, solo para miembros.',
            icon: (
                <svg className="w-6 h-6 mr-3 flex-shrink-0 transition-transform duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
            )
        },
        {
            id: 'beneficio3',
            title: 'Diagnósticos gratuitos',
            description: 'Ofrecemos diagnósticos completos sin costo para tus dispositivos, ayudándote a identificar problemas antes de cualquier reparación.',
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-search w-6 h-6 mr-3 flex-shrink-0 transition-transform duration-300 transform group-hover:scale-110"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            )
        },
        {
            id: 'beneficio4',
            title: 'Acceso anticipado a stock reacondicionado',
            description: 'Sé el primero en enterarte y acceder a nuestras últimas unidades de productos reacondicionados antes que el público general.',
            icon: (
                <svg className="w-6 h-6 mr-3 flex-shrink-0 transition-transform duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            )
        },
        {
            id: 'beneficio5',
            title: 'Asesoramiento ilimitado',
            description: 'Recibe orientación personalizada sobre la compra, mantenimiento y optimización de tus equipos, sin restricciones de tiempo.',
            icon: (
                <svg className="w-6 h-6 mr-3 flex-shrink-0 transition-transform duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
            )
        },
        {
            id: 'beneficio6',
            title: 'Contenido Exclusivo',
            description: 'Accede a guías, tutoriales y artículos exclusivos sobre el cuidado y optimización de tus dispositivos electrónicos.',
            icon: (
                <svg className="w-6 h-6 mr-3 flex-shrink-0 transition-transform duration-300 transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path>
                </svg>
            )
        }
    ];

    // Nuevos Precios de la membresía
    const monthlyPriceARS = "19.999 ARS/mes";
    const monthlyPriceUSD = "19 USD/mes";
    const annualPriceARS = "199.999 ARS/año";
    const annualPriceUSD = "199 USD/año";

    return (
        <div className="flex flex-col min-h-screen">
            <section className="relative w-full py-20 bg-cover bg-center text-white"
                style={{ backgroundImage: 'url(/img/newslatter2.png)' }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Únete a Nuestra Comunidad Sostenible
                    </h1>
                    <p className="text-xl md:text-2xl">
                        ¡Realiza una compra y conviertete en Miembro!
                    </p>
                </div>
            </section>

            {/* Sección: ¿Qué incluye la membresía? - Con funcionalidad de acordeón */}
            <section className="container mx-auto px-4 py-12 md:py-20">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    ¿Qué incluye la membresía?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-green-500">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group">
                            {/* Encabezado clicable del beneficio */}
                            <button
                                className="w-full flex items-center justify-between p-6 cursor-pointer focus:outline-none"
                                onClick={() => toggleBenefit(benefit.id)}
                            >
                                <div className="flex items-center">
                                    {benefit.icon}
                                    <p className="text-lg font-semibold text-gray-700">{benefit.title}</p>
                                </div>
                                {/* Ícono de flecha que rota */}
                                <svg
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedBenefits[benefit.id] ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {/* Contenido expandible del beneficio */}
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedBenefits[benefit.id] ? 'max-h-screen opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-sm text-gray-600 border-t pt-4 mt-4">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sección: Únete a nuestra comunidad */}
            <section className="bg-green-100 py-12 md:py-20 rounded-lg shadow-md">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="md:w-1/2">
                        <img src="/img/card.png" alt="Membresía Ecomputers" className="rounded-lg shadow-md w-full" />
                    </div>
                    <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md text-center md:text-left">
                        <p className="text-sm font-semibold text-green-600 uppercase mb-2">
                            TU DECISIÓN SOSTENIBLE, TU VENTAJA EXCLUSIVA.
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            CUIDA AL PLANETA Y A VOS
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Accede a descuentos exclusivos, soporte prioritario, eventos especiales y participa activamente en nuestras iniciativas de economía circular.
                        </p>

                        {/* Precios de la membresía - AHORA CON OPCIÓN MENSUAL Y ANUAL */}
                        <div className="mb-6">
                            <p className="text-xl md:text-2xl font-bold text-green-700 mb-2">
                                ¡Inscríbete hoy!
                            </p>
                            <p className="text-lg text-gray-800">
                                <span className="font-semibold">Plan Mensual:</span> {monthlyPriceARS} / {monthlyPriceUSD}
                            </p>
                            <p className="text-lg text-gray-800">
                                <span className="font-semibold">Plan Anual:</span> {annualPriceARS} / {annualPriceUSD} <span className="text-green-600 font-semibold">(¡Ahorra en tu membresía anual!)</span>
                            </p>
                        </div>

                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
                            ¡Hazte Miembro!
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default MembresiaPage;