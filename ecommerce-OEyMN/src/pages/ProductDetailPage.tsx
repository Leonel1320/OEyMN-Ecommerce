// src/pages/ProductDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allHardwareProducts, Product } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

    useEffect(() => {
        setLoading(true);
        const foundProduct = allHardwareProducts.find(p => p.id === id);

        if (foundProduct) {
            setProduct(foundProduct);
            const productIds = foundProduct.relatedProductIds || [];
            const fetchedRelated = allHardwareProducts.filter(p =>
                productIds.includes(p.id) && p.id !== foundProduct.id
            );
            setRelatedProducts(fetchedRelated);
        } else {
            setProduct(null);
            setRelatedProducts([]);
        }
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    // Función para extraer el valor numérico del precio (ej. "$1.234,56" -> 1234.56)
    const parsePrice = (priceString: string): number => {
        // Elimina el símbolo de moneda y otros caracteres no numéricos, excepto comas y puntos
        let cleanedPrice = priceString.replace(/[^\d.,]/g, '');

        // Decide si la coma es decimal o de miles.
        // Si hay una coma y un punto, y la coma está después del punto (ej. "1.234,56"), la coma es decimal.
        if (cleanedPrice.indexOf(',') > -1 && cleanedPrice.indexOf('.') > -1) {
            if (cleanedPrice.indexOf(',') > cleanedPrice.indexOf('.')) {
                // Formato europeo/argentino: "1.234,56" -> quitar puntos de miles y reemplazar coma por punto
                cleanedPrice = cleanedPrice.replace(/\./g, '').replace(',', '.');
            } else {
                // Formato anglosajón: "1,234.56" -> quitar comas de miles
                cleanedPrice = cleanedPrice.replace(/,/g, '');
            }
        } else if (cleanedPrice.indexOf(',') > -1) {
            // Solo hay coma. Si la última parte tiene 2 dígitos, es decimal.
            const parts = cleanedPrice.split(',');
            if (parts[parts.length - 1].length === 2) {
                // "123,45" -> coma es decimal
                cleanedPrice = cleanedPrice.replace(',', '.');
            } else {
                // "1,234" (coma es separador de miles si no hay decimales o solo hay coma)
                cleanedPrice = cleanedPrice.replace(/,/g, '');
            }
        } else if (cleanedPrice.indexOf('.') > -1) {
            // Solo hay punto. Si la última parte tiene 2 dígitos, es decimal.
            const parts = cleanedPrice.split('.');
            if (parts[parts.length - 1].length === 2) {
                // "123.45" (punto es decimal) - no se necesita cambio para parseFloat
            } else {
                // "1.234" (punto es separador de miles)
                cleanedPrice = cleanedPrice.replace(/\./g, '');
            }
        }
        return parseFloat(cleanedPrice);
    };

    if (loading) {
        return <div className="text-center py-10 text-xl text-gray-700">Cargando producto...</div>;
    }

    if (!product) {
        return (
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Producto no encontrado</h1>
                <p className="text-lg text-gray-700">Lo sentimos, el producto que buscas no existe o la URL es incorrecta.</p>
                <Link to="/componentes" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Volver a la lista de productos
                </Link>
            </div>
        );
    }

    return (
        <main className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-8 mb-8">
                {/* Columna de la imagen del producto */}

                <div className="md:w-1/3 flex justify-center items-start p-4 relative">
                    {/* Cartel explosión (solo si es reacondicionado) */}
                    {product.condition === 'reacondicionado' && (
                        <div
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-44 h-44 select-none pointer-events-none"
                        >
                            {/* Explosión SVG */}
                            <svg
                                viewBox="0 0 100 100"
                                className="w-full h-full text-green-500 drop-shadow-lg
                   animate-pulse"
                                fill="currentColor"
                            >
                                {/* 12‑puntas estilo “boom” */}
                                <polygon points="
          50,4 62,36 97,36 68,56
          79,92 50,70 21,92 32,56
          3,36 38,36" />
                            </svg>

                            {/* Texto centrado sobre la explosión */}
                            <span
                                className="
          absolute inset-0 flex flex-col items-center justify-center
          text-center font-black leading-tight
          text-white text-xs md:text-sm
        "
                            >
                                GARANTÍA<br />3&nbsp;MESES<br />GRATIS
                            </span>
                        </div>
                    )}

                    {/* Imagen del producto */}
                    <img
                        src={product.imageUrl}
                        alt={product.altText}
                        className="w-full h-auto object-contain max-h-96 rounded-lg shadow-sm"
                    />
                </div>
                {/* Columna central: detalles del producto (descripción, precio, características) */}
                <div className="md:w-1/3 flex flex-col">
                    {product.condition === 'reacondicionado' && (
                        <span className="bg-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-3 inline-block self-start">
                            Reacondicionado
                        </span>
                    )}
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">{product.description}</p>

                    <div className="flex items-baseline mb-6">
                        {product.oldPrice && (
                            <span className="text-gray-500 line-through text-xl mr-3">{product.oldPrice}</span>
                        )}
                        <span className="text-blue-700 text-4xl font-bold">{product.price}</span>
                    </div>

                    <p className="text-gray-600 mb-4">
                        **Condición:** <span className="font-semibold">{product.condition === 'new' ? 'Nuevo' : 'Reacondicionado'}</span>
                    </p>

                    {/* Sección de Características */}
                    {product.features && product.features.length > 0 && (
                        <div className="mt-6 border-t pt-6 border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">Características principales:</h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="text-base">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Columna derecha: Opciones de pago y botones de acción */}
                <div className="md:w-1/3 flex flex-col items-center">
                    <div className="mt-6 w-full text-center">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">Opciones de pago:</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 inline-block text-left">
                            <li className="text-base">
                                <span className="font-bold">{product.price}</span> de contado
                            </li>
                            {/* Cuotas */}
                            {[
                                { count: 3, interest: 0 },
                                { count: 6, interest: 0 },
                                { count: 12, interest: 0 },
                                { count: 18, interest: 0.15 },
                            ].map((option, index) => {
                                let totalAmount = parsePrice(product.price);
                                let installmentAmount = totalAmount / option.count;

                                if (option.interest > 0) {
                                    totalAmount = totalAmount * (1 + option.interest);
                                    installmentAmount = totalAmount / option.count;
                                }

                                const formattedInstallment = installmentAmount.toLocaleString('es-AR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                });
                                const formattedTotal = totalAmount.toLocaleString('es-AR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                });

                                return (
                                    <li key={index} className="text-base">
                                        Hasta <span className="font-bold">{option.count} cuotas</span> de{' '}
                                        <span className="font-bold">
                                            ${formattedInstallment}
                                        </span>{' '}
                                        {option.interest > 0 ? '(con interés)' : 'sin interés'}
                                        {option.interest > 0 && ` (Total: $${formattedTotal})`}
                                    </li>
                                );
                            })}
                            <a className='text-blue-600 underline' href='#'>Mas formas de Pago</a>
                        </ul>
                    </div>

                    {/* Contenedor de los botones: flexbox para centrado y apilado vertical */}
                    <div className='mt-6 flex flex-col gap-4 justify-center items-center w-full'>
                        <button
                            className={
                                product.condition === 'reacondicionado'
                                    ? 'w-full sm:w-auto px-6 py-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200'
                                    : 'w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200'
                            }
                        >
                            Añadir al Carrito
                        </button>

                        <Link
                            to="/componentes"
                            className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 text-lg rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-center flex items-center justify-center"
                        >
                            ← Volver a la lista de productos
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sección de Productos Relacionados */}
            {relatedProducts.length > 0 && (
                <section className="mt-12 py-8 px-4 bg-gray-50 rounded-lg shadow-inner">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Productos que podrían interesarte</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map(relatedProduct => (
                            <ProductCard
                                key={relatedProduct.id}
                                id={relatedProduct.id}
                                imageUrl={relatedProduct.imageUrl}
                                altText={relatedProduct.altText}
                                name={relatedProduct.name}
                                description={relatedProduct.description}
                                price={relatedProduct.price}
                                condition={relatedProduct.condition}
                                oldPrice={relatedProduct.oldPrice}
                            />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
};

export default ProductDetailPage;