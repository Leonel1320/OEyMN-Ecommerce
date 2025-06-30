// src/components/ColeccionesCards.tsx
import { Link } from 'react-router-dom'

interface Product {
  id: string | number
  imageUrl: string
  altText: string
  name: string
}

interface Coleccion {
  headline: string
  hero: Product
  thumbnails: Product[]
  highlight?: boolean           // sombra especial (ej: para “Tarjeta Gráfica”)
  icon?: React.ReactNode        // icono que aparecerá antes del título
}

export const ProductGrid = ({ colecciones }: { colecciones: Coleccion[] }) => (
  <section className="my-12 px-4 lg:px-20">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {colecciones.map(({ headline, hero, thumbnails, highlight, icon }) => (
        <article
          key={headline}
          className={`
            relative overflow-hidden flex flex-col rounded-2xl
            bg-white shadow-lg ring-1 ring-gray-200
            transition-shadow duration-300
            hover:shadow-2xl hover:ring-cyan-500/30
            ${highlight ? 'shadow-[0_0_40px_rgba(0,200,255,0.35)]' : ''}
          `}
        >
          {/* Borde superior con gradiente */}
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500" />

          {/* Cabecera con icono */}
          <h3 className="flex items-center gap-2 font-bold text-lg px-4 pt-5 pb-3">
            {icon}
            <span>{headline}</span>
          </h3>

          {/* Imagen hero */}
          <Link to={`/productos/${hero.id}`} className="block w-full h-56 md:h-64">
            <img
              src={hero.imageUrl}
              alt={hero.altText}
              className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Mini‑thumbnails */}
          <div className="grid grid-cols-6 gap-2 p-4 border-t bg-gray-50">
            {thumbnails.slice(0, 6).map(p => (
              <Link
                key={p.id}
                to={`/productos/${p.id}`}
                className="border rounded-lg bg-white flex items-center justify-center h-14 overflow-hidden hover:scale-105 transition-transform duration-200"
              >
                <img src={p.imageUrl} alt={p.altText} className="object-contain h-full" />
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
)