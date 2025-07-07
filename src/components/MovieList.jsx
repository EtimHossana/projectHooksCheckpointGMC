// Import React and MovieCard component
import React from 'react';
import MovieCard from './MovieCard';

// MovieList component - Renders a grid of movie cards or empty state
const MovieList = ({ movies }) => {
  
  // Conditional rendering: show empty state if no movies match filters
  if (movies.length === 0) {
    return (
      <div className="text-center py-16"> {/* Centered container with vertical padding */}
        {/* Large emoji icon for visual appeal */}
        <div className="text-gray-400 text-6xl mb-4">🎬</div>
        {/* Main empty state message */}
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No movies found</h3>
        {/* Helpful instruction text */}
        <p className="text-gray-500">Try adjusting your search or add a new movie</p>
      </div>
    );
  }

  // Render grid of movie cards when movies are available
  return (
    // Responsive grid container - adjusts columns based on screen size
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {/* Map over movies array and render MovieCard for each movie */}
      {movies.map((movie) => (
        <MovieCard 
          key={movie.id}  // Unique key for React reconciliation
          movie={movie}   // Pass movie data as prop
        />
      ))}
    </div>
  );
};

export default MovieList;