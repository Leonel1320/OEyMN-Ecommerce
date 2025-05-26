// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';

const ProductCard: React.FC<Product> = ({
  id,
  imageUrl,
  altText,
  name,
  description,
  price,
  condition,
  oldPrice,
}) => {
  const addToCartButtonClasses =
    condition === 'reacondicionado'
      ? 'px-4 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
      : 'px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <Link to={`/productos/${id}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 relative group">
      {condition === 'reacondicionado' && (
        <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          Reacondicionado
        </span>
      )}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden bg-white">
        <img
          src={imageUrl}
          alt={altText}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2" title={description}>{description}</p>
        <div className="flex items-baseline mb-4">
          {oldPrice && (
            <span className="text-gray-500 line-through text-sm mr-2">{oldPrice}</span>
          )}
          <span className="text-blue-700 text-2xl font-bold">{price}</span>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to={`/productos/${id}`}
            className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Ver Detalles
          </Link>
          <button
            className={addToCartButtonClasses}
            onClick={(e) => {
                e.preventDefault();
                alert(`"${name}" añadido al carrito!`); // Ejemplo de funcionalidad al hacer clic
            }}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;