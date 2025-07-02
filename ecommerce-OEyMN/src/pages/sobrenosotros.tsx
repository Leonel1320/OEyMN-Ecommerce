import React, { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { Navbar } from "../components/shared/navbar";
import { Footer } from "../components/shared/footer";

const url = (n: string, wrap = false) =>
  `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${n}.svg${wrap ? ")" : ""}`;

const servicios = [
  { titulo: "Reparación y Mantenimiento", ruta: "", descripcion: "Soluciones rápidas y profesionales para tu PC o notebook." },
  {
    titulo: "Venta de Hardware Asistida",
    ruta: "",
    descripcion: "Asesoramiento experto para elegir hardware potente y eco‑eficiente."
  },
  {
    titulo: "Canje de Hardware",
    ruta: "/canje",
    descripcion: "Entregá hardware de hasta 3 años de antigüedad y obtené hasta un 40% de descuento en tu compra."
  },
  {
    titulo: "Garantía de Productos",
    ruta: "/componentes",
    descripcion: "Garantía de 3 a 6 meses en reacondicionados o nuevos, con opciones extendidas."
  },
  {
    titulo: "Membresía Ecomputers Club",
    ruta: "/membresia",
    descripcion: "Mantenimiento mensual, soporte remoto, descuentos y acceso anticipado a nuevos equipos."
  },
  {
    titulo: "Asesoramiento Pre-Venta",
    ruta: "",
    descripcion: "Te ayudamos a elegir con benchmarks personalizados. Si comprás, tenés un 5% de descuento."
  }
];

const ImageWithFallback = ({
  src,
  alt,
  fallback,
  style,
}: {
  src: string;
  alt: string;
  fallback: string;
  style?: React.CSSProperties;
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallback)}
      style={style}
    />
  );
};

export default function SobreNosotros() {
  const parallax = useRef<IParallax>(null!);
  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);
  const [page, setPage] = useState(0);

  /* Animación zoom suave ida‑vuelta */
  const logoAnim = useSpring({
    loop: true,
    from: { transform: "scale(0.95)" },
    to: [
      { transform: "scale(1.05)", config: { duration: 3000 } },
      { transform: "scale(0.95)", config: { duration: 3000 } },
    ],
  });

  /* Animación del texto economía circular */
  const recycleAnim = useSpring({
    from: { opacity: 0, transform: "scale(0.7) translateY(30px)" },
    to: { opacity: 1, transform: "scale(1) translateY(0px)" },
    delay: 300,
    config: { tension: 210, friction: 18 },
  });

  /* Ocultar navbar al bajar */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHideNav(y > lastScrollY.current && y > 100);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleParallaxClick: React.MouseEventHandler = (e) => {
    if ((e.target as HTMLElement).closest("a,button,input,textarea,select")) return;
    const next = (page + 1) % 6;
    parallax.current.scrollTo(next);
    setPage(next);
  };
  const handleScroll = () => {
    setPage(Math.round(window.scrollY / window.innerHeight));
  };

  return (
    <>
      {/* NAVBAR */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${hideNav ? "-translate-y-full" : "translate-y-0"}`}>
        <Navbar />
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="fixed inset-0 pt-[64px] bg-[#253237] overflow-y-auto" onScroll={handleScroll}>
        <Parallax ref={parallax} pages={5} className="h-full w-full" onClick={handleParallaxClick}>

          {/* Fondo estrellas (factor ajustado para 6 páginas) */}
          <ParallaxLayer offset={0} speed={0} factor={6} style={{ backgroundImage: url("stars", true), backgroundSize: "cover" }} />

          {/* Satélite y nubes decorativas (offsets ajustados a las nuevas capas) */}
          <ParallaxLayer offset={3.5} speed={-0.3} style={{ pointerEvents: "none" }}>
            <ImageWithFallback src={url("satellite4")} alt="Satélite" fallback="/img/default-satellite.png" style={{ width: "15%", marginLeft: "70%" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1 }}>
            <ImageWithFallback src={url("cloud")} alt="Nube" fallback="/img/default-cloud.png" style={{ width: "20%", marginLeft: "55%" }} />
            <ImageWithFallback src={url("cloud")} alt="Nube" fallback="/img/default-cloud.png" style={{ width: "10%", marginLeft: "15%" }} />
          </ParallaxLayer>

          {/* HERO - offset 0 */}
          <ParallaxLayer offset={0} speed={0} factor={1} className="flex justify-center items-center px-4">
            <div className="text-center text-white max-w-4xl space-y-4">
              <animated.img style={logoAnim} src="/img/foto.png" alt="Logo Ecomputers" className="w-48 h-48 mx-auto " />

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider">
                <span className="text-green-600" style={{ textShadow: "0 0 8px rgba(255,255,255,0.65)" }}>ECO</span>
                <span className="text-blue-600" style={{ textShadow: "0 0 8px rgba(255,255,255,0.65)" }}>MPUTERS</span>
              </h1>

              <p className="text-xl leading-relaxed drop-shadow-md text-white">
                En <strong className="text-green-400 font-extrabold">Ecomputers</strong> combinamos tecnología de punta con un <span className="underline decoration-green-400 decoration-2">firme compromiso ambiental</span>.
                <br />
                Somos un equipo apasionado que impulsa <span className="italic text-green-300">soluciones tecnológicas sostenibles</span> desde <strong>San Salvador de Jujuy</strong>.
                <br />
                <em className="block mt-3 text-green-200 font-semibold">Impulsar un acceso tecnológico responsable que beneficie a nuestros clientes, la comunidad y al medio ambiente.</em>
              </p>
            </div>
          </ParallaxLayer>

          {/* SERVICIOS (grid) - offset 1 */}
          <ParallaxLayer offset={1} speed={0} factor={1} className="flex justify-center items-center px-4">
            <div className="w-full flex flex-col items-center">
              <h2 className="text-4xl font-bold text-white mb-12 text-center drop-shadow">Lo que hacemos por vos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {servicios.map((srv) => (
                  <div key={srv.titulo} className="bg-white/90 p-6 rounded-xl shadow-xl backdrop-blur-md border-l-4 border-green-400 flex flex-col justify-between items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">{srv.titulo}</h3>
                    <p className="text-gray-700 mb-4 flex-grow">{srv.descripcion}</p>
                    <Link to={srv.ruta} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-md font-semibold shadow-lg">Ver más</Link>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxLayer>

          {/* NUESTRA MISIÓN Y PROPUESTA DE VALOR - offset 2 */}
          <ParallaxLayer offset={2} speed={0.5} factor={1} className="flex justify-center items-center px-4">
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white w-full max-w-6xl rounded-lg shadow-2xl">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
                  Nuestra Misión y Propuesta de Valor
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  En <strong className="text-green-600">Ecomputers</strong>, nuestro objetivo es la comercialización de hardware, tanto nuevo como reacondicionado, incluyendo computadoras, notebooks, componentes, periféricos y accesorios.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ofrecemos <strong className="text-blue-600">asesoramiento personalizado</strong> para que cada cliente elija el equipo más adecuado a sus necesidades específicas, e implementamos un programa de <strong className="text-green-600">canje</strong> para facilitar la actualización de dispositivos de manera sostenible.
                </p>
                <p className="text-xl text-green-700 font-semibold italic mt-8">
                  "Impulsar un acceso tecnológico responsable que beneficie a nuestros clientes, la comunidad y al medio ambiente."
                </p>
              </div>
            </section>
          </ParallaxLayer>

          {/* A QUIÉNES SERVIMOS Y NUESTRO COMPROMISO - offset 3 */}
          <ParallaxLayer offset={3} speed={0.5} factor={1} className="flex justify-center items-center px-4">
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 w-full max-w-6xl rounded-lg shadow-2xl">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
                  A Quiénes Servimos y Nuestro Compromiso
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nuestro público principal son <strong className="text-blue-600">estudiantes universitarios y usuarios de alto rendimiento</strong> (gamers, diseñadores, profesionales). Entendemos sus necesidades de rendimiento, eficiencia y especificaciones técnicas detalladas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Problemas que Resolvemos:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Dificultad para acceder a tecnología confiable sin grandes inversiones.</li>
                      <li>Escasez de asesoramiento especializado en otras tiendas.</li>
                      <li>Necesidad de actualizar equipos a costos razonables.</li>
                      <li>Falta de alternativas para un consumo tecnológico responsable.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Nuestro Enfoque en Jujuy:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      A diferencia de otras tiendas en San Salvador de Jujuy, que ofrecen PCs de gama baja-media o hardware sin un foco claro, Ecomputers se centra en las necesidades específicas de nuestros usuarios, con un fuerte <strong className="text-green-600">compromiso social y ambiental</strong>.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Toda nuestra estrategia está orientada a consolidarnos como un proveedor de confianza, garantizando acceso a tecnología de calidad con responsabilidad.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </ParallaxLayer>

          {/* ECONOMÍA CIRCULAR - offset 4 */}
          <ParallaxLayer offset={4} speed={0.2} factor={0.55} className="flex justify-center items-center px-6">
            <animated.div style={recycleAnim} className="text-center max-w-5xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-green-300 mb-4" style={{ textShadow: "0 0 8px rgba(0,0,0,0.9)", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.45))" }}>
                ¡Impulsamos la economía circular!
              </h2>
              <p className="text-white text-lg md:text-2xl leading-relaxed font-medium" style={{ textShadow: "0 0 6px rgba(0,0,0,0.85)" }}>
                En <span className="text-green-200 font-bold">Ecomputers</span> creemos en un futuro más sostenible.
                Promovemos el <strong className="text-green-400">reciclado inteligente de componentes electrónicos</strong>,
                reacondicionamos equipos con altos estándares de calidad y contribuimos activamente a la reducción de residuos tecnológicos en el planeta.
              </p>
            </animated.div>
          </ParallaxLayer>

          {/* PLANETA: clic → arriba - offset 4.5 (Ajustado para estar justo debajo de Economía Circular) */}
          <ParallaxLayer offset={4.5} speed={-0.4} factor={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }} onClick={(e) => {
            e.stopPropagation(); // ¡Esta línea es la clave para que no se active el click del Parallax padre!
            parallax.current.scrollTo(0);
            setPage(0);
          }}>
            <ImageWithFallback src={url("earth")} alt="Planeta" fallback="/img/default-earth.png" style={{ width: "60%", cursor: "pointer" }} />
          </ParallaxLayer>
        </Parallax>
      </div>

      <Footer />
    </>
  );
}