import BrandGrid from '../home/BrandGrid'
import { OfertasCarousel } from '../home/carruces'
import { AllHardwareProducts } from '../data/AllHardwareProducts'
import { ProductGrid } from '../home/ProductGrid'
import { allHardwareProducts as P } from '../data/products'
import { Cpu, Gpu, Box } from 'lucide-react'
import { Membresia } from "../home/NewsLetterMenbre";




const byName = (word: string) =>
  P.filter(p => p.name.toLowerCase().includes(word))

const colecciones = [
  {
    headline: '¡POTENCIÁ TU EQUIPO!',
    hero: byName('procesador')[0],
    thumbnails: byName('procesador').slice(1, 7),
    icon: <Cpu className="w-5 h-5 text-cyan-600" />,
  },
  {
    headline: '¡GRÁFICOS AL MÁXIMO!',
    hero: byName('tarjeta gráfica')[0] || byName('gráfica')[0],
    thumbnails: [...byName('tarjeta gráfica'), ...byName('gráfica')].slice(1, 7),
    highlight: true,                                // sombra glow
    icon: <Gpu className="w-5 h-5 text-amber-500" />,
  },
  {
    headline: '¡ELEGÍ TU GABINETE!',
    hero: byName('gabinete')[0],
    thumbnails: byName('gabinete').slice(1, 7),
    icon: <Box className="w-5 h-5 text-rose-500" />,
  },
]

const productosConOferta = AllHardwareProducts.filter((p) => p.oldPrice)
const productosReacondicionados = AllHardwareProducts.filter(product => product.condition === 'reacondicionado');



export const Home = () => {
  return (
    <>
      <OfertasCarousel
        products={productosReacondicionados}
        title='♻️ Reacondicionado'
      />
      <OfertasCarousel
        products={productosConOferta}
        title='🔥 Ofertas Especiales'
      />

      <BrandGrid />

      <ProductGrid colecciones={colecciones} />


    </>
  )
}


