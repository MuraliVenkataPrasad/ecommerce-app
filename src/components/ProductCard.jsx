import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Safely destructure with default values
  const {
    id,
    name = 'Product',
    price = '0.00',
    originalPrice,
    image = 'https://via.placeholder.com/400',
    rating = 0,
    reviews = 0,
    isNew = false,
    discount = null,
  } = product || {};

  return (
    <div className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Badges */}
      {isNew && (
        <span className="absolute top-3 left-3 z-10 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          New
        </span>
      )}
      {discount && (
        <span className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
          -{discount}%
        </span>
      )}

      {/* Image */}
      <Link to={`/product/${id}`} className="block overflow-hidden bg-gray-50 aspect-square relative">
        {!isImageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
          </div>
        )}
        <img
          src={image}
          alt={name}
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mt-1 space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? 'text-amber-400' : 'text-gray-200'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs text-gray-400 ml-1">({reviews})</span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-3">
          <div>
            {originalPrice ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-gray-900">${price}</span>
                <span className="text-sm text-gray-400 line-through">${originalPrice}</span>
              </div>
            ) : (
              <span className="text-lg font-semibold text-gray-900">${price}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="p-2 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200"
            aria-label="Add to cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;