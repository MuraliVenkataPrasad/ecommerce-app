import React from 'react';

const FilterSidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <aside className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sticky top-4">
      {/* Header with filter icon */}
      <div className="flex items-center space-x-2 mb-4">
        <svg
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
          Categories
        </h3>
      </div>

      {/* Category list */}
      <ul className="space-y-1">
        <li>
          <button
            onClick={() => setSelectedCategory('')}
            className={`
              w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ease-in-out
              ${
                selectedCategory === ''
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              }
            `}
          >
            All Categories
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setSelectedCategory(cat)}
              className={`
                w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 ease-in-out
                ${
                  selectedCategory === cat
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {/* Subtle divider for optional future filter sections */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">Price • Rating • More</p>
      </div>
    </aside>
  );
};

export default FilterSidebar;