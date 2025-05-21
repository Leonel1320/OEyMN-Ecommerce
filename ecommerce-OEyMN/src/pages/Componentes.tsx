import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

// --- IMÁGENES --- (estas importaciones no cambian)
import producto1Img from '../assets/images/producto1.webp';
import producto2Img from '../assets/images/producto2.webp';
import producto3Img from '../assets/images/producto3.webp';
import producto5Img from '../assets/images/producto5.webp';
import producto4Img from '../assets/images/producto4.webp';
import producto6Img from '../assets/images/producto6.webp';
import producto7Img from '../assets/images/producto7.webp';
import producto8Img from '../assets/images/producto8.webp';
import producto9Img from '../assets/images/producto9.webp';
import producto10Img from '../assets/images/producto10.webp';
import producto11Img from '../assets/images/producto11.webp';
import producto12Img from '../assets/images/producto12.webp';
import producto13Img from '../assets/images/producto13.webp';
import producto14Img from '../assets/images/producto14.webp';
import producto15Img from '../assets/images/producto15.webp';
import producto16Img from '../assets/images/producto16.webp';
import producto17Img from '../assets/images/producto17.webp';
import producto18Img from '../assets/images/producto18.webp';
import producto19Img from '../assets/images/producto19.webp';
import producto20Img from '../assets/images/producto20.webp';
import producto21Img from '../assets/images/producto21.webp';
import producto22Img from '../assets/images/producto22.webp';
import producto23Img from '../assets/images/producto23.webp';
import producto24Img from '../assets/images/producto24.webp';
import producto25Img from '../assets/images/producto25.webp';
import producto26Img from '../assets/images/producto26.webp';
import producto27Img from '../assets/images/producto27.webp';
import producto28Img from '../assets/images/producto28.webp';
import producto29Img from '../assets/images/producto29.webp';
import producto30Img from '../assets/images/producto30.webp';
import producto31Img from '../assets/images/producto31.webp';
import producto32Img from '../assets/images/producto32.webp';
// --- FIN DE IMÁGENES ---

const allHardwareProducts = [
  {
    id: '1',
    imageUrl: producto1Img,
    altText: 'Procesador Intel Core i7',
    name: 'Procesador Intel Core i7',
    description: 'Potente procesador de 8 núcleos para un rendimiento excepcional.',
    price: '$450.00',
    condition: 'new',
    oldPrice: '$550.00', // EJEMPLO DE OFERTA
  },
  {
    id: '2',
    imageUrl: producto2Img,
    altText: 'Tarjeta Gráfica NVIDIA RTX 3060',
    name: 'Tarjeta Gráfica NVIDIA RTX 3060',
    description: 'Rendimiento gráfico de alta gama para juegos y creación de contenido.',
    price: '$400.00',
    condition: 'reacondicionado',
  },
  {
    id: '3',
    imageUrl: producto3Img,
    altText: 'Memoria RAM Corsair Vengeance',
    name: 'Memoria RAM Corsair Vengeance 16GB',
    description: 'Módulo de memoria DDR4 de alta velocidad para gaming y multitarea.',
    price: '$80.00',
    condition: 'new',
    oldPrice: '$100.00', // EJEMPLO DE OFERTA
  },
  {
    id: '4',
    imageUrl: producto4Img,
    altText: 'Procesador Intel Core i5',
    name: 'Procesador Intel Core i5',
    description: 'Potente procesador de 4 núcleos para un rendimiento excepcional.',
    price: '$350.00',
    condition: 'reacondicionado',
  },
  {
    id: '5',
    imageUrl: producto5Img,
    altText: 'Tarjeta Gráfica NVIDIA GTX 1660 Ti',
    name: 'Tarjeta Gráfica NVIDIA GTX 1660 Ti',
    description: 'Excelente rendimiento para gaming en 1080p y tareas multimedia.',
    price: '$250.00',
    condition: 'new',
    oldPrice: '$300.00', // EJEMPLO DE OFERTA
  },
  {
    id: '6',
    imageUrl: producto6Img,
    altText: 'Portátil Dell XPS 13 (Reacondicionado)',
    name: 'Portátil Dell XPS 13 (Reacondicionado)',
    description: 'Potente y ligero portátil reacondicionado, ideal para trabajo o estudio.',
    price: '$700.00',
    condition: 'reacondicionado',
  },
  {
    id: '7',
    imageUrl: producto7Img,
    altText: 'Procesador AMD Ryzen 5',
    name: 'Procesador AMD Ryzen 5',
    description: 'Procesador de seis núcleos ideal para gaming y productividad.',
    price: '$220.00',
    condition: 'new',
  },
  {
    id: '8',
    imageUrl: producto8Img,
    altText: 'Tarjeta Gráfica AMD Radeon RX 6600',
    name: 'Tarjeta Gráfica AMD Radeon RX 6600',
    description: 'Excelente rendimiento para juegos en 1080p.',
    price: '$320.00',
    condition: 'new',
  },
  {
    id: '9',
    imageUrl: producto9Img,
    altText: 'Memoria RAM Kingston Fury 16GB',
    name: 'Memoria RAM Kingston Fury 16GB',
    description: 'Memoria DDR4 de alto rendimiento para equipos exigentes.',
    price: '$75.00',
    condition: 'reacondicionado',
    oldPrice: '$90.00', // EJEMPLO DE OFERTA
  },
  {
    id: '10',
    imageUrl: producto10Img,
    altText: 'Disco SSD Samsung 1TB (Reacondicionado)',
    name: 'Disco SSD Samsung 1TB (Reacondicionado)',
    description: 'Almacenamiento rápido y confiable, reacondicionado y garantizado.',
    price: '$90.00',
    condition: 'new',
  },
  {
    id: '11',
    imageUrl: producto11Img,
    altText: 'Placa Base ASUS Prime (Reacondicionada)',
    name: 'Placa Base ASUS Prime (Reacondicionada)',
    description: 'Placa base reacondicionada compatible con procesadores Intel.',
    price: '$110.00',
    condition: 'reacondicionado',
  },
  {
    id: '12',
    imageUrl: producto12Img,
    altText: 'Fuente de Poder Corsair 650W (Reacondicionada)',
    name: 'Fuente de Poder Corsair 650W (Reacondicionada)',
    description: 'Fuente de poder eficiente y segura, reacondicionada.',
    price: '$60.00',
    condition: 'reacondicionado',
  },
  {
    id: '13',
    imageUrl: producto13Img,
    altText: 'Placa Base MSI B450M',
    name: 'Placa Base MSI B450M',
    description: 'Placa base micro ATX para procesadores AMD Ryzen, ideal para equipos de gama media.',
    price: '$85.00',
    condition: 'new',
  },
  {
    id: '14',
    imageUrl: producto14Img,
    altText: 'Memoria RAM Crucial 8GB',
    name: 'Memoria RAM Crucial 8GB',
    description: 'Módulo DDR4 de 8GB, perfecto para tareas básicas y equipos de oficina.',
    price: '$35.00',
    condition: 'new',
  },
  {
    id: '15',
    imageUrl: producto15Img,
    altText: 'Tarjeta Gráfica GTX 1050 Ti',
    name: 'Tarjeta Gráfica GTX 1050 Ti',
    description: 'Tarjeta gráfica de gama baja, ideal para juegos ligeros y multimedia.',
    price: '$120.00',
    condition: 'reacondicionado',
  },
  {
    id: '16',
    imageUrl: producto16Img,
    altText: 'Fuente de Poder EVGA 500W',
    name: 'Fuente de Poder EVGA 500W',
    description: 'Fuente de poder económica y confiable para PCs de entrada.',
    price: '$40.00',
    condition: 'new',
  },
  {
    id: '17',
    imageUrl: producto17Img,
    altText: 'Disco Duro Seagate 1TB',
    name: 'Disco Duro Seagate 1TB',
    description: 'Almacenamiento mecánico de 1TB, ideal para guardar archivos y documentos.',
    price: '$38.00',
    condition: 'reacondicionado',
  },
  {
    id: '18',
    imageUrl: producto18Img,
    altText: 'Gabinete Aerocool Bolt Mini',
    name: 'Gabinete Aerocool Bolt Mini',
    description: 'Gabinete compacto y económico para equipos de gama baja o media.',
    price: '$32.00',
    condition: 'new',
  },
  {
    id: '19',
    imageUrl: producto19Img,
    altText: 'Procesador Intel Pentium Gold G6400',
    name: 'Procesador Intel Pentium Gold G6400',
    description: 'Procesador de 2 núcleos, ideal para tareas básicas y oficina.',
    price: '$55.00',
    condition: 'new',
  },
  {
    id: '20',
    imageUrl: producto20Img,
    altText: 'Memoria RAM Patriot Signature 4GB',
    name: 'Memoria RAM Patriot Signature 4GB',
    description: 'Módulo DDR4 de 4GB, perfecto para PCs de bajo presupuesto.',
    price: '$18.00',
    condition: 'new',
  },
  {
    id: '21',
    imageUrl: producto21Img,
    altText: 'Tarjeta Gráfica GT 710 2GB',
    name: 'Tarjeta Gráfica GT 710 2GB',
    description: 'Tarjeta gráfica básica para tareas multimedia y ofimática.',
    price: '$30.00',
    condition: 'reacondicionado',
  },
  {
    id: '22',
    imageUrl: producto22Img,
    altText: 'Disco Duro Western Digital 500GB',
    name: 'Disco Duro Western Digital 500GB',
    description: 'Disco duro mecánico de 500GB, económico y confiable.',
    price: '$22.00',
    condition: 'reacondicionado',
  },
  {
    id: '23',
    imageUrl: producto23Img,
    altText: 'Fuente de Poder Noga 450W',
    name: 'Fuente de Poder Noga 450W',
    description: 'Fuente de poder básica para equipos de oficina o bajo consumo.',
    price: '$19.00',
    condition: 'new',
  },
  {
    id: '24',
    imageUrl: producto24Img,
    altText: 'Gabinete Sentey Slim',
    name: 'Gabinete Sentey Slim',
    description: 'Gabinete compacto y económico, ideal para PCs de oficina.',
    price: '$25.00',
    condition: 'new',
  },
  {
    id: '25',
    imageUrl: producto25Img,
    altText: 'Disco SSD Kingston A400 240GB',
    name: 'Disco SSD Kingston A400 240GB',
    description: 'SSD rápido y confiable para mejorar el rendimiento de tu PC.',
    price: '$28.00',
    condition: 'new',
  },
  {
    id: '26',
    imageUrl: producto26Img,
    altText: 'Memoria RAM G.Skill Ripjaws 8GB',
    name: 'Memoria RAM G.Skill Ripjaws 8GB',
    description: 'Memoria DDR4 de alto rendimiento para gaming y edición.',
    price: '$36.00',
    condition: 'reacondicionado',
  },
  {
    id: '27',
    imageUrl: producto27Img,
    altText: 'Tarjeta Madre ASRock H310CM',
    name: 'Tarjeta Madre ASRock H310CM',
    description: 'Placa base compacta compatible con procesadores Intel de 8va y 9na generación.',
    price: '$52.00',
    condition: 'new',
  },
  {
    id: '28',
    imageUrl: producto28Img,
    altText: 'Fuente de Poder Thermaltake 600W',
    name: 'Fuente de Poder Thermaltake 600W',
    description: 'Fuente de poder eficiente y silenciosa para equipos de alto rendimiento.',
    price: '$65.00',
    condition: 'reacondicionado',
  },
  {
    id: '29',
    imageUrl: producto29Img,
    altText: 'Gabinete Cooler Master MasterBox Q300L',
    name: 'Gabinete Cooler Master MasterBox Q300L',
    description: 'Gabinete versátil y moderno con excelente flujo de aire.',
    price: '$48.00',
    condition: 'new',
  },
  {
    id: '30',
    imageUrl: producto30Img,
    altText: 'Procesador AMD Ryzen 3 3200G',
    name: 'Procesador AMD Ryzen 3 3200G',
    description: 'Procesador con gráficos integrados, ideal para PCs de oficina y hogar.',
    price: '$95.00',
    condition: 'new',
    oldPrice: '$110.00', // EJEMPLO DE OFERTA
  },
  {
    id: '31',
    imageUrl: producto31Img,
    altText: 'Disco Duro Toshiba 2TB',
    name: 'Disco Duro Toshiba 2TB',
    description: 'Gran capacidad de almacenamiento para archivos y copias de seguridad.',
    price: '$62.00',
    condition: 'reacondicionado',
  },
  {
    id: '32',
    imageUrl: producto32Img,
    altText: 'Memoria RAM HyperX Fury 32GB',
    name: 'Memoria RAM HyperX Fury 32GB',
    description: 'Kit de memoria DDR4 de 32GB para estaciones de trabajo y gaming extremo.',
    price: '$140.00',
    condition: 'new',
  },
];

// ... resto del componente HardwareNuevoPage (no hay cambios en la lógica de paginación o búsqueda aquí)

// El componente principal de la página de Hardware Nuevo
const HardwareNuevoPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const productsPerPage = 12; // Cantidad de productos por página (ajusta según necesites)

  // 1. Filtrar productos según el término de búsqueda
  const filteredProducts = allHardwareProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Calcular índices para la paginación
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // 3. Calcular número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Array para generar los números de página en la interfaz
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Manejador para cambiar de página
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Opcional: Hacer scroll al principio de la página al cambiar de página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Restablecer la página a 1 cuando el término de búsqueda cambie
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);


  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Sección de Filtros (sin cambios significativos, solo la barra de búsqueda) */}
      <section className="w-full lg:w-64 p-5 bg-gray-50 rounded-lg shadow-md lg:sticky lg:top-5 h-fit">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Filtrar por:</h2>

        {/* Barra de Búsqueda */}
        <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Buscar Producto</h3>
          <input
            type="text"
            placeholder="Ej: Procesador Intel"
            className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Fin Barra de Búsqueda */}

        <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Categoría</h3>
          <ul className="space-y-2">
            <li><input type="checkbox" id="procesadores" className="mr-2 accent-blue-600" /><label htmlFor="procesadores" className="text-gray-600 hover:text-blue-600 cursor-pointer">Procesadores</label></li>
            <li><input type="checkbox" id="tarjetas-graficas" className="mr-2 accent-blue-600" /><label htmlFor="tarjetas-graficas" className="text-gray-600 hover:text-blue-600 cursor-pointer">Tarjetas Gráficas</label></li>
            <li><input type="checkbox" id="memorias-ram" className="mr-2 accent-blue-600" /><label htmlFor="memorias-ram" className="text-gray-600 hover:text-blue-600 cursor-pointer">Memorias RAM</label></li>
            <li><input type="checkbox" id="almacenamiento" className="mr-2 accent-blue-600" /><label htmlFor="almacenamiento" className="text-gray-600 hover:text-blue-600 cursor-pointer">Almacenamiento</label></li>
          </ul>
        </div>

        <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Marca</h3>
          <ul className="space-y-2">
            <li><input type="checkbox" id="intel" className="mr-2 accent-blue-600" /><label htmlFor="intel" className="text-gray-600 hover:text-blue-600 cursor-pointer">Intel</label></li>
            <li><input type="checkbox" id="nvidia" className="mr-2 accent-blue-600" /><label htmlFor="nvidia" className="text-gray-600 hover:text-blue-600 cursor-pointer">Nvidia</label></li>
            <li><input type="checkbox" id="corsair" className="mr-2 accent-blue-600" /><label htmlFor="corsair" className="text-gray-600 hover:text-blue-600 cursor-pointer">Corsair</label></li>
          </ul>
        </div>

        <div className="mb-6 pb-4 border-b border-gray-200 last:border-b-0">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Precio</h3>
          <div className="flex items-center gap-2 mb-3">
            <label htmlFor="precio-min" className="text-gray-600 text-sm">Mín:</label>
            <input type="number" id="precio-min" placeholder="0" className="w-20 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <label htmlFor="precio-max" className="text-gray-600 text-sm">Máx:</label>
            <input type="number" id="precio-max" placeholder="∞" className="w-20 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">Aplicar</button>
        </div>

        <div className="filter-group">
          <h3 className="text-lg font-medium mb-3 text-gray-700">Ordenar por:</h3>
          <select id="ordenar-por" className="w-full p-2 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="relevancia">Relevancia</option>
            <option value="precio-ascendente">Precio (Menor a Mayor)</option>
            <option value="precio-descendente">Precio (Mayor a Menor)</option>
            <option value="novedades">Novedades</option>
          </select>
        </div>
      </section>

      {/* Cuadrícula de Productos y Paginación */}
      <section className="flex-1 flex flex-col gap-6"> {/* Añadimos flex-col y gap para separar la cuadrícula de la paginación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                altText={product.altText}
                name={product.name}
                description={product.description}
                price={product.price}
                condition={product.condition}
                oldPrice={product.oldPrice}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg">No se encontraron productos que coincidan con la búsqueda.</p>
          )}
        </div>

        {/* Controles de Paginación */}
        {totalPages > 1 && ( // Mostrar paginación solo si hay más de una página
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Anterior
            </button>
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-md transition-colors duration-200
                  ${currentPage === number ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                `}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Siguiente
            </button>
          </div>
        )}
        {/* Fin Controles de Paginación */}
      </section>
    </main>
  );
};

export default HardwareNuevoPage;