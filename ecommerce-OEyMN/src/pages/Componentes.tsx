import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import {AllHardwareProducts} from '../data/AllHardwareProducts'


// ... resto del componente HardwareNuevoPage (no hay cambios en la lógica de paginación o búsqueda aquí)

// El componente principal de la página de Hardware Nuevo
const HardwareNuevoPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const productsPerPage = 12; // Cantidad de productos por página (ajusta según necesites)

  // 1. Filtrar productos según el término de búsqueda
  const filteredProducts = AllHardwareProducts.filter(product =>
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