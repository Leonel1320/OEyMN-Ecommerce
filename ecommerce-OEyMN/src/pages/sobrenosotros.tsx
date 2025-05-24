
const SobreNosotros = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-100 to-green-100 p-10 rounded-3xl shadow-lg max-w-5xl mx-auto space-y-12 text-[#1f2937]">
      
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-green-700 mb-3 tracking-tight drop-shadow-md">
          Sobre Nosotros
        </h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          En <strong className="text-green-800">Ecomputers</strong> combinamos tecnología de punta con un firme compromiso ambiental. 
          Nos especializamos en la venta de componentes de hardware eficientes y sostenibles para PCs. 
          Impulsamos el desarrollo tecnológico con conciencia ecológica en San Salvador de Jujuy.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 border border-green-200">
        <h3 className="text-2xl font-semibold text-green-700 mb-4 border-b-4 border-cyan-300 pb-2">
          Nuestra Misión
        </h3>
        <p className="text-green-900 leading-relaxed">
          Impulsar un acceso tecnológico responsable que beneficie a nuestros clientes, la comunidad, y al medio ambiente.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 border border-green-200">
        <h3 className="text-2xl font-semibold text-green-700 mb-6 border-b-4 border-cyan-300 pb-2">
          ¿Qué Ofrecemos?
        </h3>
        <ul className="list-disc list-inside space-y-3 text-green-800 leading-relaxed text-lg">
          <li>Componentes de PC ecológicos y de alto rendimiento</li>
          <li>Periféricos y accesorios de todas las gamas de precios</li>
          <li>Asesoramiento técnico especializado</li>
          <li>Te prestamos una notebook si necesitas un reemplazo mientras te arreglamos la tuya</li>
          <li>Recibimos tus componentes usados como forma de pago</li>
          <li>Ofrecemos garantías extendidas para tu equipo reacondicionado</li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-md p-8 border border-green-200">
        <h3 className="text-2xl font-semibold text-green-700 mb-4 border-b-4 border-cyan-300 pb-2">
          ¿Por qué elegirnos?
        </h3>
        <p className="text-green-900 leading-relaxed">
          En Ecomputers creemos que la tecnología puede ser poderosa y respetuosa con el medio ambiente. 
          Nuestro equipo está comprometido con ayudarte a elegir soluciones sostenibles que se alineen con tus necesidades y valores.
        </p>
      </div>

    </section>
  );
};

export default SobreNosotros;