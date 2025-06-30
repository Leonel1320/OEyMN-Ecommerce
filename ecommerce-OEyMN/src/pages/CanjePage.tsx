// src/pages/CanjePage.tsx
import React, { useState, useEffect } from 'react';

const CanjePage: React.FC = () => {
    // Estado para controlar si los términos y condiciones están expandidos o colapsados
    const [areTermsExpanded, setAreTermsExpanded] = useState(false);
    // Nuevo estado para controlar si el formulario está expandido o colapsado
    const [isFormExpanded, setIsFormExpanded] = useState(true);

    // ** Desplazamiento al inicio de la página al montarse **
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Función para alternar la visibilidad de los términos
    const toggleTerms = () => {
        setAreTermsExpanded(!areTermsExpanded);
    };

    // Función para alternar la visibilidad del formulario
    const toggleForm = () => {
        setIsFormExpanded(!isFormExpanded);
    };

    // Topes de descuento
    const maxDiscountPercentage = "hasta el 30%";
    const maxDiscountAmountARS = "hasta $50.000 ARS"; 
    const maxDiscountAmountUSD = "hasta 50 USD"; 

    // Array de dispositivos con íconos y nombres
    const acceptedDevices = [
        { name: 'Laptops', icon: (
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19l18 0" /><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /></svg>
        )},
        { name: 'Tarjetas Gráficas', icon: (
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" /><path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" /><path d="M8 9v2" /><path d="M7 10h2" /><path d="M14 10h2" /></svg>
        )},
        { name: 'Procesadores', icon: (
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-cpu"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /><path d="M9 9h6v6h-6z" /><path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path d="M14 3v2" /><path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path d="M10 21v-2" /></svg>
        )},
        { name: 'Memorias RAM', icon: (
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-live-photo"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6a6 6 0 1 1 -6 6l.004 -.225a6 6 0 0 1 5.996 -5.775m0 4a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2m3.9 9.11a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m3.14 -2.5a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m1.73 -3.61a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m0 -4a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m-1.73 -3.61a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-3.14 -2.5a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-3.9 -.89a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-3.9 .89a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-3.14 2.5a1 1 0 0 1 1 1a1 1 0 1 1 -2 .01c0 -.562 .448 -1.01 1 -1.01m-1.73 3.61a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m0 4a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m1.73 3.61a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m3.14 2.5a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1m3.9 .89a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1" /></svg>
        )},
        { name: 'SSDs', icon: (
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-device-sd-card"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 21h10a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2h-6.172a2 2 0 0 0 -1.414 .586l-3.828 3.828a2 2 0 0 0 -.586 1.414v10.172a2 2 0 0 0 2 2z" /><path d="M13 6v2" /><path d="M16 6v2" /><path d="M10 7v1" /></svg>
        )},
    ];


    return (
        <div className="container mx-auto p-6 md:p-10 lg:p-12 flex flex-col min-h-screen space-y-10">
            <section className="relative w-full py-20 bg-cover bg-center text-white"
                style={{ backgroundImage: 'url(/img/canje.png)' }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Programa de Canje para Actualización Tecnológica
                    </h1>
                    <p className="text-xl md:text-2xl">
                        ¡Gracias por tu interés en Tecnología que cuida el PLANETA!
                    </p>
                </div>
            </section>

            {/* SECCIÓN AÑADIDA: Así funciona nuestro Plan Canje */}
            <section className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                    Así funciona nuestro Plan Canje:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Paso 1 */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <div className="text-green-500 text-4xl font-bold mb-4">1</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Evalúa tu dispositivo</h3>
                        <p className="text-gray-600">
                            Completa nuestro formulario online con los detalles de tu equipo actual.
                        </p>
                    </div>
                    {/* Paso 2 */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <div className="text-green-500 text-4xl font-bold mb-4">2</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Recibe tu oferta</h3>
                        <p className="text-gray-600">
                            Te enviaremos una propuesta de valor por tu dispositivo en 24-48 horas hábiles.
                        </p>
                    </div>
                    {/* Paso 3 */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <div className="text-green-500 text-4xl font-bold mb-4">3</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Elige tu nuevo equipo</h3>
                        <p className="text-gray-600">
                            Aplica el valor de tu canje como descuento en la compra de un producto reacondicionado de nuestro catálogo.
                        </p>
                    </div>
                </div>
                <p className="mt-10 text-lg text-gray-700 font-semibold text-center">
                    El descuento máximo por canje puede ser de {maxDiscountPercentage} del valor del nuevo producto a adquirir, con un tope máximo de {maxDiscountAmountARS} o su equivalente en {maxDiscountAmountUSD}.
                    El valor final de tu canje dependerá del estado, modelo y la evaluación técnica de tu dispositivo.
                </p>
                {/* Botón "Comenzar Canje" puede ser un enlace interno al formulario */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => {
                            setIsFormExpanded(true); // Expande el formulario
                            
                            document.getElementById('form-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                    >
                        ¡Comenzar Canje Ahora!
                    </button>
                </div>
            </section>

            {/* SECCIÓN MODIFICADA: ¿Qué dispositivos aceptamos? */}
            <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                        ¿Qué dispositivos aceptamos para canje?
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center text-green-600 text-lg">
                        {acceptedDevices.map((device, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full max-w-[150px]"
                            >
                                {device.icon}
                                <p className="text-md font-semibold text-gray-700 text-center">{device.name}</p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-8 text-gray-600 leading-relaxed">
                        **Importante:** Los dispositivos deben ser de **gama alta o media-alta** y no deben superar los **tres (3) años desde su fecha de lanzamiento**. Deben estar en condiciones funcionales, aunque se acepta desgaste normal. Se realizará una evaluación detallada para determinar el valor exacto del canje.
                    </p>
                </div>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-lg mb-10">
                <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b-2 border-green-600 pb-2 flex justify-between items-center cursor-pointer"
                    onClick={toggleTerms}
                    aria-expanded={areTermsExpanded}
                    aria-controls="terms-content"
                >
                    Términos y Condiciones del Canje
                    <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${areTermsExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </h2>

                {/* Contenido de Términos y Condiciones */}
                <div
                    id="terms-content"
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${areTermsExpanded ? 'max-h-screen opacity-100 pt-2' : 'max-h-0 opacity-0'}`}
                >
                    <div className="text-gray-600 space-y-4 leading-relaxed">
                        <p>
                            Bienvenido a nuestro Programa de Canje para Actualización Tecnológica. Este programa ha sido diseñado para facilitar
                            tu acceso a la tecnología más reciente, permitiéndote entregar tus dispositivos electrónicos usados
                            como parte de pago. Nuestro objetivo es reducir las barreras económicas y promover la sostenibilidad
                            mediante la reutilización y el reciclaje responsable.
                        </p>
                        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Requisitos de Elegibilidad del Producto para Canje:</h3>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            <li>
                                **Gama del Producto:** El dispositivo a canjear debe ser de **gama alta o media-alta**. Esto se evaluará en base a
                                sus especificaciones técnicas, rendimiento y posicionamiento en el mercado al momento de su lanzamiento.
                                Nos reservamos el derecho de determinar si un producto cumple con esta categoría.
                            </li>
                            <li>
                                **Antigüedad del Producto:** El dispositivo no debe haber superado los **tres (3) años desde su fecha de lanzamiento oficial al mercado**.
                                La fecha de lanzamiento se verificará mediante documentación oficial del fabricante o bases de datos reconocidas.
                            </li>
                            <li>
                                **Funcionalidad:** El dispositivo debe estar en **condiciones funcionales operativas**. Esto incluye que
                                el sistema operativo inicie correctamente, la pantalla no tenga daños severos (grietas, píxeles muertos significativos),
                                los puertos funcionen, y no presente daños por líquidos o golpes extremos.
                            </li>
                            <li>
                                **Estética:** Aunque se permite un desgaste normal por el uso, el dispositivo no debe presentar
                                daños estéticos que afecten gravemente su valor o funcionamiento (ej. carcasas rotas, botones faltantes).
                            </li>
                            <li>
                                **Originalidad:** Todos los componentes internos y externos deben ser originales de fábrica y no haber sido manipulados
                                de forma que invaliden su funcionalidad o seguridad.
                            </li>
                            <li>
                                **Propiedad:** El cliente debe ser el legítimo propietario del dispositivo y poder demostrarlo si es requerido.
                                El dispositivo no debe estar reportado como robado o perdido.
                            </li>
                            <li>
                                **Información Personal:** Es responsabilidad del cliente realizar una copia de seguridad y eliminar toda la información personal
                                y sensible del dispositivo antes de entregarlo. La empresa no se hace responsable por la pérdida o acceso a datos dejados en el dispositivo.
                            </li>
                        </ul>
                        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Proceso de Evaluación:</h3>
                        <p>
                            Una vez enviado el formulario, nuestro equipo técnico evaluará la elegibilidad y el valor del dispositivo ofrecido en canje.
                            Nos pondremos en contacto contigo para coordinar la inspección física y confirmar la oferta final.
                        </p>
                        <p>
                            La valoración final del dispositivo dependerá de su estado, modelo y demanda en el mercado de segunda mano.
                            La oferta de canje se aplicará como descuento en la compra de un nuevo producto de nuestro catálogo.
                        </p>
                        <p>
                            Al participar en este programa, aceptas estos términos y condiciones. Nos reservamos el derecho de modificar
                            estos términos en cualquier momento.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección del Formulario de Canje*/}
            <section className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b-2 border-green-600 pb-2 flex justify-between items-center cursor-pointer"
                    onClick={toggleForm}
                    aria-expanded={isFormExpanded}
                    aria-controls="form-content"
                >
                    Formulario de Solicitud de Canje
                    {/* Icono para el formulario */}
                    <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${isFormExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </h2>

                {/* Contenido del Formulario (condicionalmente visible) */}
                <div
                    id="form-content" // <--- ID para accesibilidad
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isFormExpanded ? 'max-h-screen opacity-100 pt-2' : 'max-h-0 opacity-0'}`}
                >
                    <form className="space-y-6">
                        {/* Datos Personales */}
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 mb-3">Datos Personales</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono de Contacto</label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Datos del Dispositivo a Canjear */}
                        <div>
                            <h3 className="text-xl font-medium text-gray-800 mb-3">Datos del Dispositivo a Canjear</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="tipoDispositivo" className="block text-sm font-medium text-gray-700">Tipo de Dispositivo</label>
                                    <select
                                        id="tipoDispositivo"
                                        name="tipoDispositivo"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
                                        required
                                    >
                                        <option value="">Selecciona un tipo</option>
                                        <option value="laptop">Laptop</option>
                                        <option value="pc-escritorio">PC de Escritorio</option>
                                        <option value="tarjeta-grafica">Tarjeta Gráfica</option>
                                        <option value="procesador">Procesador</option>
                                        <option value="ram">Memoria RAM</option>
                                        <option value="ssd">SSD</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="marcaModelo" className="block text-sm font-medium text-gray-700">Marca y Modelo del Dispositivo</label>
                                    <input
                                        type="text"
                                        id="marcaModelo"
                                        name="marcaModelo"
                                        placeholder="Ej: Apple MacBook Pro M1, NVIDIA RTX 3080, Intel Core i7-10700K"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="fechaLanzamiento" className="block text-sm font-medium text-gray-700">Fecha Estimada de Lanzamiento</label>
                                    <input
                                        type="month"
                                        id="fechaLanzamiento"
                                        name="fechaLanzamiento"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="estadoFuncional" className="block text-sm font-medium text-gray-700">Estado Funcional</label>
                                    <select
                                        id="estadoFuncional"
                                        name="estadoFuncional"
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
                                        required
                                    >
                                        <option value="">Selecciona el estado</option>
                                        <option value="perfecto">Funcionando perfectamente</option>
                                        <option value="fallo-menor">Funcionando con fallos menores (ej. batería degradada)</option>
                                        <option value="fallo-mayor">Funcionando con fallos mayores (ej. puertos defectuosos)</option>
                                        <option value="no-enciende">No enciende / No funcional</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="estadoEstetico" className="block text-sm font-medium text-gray-700">Estado Estético</label>
                                    <textarea
                                        id="estadoEstetico"
                                        name="estadoEstetico"
                                        rows={3}
                                        placeholder="Describe el estado estético del dispositivo (rayones, golpes, pantalla, etc.)"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Comentarios Adicionales */}
                        <div>
                            <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700">Comentarios Adicionales</label>
                            <textarea
                                id="comentarios"
                                name="comentarios"
                                rows={4}
                                placeholder="Cualquier otra información relevante sobre tu dispositivo o el canje."
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                            ></textarea>
                        </div>

                        {/* Botón de Envío */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
                            >
                                Enviar Solicitud de Canje
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};
export default CanjePage;