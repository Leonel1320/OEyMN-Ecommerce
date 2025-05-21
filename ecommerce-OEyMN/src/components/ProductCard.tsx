import React from 'react';

interface ProductCardProps {
    id: string;
    imageUrl: string;
    altText: string;
    name: string;
    description: string;
    price: string;
    condition: 'new' | 'reacondicionado';
    oldPrice?: string; // ¡Nueva propiedad opcional!
}

const ProductCard: React.FC<ProductCardProps> = ({
    imageUrl,
    altText,
    name,
    description,
    price,
    condition,
    oldPrice,
}) => {
    // Define las clases CSS para el botón de "Añadir al Carrito"
    // Si la condición es 'reacondicionado', usa clases de verde; de lo contrario, usa clases de azul.
    const addToCartButtonClasses =
        condition === 'reacondicionado'
            ? 'px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
            : 'px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500';

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative group">
            {condition === 'reacondicionado' && (
                <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    Reacondicionado
                </span>
            )}
            <div className="w-full h-48 flex items-center justify-center overflow-hidden bg-white"> {/* Contenedor para centrar la imagen */}
                <img
                    src={imageUrl}
                    alt={altText}
                    // Cambios aquí: object-contain y solo la escala, o una escala más sutil
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 truncate mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2" title={description}>{description}</p>
                <div className="flex items-baseline mb-4"> {/* Contenedor para los precios */}
                    {oldPrice && ( // Solo si existe oldPrice, lo mostramos
                        <span className="text-gray-500 line-through text-sm mr-2">{oldPrice}</span>
                    )}
                    <span className="text-blue-700 text-2xl font-bold">{price}</span>
                </div>
                <div className="flex justify-between items-center">
                    <button className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
                        Ver Detalles
                    </button>
                    {/* Aplicamos las clases definidas condicionalmente */}
                    <button className={addToCartButtonClasses}>
                        Añadir al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;