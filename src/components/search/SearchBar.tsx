import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

type FilterType = 'cuisine' | 'restaurant' | 'dietary';

const filters: Record<FilterType, string[]> = {
  cuisine: ['Italian', 'Indian', 'Chinese', 'Mexican', 'Japanese'],
  restaurant: ['Top Rated', 'Fastest Delivery', 'New', 'Budget Friendly'],
  dietary: ['Vegetarian', 'Vegan', 'Gluten Free', 'Keto', 'Halal']
};

const SearchBar = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);
  const [query, setQuery] = useState('');

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for restaurants or dishes..."
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#F1F8E9] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
        />
        <button
          onClick={() => setActiveFilter(activeFilter ? null : 'cuisine')}
          className="absolute right-4 top-1/2 -translate-y-1/2"
          title="Filter"
        >
          <Filter className="w-5 h-5 text-gray-400 hover:text-gray-600" />
        </button>
      </div>

      {activeFilter && (
        <div className="absolute z-10 mt-2 w-full bg-[#F1F8E9] rounded-lg shadow-lg p-4">
          <div className="flex gap-2 mb-4">
            {Object.keys(filters).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as FilterType)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeFilter === filter
                    ? 'bg-[#4CAF50] text-white'
                    : 'bg-[#E8F5E9] text-gray-700 hover:bg-[#C8E6C9]'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {filters[activeFilter].map((option) => (
              <button
                key={option}
                className="px-3 py-1 rounded-full text-sm bg-[#E8F5E9] text-gray-700 hover:bg-[#C8E6C9]"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;