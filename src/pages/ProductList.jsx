import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import FilterSidebar from '../components/FilterSidebar';
import SortDropdown from '../components/SortDropdown';
import products from '../data/products.json';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('default');

  // Get unique categories
  const categories = useMemo(() => {
    return [...new Set(products.map(p => p.category))];
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? product.category === selectedCategory : true)
    );

    switch (sortOption) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return filtered;
  }, [searchTerm, selectedCategory, sortOption]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
            All Products
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Discover our curated collection
          </p>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="md:w-80">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div className="md:w-48">
            <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="md:w-64 shrink-0">
            <FilterSidebar
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {/* Results count */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">
                Showing <span className="font-medium text-gray-900">{filteredProducts.length}</span> products
              </p>
              {/* Optional: active filters summary could go here */}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <svg
                  className="w-16 h-16 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductList;