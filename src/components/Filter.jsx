// Import React and required icons
import React from 'react';
import { Search, Star, Filter as FilterIcon } from 'lucide-react';

// Filter component - Provides search and rating filter functionality
const Filter = ({
  titleFilter,           // Current title search value
  ratingFilter,          // Current minimum rating filter value
  onTitleFilterChange,   // Function to update title filter
  onRatingFilterChange,  // Function to update rating filter
}) => {
  return (
    // Main filter container with white background and shadow
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
      
      {/* Filter section header */}
      <div className="flex items-center gap-3 mb-6">
        <FilterIcon className="w-5 h-5 text-blue-600" /> {/* Filter icon */}
        <h2 className="text-lg font-semibold text-gray-900">Filter Movies</h2>
      </div>
      
      {/* Filter controls grid - responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Title Search Input Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Search by Title
          </label>
          {/* Input container with search icon */}
          <div className="relative">
            {/* Search icon positioned absolutely inside input */}
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            {/* Text input with left padding to accommodate icon */}
            <input
              type="text"
              value={titleFilter}
              onChange={(e) => onTitleFilterChange(e.target.value)} // Call parent function on change
              placeholder="Enter movie title..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>
        </div>
        
        {/* Rating Filter Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Minimum Rating
          </label>
          {/* Select container with star icon */}
          <div className="relative">
            {/* Star icon positioned absolutely inside select */}
            <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400" />
            {/* Select dropdown with left padding to accommodate icon */}
            <select
              value={ratingFilter}
              onChange={(e) => onRatingFilterChange(Number(e.target.value))} // Convert to number and call parent function
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none bg-white"
            >
              {/* Rating filter options */}
              <option value={0}>All Ratings</option>        {/* Show all movies */}
              <option value={1}>1 Star & Above</option>     {/* 1+ stars */}
              <option value={2}>2 Stars & Above</option>    {/* 2+ stars */}
              <option value={3}>3 Stars & Above</option>    {/* 3+ stars */}
              <option value={4}>4 Stars & Above</option>    {/* 4+ stars */}
              <option value={5}>5 Stars Only</option>       {/* Only 5 stars */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;