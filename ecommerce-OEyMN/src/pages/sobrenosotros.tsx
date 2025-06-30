import React, { useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { Navbar } from "../components/shared/navbar";
import { Footer } from "../components/shared/footer";

const url = (n: string, wrap = false) =>
  `${wrap ? "url(" : ""}https://awv3node-homepage.surge.sh/build/assets/${n}.svg${wrap ? ")" : ""}`;

const servicios = [
  { titulo: "Reparación y Mantenimiento", ruta: "/servicios/reparacion", descripcion: "Soluciones rápidas y profesionales para tu PC o notebook." },
  {
    titulo: "Venta de Hardware Asistida",
    ruta: "/servicios/hardware",
    descripcion: "Asesoramiento experto para elegir hardware potente y eco‑eficiente."
  },
  {
    titulo: "Canje de Hardware",
    ruta: "canje",
    descripcion: "Entregá hardware de hasta 3 años de antigüedad y obtené hasta un 40% de descuento en tu compra."
  },
  {
    titulo: "Garantía de Productos",
    ruta: "/servicios/garantia",
    descripcion: "Garantía de 3 a 6 meses en reacondicionados o nuevos, con opciones extendidas."
  },
  {
    titulo: "Membresía Ecomputers Club",
    ruta: "membresia",
    descripcion: "Mantenimiento mensual, soporte remoto, descuentos y acceso anticipado a nuevos equipos."
  },
  {
    titulo: "Asesoramiento Pre-Venta",
    ruta: "/servicios/preventa",
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
    const next = (page + 1) % 3;
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
        <Parallax ref={parallax} pages={3} className="h-full w-full" onClick={handleParallaxClick}>

          {/* Fondo estrellas (tal cual tenías) */}
          <ParallaxLayer offset={0} speed={0} factor={4} style={{ backgroundImage: url("stars", true), backgroundSize: "cover" }} />

         

          {/* Satélite y nubes decorativas */}
          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: "none" }}>
            <ImageWithFallback src={url("satellite4")} alt="Satélite" fallback="/img/default-satellite.png" style={{ width: "15%", marginLeft: "70%" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <ImageWithFallback src={url("cloud")} alt="Nube" fallback="/img/default-cloud.png" style={{ width: "20%", marginLeft: "55%" }} />
            <ImageWithFallback src={url("cloud")} alt="Nube" fallback="/img/default-cloud.png" style={{ width: "10%", marginLeft: "15%" }} />
          </ParallaxLayer>

          {/* HERO */}
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

          {/* SERVICIOS (círculo lg / grid sm‑md) */}
          <ParallaxLayer offset={1} speed={0} factor={1} className="flex justify-center items-center px-4">
            <div className="w-full flex flex-col items-center">
              <h2 className="text-4xl font-bold text-white mb-12 text-center drop-shadow">Lo que hacemos por vos</h2>
              <br />
              <br />
              <br />
              
              <div className="hidden lg:block relative w-[640px] h-[640px]">
                {servicios.map((srv, i) => {
                  const angle = (360 / servicios.length) * i;
                  const radius = 300;
                  const style = { transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)` };
                  return (
                    <div key={srv.titulo} style={style} className="absolute top-1/2 left-1/2 w-64 h-64 p-6 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-3xl ring-2 ring-green-300 shadow-2xl flex flex-col items-center justify-between text-center transition-transform hover:scale-110 hover:-translate-y-1">
                      <h3 className="text-xl font-semibold text-green-700">{srv.titulo}</h3>
                      <p className="text-sm text-gray-800 italic">{srv.descripcion}</p>
                      <Link to={`/${srv.ruta}`} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm shadow-lg">Ver más</Link>
                    </div>
                  );
                })}
              </div>
              <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8">
                {servicios.map((srv) => (
                  <div key={srv.titulo} className="bg-white/90 p-6 rounded-xl shadow-xl backdrop-blur-md border-l-4 border-green-400">
                    <h3 className="text-xl font-bold text-green-800 mb-2">{srv.titulo}</h3>
                    <p className="text-gray-700 mb-3">{srv.descripcion}</p>
                    <Link to={srv.ruta} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm">Ver más</Link>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxLayer>

          {/* ECONOMÍA CIRCULAR */}
          <ParallaxLayer offset={2} speed={0.2} factor={0.55} className="flex justify-center items-center px-6">
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

          {/* PLANETA: clic → arriba */}
          <ParallaxLayer offset={2.6} speed={-0.4} factor={1} style={{ display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => { parallax.current.scrollTo(0); setPage(0); }}>
            <ImageWithFallback src={url("earth")} alt="Planeta" fallback="/img/default-earth.png" style={{ width: "60%", cursor: "pointer" }} />
          </ParallaxLayer>
        </Parallax>
      </div>

      <Footer />
    </>
  );
} 