import BrandGrid from '../home/BrandGrid'
import {OfertasCarousel} from '../home/carruces'
import { AllHardwareProducts } from '../data/AllHardwareProducts'

const productosConOferta = AllHardwareProducts.filter((p) => p.oldPrice)
const productosReacondicionados = AllHardwareProducts.filter(product => product.condition === 'reacondicionado');


export const Home = () => {
  return (
    <>
      <OfertasCarousel 
        products={productosConOferta}
        title='🔥 Ofertas Especiales'
      />

      <OfertasCarousel 
        products={productosReacondicionados}
        title='♻️ Reacondicionado'
      />

      <BrandGrid/>

    </>
)}


