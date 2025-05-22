// src/pages/Componentes.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { allHardwareProducts, Product } from '../data/products';
import ProductCard from '../components/ProductCard';

const Componentes: React.FC = () => {
    // --- Estados para filtros y productos ---
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');
    const [sortBy, setSortBy] = useState<string>('default'); // 'default', 'price-asc', 'price-desc'

    // ESTADOS PARA PAGINACIÓN
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [productsPerPage] = useState<number>(12);

    // CATEGORÍAS Y MARCAS FIJAS
    const fixedCategories: string[] = [
        "Componentes",
        "Periféricos",
        "Almacenamiento",
    ];

    const fixedBrands: string[] = [
        "Intel",
        "AMD",
        "Nvidia",
        "Asus",
        "MSI",
        "Gigabyte",
        "Corsair",
        "Logitech",
        "HyperX",
        "Samsung",
        "Western Digital"
    ];

    // --- Estado para controlar la visibilidad del filtro móvil ---
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState<boolean>(false);

    // Función para extraer el valor numérico del precio
    const parsePrice = (priceString: string): number => {
        let cleanedPrice = priceString.replace(/[^\d.,]/g, '');
        if (cleanedPrice.indexOf(',') > -1 && cleanedPrice.indexOf('.') > -1) {
            if (cleanedPrice.indexOf(',') > cleanedPrice.indexOf('.')) {
                cleanedPrice = cleanedPrice.replace(/\./g, '').replace(',', '.');
            } else {
                cleanedPrice = cleanedPrice.replace(/,/g, '');
            }
        } else if (cleanedPrice.indexOf(',') > -1) {
            const parts = cleanedPrice.split(',');
            if (parts[parts.length - 1].length === 2) {
                cleanedPrice = cleanedPrice.replace(',', '.');
            } else {
                cleanedPrice = cleanedPrice.replace(/,/g, '');
            }
        } else if (cleanedPrice.indexOf('.') > -1) {
            const parts = cleanedPrice.split('.');
            if (parts[parts.length - 1].length !== 2) {
                cleanedPrice = cleanedPrice.replace(/\./g, '');
            }
        }
        return parseFloat(cleanedPrice);
    };

    // Usamos useMemo para filtrar y ordenar los productos.
    const filteredAndSortedProducts = useMemo(() => {
        let currentFilteredProducts = [...allHardwareProducts];

        // Filtrar por término de búsqueda
        if (searchTerm) {
            currentFilteredProducts = currentFilteredProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filtrar por categoría (solo si la categoría seleccionada existe en tus productos reales)
        if (selectedCategory) {
            currentFilteredProducts = currentFilteredProducts.filter(product =>
                product.category === selectedCategory
            );
        }

        // Filtrar por marcas seleccionadas (solo si las marcas seleccionadas existen en tus productos reales)
        if (selectedBrands.length > 0) {
            currentFilteredProducts = currentFilteredProducts.filter(product =>
                selectedBrands.includes(product.brand)
            );
        }

        // Filtrar por rango de precios
        const numericMinPrice = parsePrice(minPrice) || 0; // Usar parsePrice directamente
        const numericMaxPrice = parsePrice(maxPrice) || Infinity; // Usar parsePrice directamente

        currentFilteredProducts = currentFilteredProducts.filter(product => {
            const productPrice = parsePrice(product.price);
            return productPrice >= numericMinPrice && productPrice <= numericMaxPrice;
        });

        // Ordenar productos
        if (sortBy === 'price-asc') {
            currentFilteredProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        } else if (sortBy === 'price-desc') {
            currentFilteredProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        }

        return currentFilteredProducts;
    }, [searchTerm, selectedCategory, selectedBrands, minPrice, maxPrice, sortBy]);

    // Lógica de paginación
    const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredAndSortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Reiniciar la página a 1 cuando los filtros cambian
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, selectedBrands, minPrice, maxPrice, sortBy]);


    // --- Manejadores de eventos de filtros ---
    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCategory(e.target.value);
    };

    const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const brand = e.target.value;
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const handleClearFilters = () => {
        setSearchTerm('');
        setSelectedCategory('');
        setSelectedBrands([]);
        setMinPrice('');
        setMaxPrice('');
        setSortBy('default');
        setCurrentPage(1); // Resetear a la primera página al limpiar filtros
        setIsFilterPanelOpen(false); // Cierra el panel al limpiar filtros
    };

    const paginate = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll a la parte superior de la página
    };

    // Función para generar los números de página a mostrar
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        let startPage: number, endPage: number;

        if (totalPages <= maxPagesToShow) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const middle = Math.ceil(maxPagesToShow / 2);
            if (currentPage <= middle) {
                startPage = 1;
                endPage = maxPagesToShow;
            } else if (currentPage + middle > totalPages) {
                startPage = totalPages - maxPagesToShow + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - middle + 1;
                endPage = currentPage + middle - 1;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };


    // --- JSX del componente ---
    return (
        <main className="max-w-screen-xl mx-auto px-4 py-8">
            {/* Contenedor principal de la página de listado */}
            <div className="flex flex-col md:flex-row gap-8">

                {/* Botón para abrir el panel de filtros (visible solo en móviles) */}
                <div className="md:hidden sticky top-0 bg-white z-10 py-4 shadow-sm">
                    <button
                        onClick={() => setIsFilterPanelOpen(true)}
                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L13 10.414V17a1 1 0 01-1.447.894L9 15.118V10.414L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd"></path>
                        </svg>
                        Filtrar Productos
                    </button>
                </div>

                {/* Panel de Filtros */}
                <div
                    className={`
                        fixed inset-y-0 left-0 z-40 w-full bg-white p-8 overflow-y-auto shadow-lg
                        transform transition-transform duration-300 ease-in-out
                        ${isFilterPanelOpen ? 'translate-x-0' : '-translate-x-full'}
                        md:static md:w-1/4 md:translate-x-0 md:bg-transparent md:shadow-none md:p-0
                    `}
                >
                    {/* Botón de cerrar para móvil */}
                    <div className="flex justify-end md:hidden mb-4">
                        <button onClick={() => setIsFilterPanelOpen(false)} className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Filtrar por:</h2>

                    {/* Buscar Producto */}
                    <div className="mb-6">
                        <label htmlFor="search" className="block text-gray-700 text-sm font-bold mb-2">
                            Buscar Producto
                        </label>
                        <input
                            type="text"
                            id="search"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ej. Procesador Intel"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Categoría */}
                    <div className="mb-6">
                        <h3 className="text-gray-700 text-sm font-bold mb-2">Categoría</h3>
                        {fixedCategories.map(category => (
                            <div key={category} className="mb-2">
                                <input
                                    type="radio"
                                    id={category}
                                    name="category"
                                    value={category}
                                    checked={selectedCategory === category}
                                    onChange={handleCategoryChange}
                                    className="mr-2"
                                />
                                <label htmlFor={category} className="text-gray-700">{category}</label>
                            </div>
                        ))}
                        {selectedCategory && (
                            <button onClick={() => setSelectedCategory('')} className="text-blue-500 text-sm mt-2 hover:underline">
                                Quitar filtro de categoría
                            </button>
                        )}
                    </div>

                    {/* Marca */}
                    <div className="mb-6">
                        <h3 className="text-gray-700 text-sm font-bold mb-2">Marca</h3>
                        {fixedBrands.map(brand => (
                            <div key={brand} className="mb-2">
                                <input
                                    type="checkbox"
                                    id={brand}
                                    name="brand"
                                    value={brand}
                                    checked={selectedBrands.includes(brand)}
                                    onChange={handleBrandChange}
                                    className="mr-2"
                                />
                                <label htmlFor={brand} className="text-gray-700">{brand}</label>
                            </div>
                        ))}
                    </div>

                    {/* Precio */}
                    <div className="mb-6">
                        <h3 className="text-gray-700 text-sm font-bold mb-2">Precio</h3>
                        <div className="flex gap-2 mb-3">
                            <input
                                type="number"
                                placeholder="Mín"
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Máx"
                                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Ordenar por */}
                    <div className="mb-6">
                        <label htmlFor="sortBy" className="block text-gray-700 text-sm font-bold mb-2">
                            Ordenar por:
                        </label>
                        <select
                            id="sortBy"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="default">Relevancia</option>
                            <option value="price-asc">Precio: Menor a Mayor</option>
                            <option value="price-desc">Precio: Mayor a Menor</option>
                        </select>
                    </div>

                    {/* Botón para limpiar filtros */}
                    <button
                        onClick={handleClearFilters}
                        className="w-full px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
                    >
                        Limpiar Filtros
                    </button>
                </div>

                {/* Contenido de productos */}
                <div className="w-full md:w-3/4">
                    {currentProducts.length === 0 && filteredAndSortedProducts.length > 0 && (
                         <div className="text-center py-10 text-xl text-gray-700">
                            No se encontraron productos en esta página. Intenta ir a una página anterior.
                        </div>
                    )}
                    {currentProducts.length === 0 && filteredAndSortedProducts.length === 0 && (
                        <div className="text-center py-10 text-xl text-gray-700">
                            No se encontraron productos con los filtros seleccionados.
                        </div>
                    )}
                    {currentProducts.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentProducts.map(product => (
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
                            ))}
                        </div>
                    )}

                    {/* Controles de Paginación */}
                    {totalPages > 1 && (
                        <nav className="flex justify-center items-center gap-2 mt-8">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Anterior
                            </button>

                            {getPageNumbers().map(number => (
                                <button
                                    key={number}
                                    onClick={() => paginate(number)}
                                    className={`
                                        px-4 py-2 rounded-md transition-colors
                                        ${currentPage === number
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }
                                    `}
                                >
                                    {number}
                                </button>
                            ))}

                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Siguiente
                            </button>
                        </nav>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Componentes;