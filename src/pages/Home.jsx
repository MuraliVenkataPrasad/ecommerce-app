import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';

const Home = () => {
  const featuredProducts = products.slice(0, 4); // show 4 featured for better grid alignment

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Discover your <span className="font-semibold">perfect style</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Curated collections of high‑quality products designed for modern living.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-700 text-sm font-medium rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200"
            >
              Shop Now
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Subtle bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-8 fill-current text-white" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path d="M0 48h1440V0c-211.5 0-422.2 23.7-633 32-211.5 8.3-422.8 16-633 16H0v48z" />
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">Featured products</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Handpicked just for you – explore our most loved items.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-2 border border-gray-300 text-sm font-medium text-gray-700 rounded-full hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            View All Products
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">Why choose us</h2>
            <p className="text-gray-500">We make shopping simple and enjoyable.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: 'Quality assured',
                desc: 'Every product is checked for premium quality.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Fast delivery',
                desc: 'Free shipping on orders over $50.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: 'Secure payment',
                desc: 'Your data is always protected.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: '24/7 support',
                desc: 'We’re here to help anytime.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;