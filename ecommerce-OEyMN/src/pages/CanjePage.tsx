// src/pages/CanjePage.tsx
import React, { useState } from 'react';

const CanjePage: React.FC = () => {
  // Estado para controlar si los términos y condiciones están expandidos o colapsados
  const [areTermsExpanded, setAreTermsExpanded] = useState(false);
  // Nuevo estado para controlar si el formulario está expandido o colapsado
  const [isFormExpanded, setIsFormExpanded] = useState(true); // <--- Cambiado a true por defecto, para que sea visible al cargar

  // Función para alternar la visibilidad de los términos
  const toggleTerms = () => {
    setAreTermsExpanded(!areTermsExpanded);
  };

  // Función para alternar la visibilidad del formulario
  const toggleForm = () => {
    setIsFormExpanded(!isFormExpanded);
  };

  return (
    <div className="container mx-auto p-6 md:p-10 lg:p-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Programa de Canje para Actualización Tecnológica</h1>

      {/* Sección de Términos y Condiciones */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b-2 border-cyan-600 pb-2 flex justify-between items-center cursor-pointer"
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
                **Gama del Producto:** El dispositivo a canjear debe ser de **gama alta**. Esto se evaluará en base a
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

      {/* Sección del Formulario de Canje - AHORA COLAPSABLE */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6 border-b-2 border-cyan-600 pb-2 flex justify-between items-center cursor-pointer"
            onClick={toggleForm} // <--- Hace el encabezado del formulario clickeable
            aria-expanded={isFormExpanded} // <--- Accesibilidad
            aria-controls="form-content" // <--- Conecta con el contenido del formulario
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
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                    <option value="pc-escritorio">PC de Escritorio</option>
                    <option value="monitor">Monitor</option>
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
                    placeholder="Ej: Apple MacBook Pro M1, Samsung Galaxy S23 Ultra"
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
                className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
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