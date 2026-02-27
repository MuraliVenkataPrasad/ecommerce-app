import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          {/* Empty cart illustration */}
          <svg
            className="w-32 h-32 mx-auto text-gray-300 mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <h2 className="text-2xl font-light text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-light text-gray-900 mb-8">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
            {cart.map(item => (
              <div key={item.id} className="flex items-center p-4 sm:p-6 gap-4">
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                  />
                </Link>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-1"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border border-gray-200 rounded-full">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-l-full transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-gray-900">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-r-full transition-colors"
                    aria-label="Increase quantity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove item"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-gray-900 font-medium">${getCartTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="text-gray-900 font-medium">Free</span>
              </div>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex justify-between text-base font-medium">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">${getCartTotal()}</span>
            </div>
            <button
              onClick={() => navigate('/payment')}
              className="w-full mt-6 px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-400 text-center mt-4">
              Taxes and shipping calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;