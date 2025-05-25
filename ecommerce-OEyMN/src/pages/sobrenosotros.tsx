
import logo from "../../src/assets/images/foto.png";

const SobreNosotros = () => {
  return (

    <main className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">

      {/* CONTENIDO PRINCIPAL */}
      <section className="flex-1 bg-gradient-to-br from-cyan-50 to-green-100 p-10 rounded-3xl shadow-2xl text-[#1f2937]">
        <div className="text-center">
          <img
            src={logo}
            alt="Logo Ecomputers"
            className="w-40 h-40 mx-auto mb-4 animate-pulse"
          />
          <h2 className="text-4xl font-extrabold text-green-700 mb-3 tracking-tight drop-shadow-md">
            ECOMPUTER
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            En <strong className="text-green-800">Ecomputers</strong> combinamos tecnología de punta con un firme compromiso ambiental.
            Nos especializamos en la venta de componentes de hardware eficientes y sostenibles para PCs.
            Impulsamos el desarrollo tecnológico con conciencia ecológica en San Salvador de Jujuy.
          </p>
        </div>

        {/* MISIÓN - VISIÓN - ELECCIÓN */}
        <div className="grid gap-10 lg:grid-cols-3 mt-10">
          {/* ... tarjetas (sin cambios) */}
        </div>

        {/* PBC texto */}
        <div className="mt-12 text-center text-green-800">
          <h4 className="text-xl font-semibold mb-2">Paquete de Beneficios para el Cliente (PBC)</h4>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Nuestro propósito como empresa de beneficio colectivo es reducir la huella de carbono del sector tecnológico mediante la reutilización,
            la eficiencia energética, y la educación ambiental en el uso responsable de equipos informáticos.
          </p>
        </div>

        {/* DIAGRAMA */}
        <div className="relative flex items-center justify-center h-[400px] w-full mt-12">
          <div className="w-48 h-48 bg-green-600 text-white rounded-full flex items-center justify-center text-center shadow-lg text-xl font-semibold z-10">
            Productos <br /> Reacondicionados
          </div>
          {[
            "Garantía Extendida",
            "Notebook de Reemplazo",
            "Recibimos Usados",
            "Asesoramiento Técnico",
            "Ecológicos y Potentes",
            "Precios Justos",
          ].map((beneficio, i) => {
            const angle = (i / 6) * (2 * Math.PI);
            const x = 160 * Math.cos(angle);
            const y = 160 * Math.sin(angle);
            return (
              <div
                key={i}
                className="absolute w-36 h-36 bg-white rounded-full flex items-center justify-center text-center text-green-800 text-sm font-medium shadow-md border border-green-300 transition-transform duration-300 hover:scale-105"
                style={{ top: `calc(50% + ${y}px - 72px)`, left: `calc(50% + ${x}px - 72px)` }}
              >
                {beneficio}
              </div>
            );
          })}
        </div>
      </section>

      {/* ASIDE - SE MUESTRA EN TODAS LAS PANTALLAS */}
      <aside className="w-full lg:w-80 bg-white rounded-xl shadow-md p-6 border border-green-300 h-fit sticky top-20">
        <h3 className="text-xl font-bold text-green-700 mb-3 border-b-2 border-cyan-300 pb-1">
          ¿Qué Ofrecemos?
        </h3>
        <ul className="list-disc list-inside space-y-2 text-green-800 text-sm">
          <li>Componentes de PC ecológicos</li>
          <li>Periféricos y accesorios variados</li>
          <li>Asesoramiento técnico</li>
          <li>Notebook de reemplazo</li>
          <li>Recibimos usados como pago</li>
          <li>Garantías extendidas</li>
        </ul>

        <div className="mt-6 text-green-700 font-semibold text-sm bg-green-100 rounded-lg p-3 shadow-sm">
          🌱 Comprá con propósito: cada compra impulsa la tecnología sustentable en el NOA.
        </div>
      </aside>

    </main>
  );


};

export default SobreNosotros;
