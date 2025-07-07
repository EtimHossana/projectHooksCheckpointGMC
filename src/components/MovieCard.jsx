// Import React and required icons
import React from 'react';
import { Star, Clock } from 'lucide-react';

// MovieCard component - Displays individual movie information in a card format
const MovieCard = ({ movie }) => {
  
  // Function to render star rating visualization
  const renderStars = (rating) => {
    // Create array of 5 elements and map over them to create star icons
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index} // Unique key for each star
        className={`w-4 h-4 ${
          // Conditional styling: filled yellow stars for rating, gray for empty
          index < rating
            ? 'fill-yellow-400 text-yellow-400' // Filled star
            : 'fill-gray-200 text-gray-200'     // Empty star
        }`}
      />
    ));
  };

  return (
    // Main card container with hover effects and animations
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      
      {/* Movie poster section with aspect ratio container */}
      <div className="aspect-[3/4] overflow-hidden"> {/* 3:4 aspect ratio for movie posters */}
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" // Scale on hover
        />
        {/* Gradient overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Card content section - title, description, rating */}
      <div className="p-6">
        {/* Movie title with hover color change */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-blue-600 transition-colors">
          {movie.title}
        </h3>
        
        {/* Movie description with line clamping for consistent layout */}
        <p className="text-gray-600 text-sm mb-4 overflow-hidden leading-relaxed" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>
          {movie.description}
        </p>
        
        {/* Bottom section with rating and duration */}
        <div className="flex items-center justify-between">
          {/* Star rating display */}
          <div className="flex items-center gap-1">
            {renderStars(movie.rating)} {/* Render star icons */}
            <span className="text-sm font-medium text-gray-700 ml-2">
              {movie.rating}/5 {/* Numerical rating display */}
            </span>
          </div>
          
          {/* Duration display (placeholder) */}
          <div className="flex items-center gap-2 text-gray-500">
            <Clock className="w-4 h-4" />
            <span className="text-xs">2h 30m</span> {/* Static duration for demo */}
          </div>
        </div>
      </div>
      
      {/* Floating rating badge in top-right corner */}
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
        ★ {movie.rating}
      </div>
    </div>
  );
};

export default MovieCard;