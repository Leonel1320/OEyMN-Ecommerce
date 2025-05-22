import React, { useState, useEffect } from 'react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Muestra u oculta el botón basado en el scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Muestra el botón si el scroll es mayor a 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Hace scroll suavemente hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar y limpiar al desmontar

  return (
    <button
      className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}
      onClick={scrollToTop}
      aria-label="Volver arriba" // Para accesibilidad
    >
      {/* Icono SVG de flecha hacia arriba */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};