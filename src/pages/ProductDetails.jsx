import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';
import products from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-2">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Continue shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="group mb-6 inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg
            className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Product card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image section */}
            <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
              <div className="relative">
                {/* Badges */}
                {product.isNew && (
                  <span className="absolute top-4 left-4 z-10 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    New
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-md h-auto object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Details section */}
            <div className="md:w-1/2 p-8 lg:p-10">
              {/* Category */}
              {product.category && (
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  {product.category}
                </p>
              )}

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-200'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400 ml-2">({product.reviews || 0} reviews)</span>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                {product.originalPrice ? (
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-light text-gray-900">${product.price}</span>
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-light text-gray-900">${product.price}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quantity selector */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-sm font-medium text-gray-700">Quantity</span>
                <div className="flex items-center border border-gray-200 rounded-full">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-l-full transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-12 text-center text-sm font-medium text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-r-full transition-colors"
                    aria-label="Increase quantity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add to cart button */}
              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    addToCart(product);
                  }
                  navigate('/cart');
                }}
                className="group relative w-full md:w-auto px-8 py-4 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center"
              >
                Add to Cart
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;