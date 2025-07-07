// Import React hooks for state management and performance optimization
import React, { useState, useMemo } from 'react';
// Import icons from lucide-react for UI elements
import { Plus, Film, Sparkles } from 'lucide-react';
// Import custom components
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';

function App() {
  // State to store the list of movies - initialized with sample data
  const [movies, setMovies] = useState([
    {
      id: '1',
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
    },
    {
      id: '2',
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      posterURL: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
    },
    {
      id: '3',
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://images.pexels.com/photos/7991581/pexels-photo-7991581.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4,
    },
    {
      id: '4',
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      posterURL: 'https://images.pexels.com/photos/7991582/pexels-photo-7991582.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4,
    },
    {
      id: '5',
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      posterURL: 'https://images.pexels.com/photos/7991583/pexels-photo-7991583.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4,
    },
    {
      id: '6',
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man.',
      posterURL: 'https://images.pexels.com/photos/7991584/pexels-photo-7991584.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 3,
    },
  ]);

  // State for title filter input - tracks what user types in search box
  const [titleFilter, setTitleFilter] = useState('');
  
  // State for rating filter - tracks minimum rating selected by user
  const [ratingFilter, setRatingFilter] = useState(0);
  
  // State to control visibility of the add movie form modal
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  // useMemo hook to optimize filtering performance - only recalculates when dependencies change
  const filteredMovies = useMemo(() => {
    return movies.filter(movie => {
      // Check if movie title contains the search term (case-insensitive)
      const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
      // Check if movie rating meets the minimum rating requirement
      const matchesRating = movie.rating >= ratingFilter;
      // Return true only if both conditions are met
      return matchesTitle && matchesRating;
    });
  }, [movies, titleFilter, ratingFilter]); // Dependencies: recalculate when any of these change

  // Function to handle adding a new movie to the collection
  const handleAddMovie = (movieData) => {
    // Create new movie object with unique ID based on current timestamp
    const newMovie = {
      ...movieData, // Spread operator to copy all properties from form data
      id: Date.now().toString(), // Generate unique ID using current timestamp
    };
    // Update movies state by adding new movie to existing array
    setMovies(prev => [...prev, newMovie]); // Use spread operator to create new array
  };

  return (
    // Main container with full screen height and gradient background
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      {/* Header Section - Contains logo, title, and add movie button */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left side - Logo and app title */}
            <div className="flex items-center gap-3">
              {/* Logo container with gradient background */}
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Film className="w-8 h-8 text-white" />
              </div>
              {/* App title and subtitle */}
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  My Movies
                </h1>
                <p className="text-sm text-gray-600">checkout my personal movie collections</p>
              </div>
            </div>
            
            {/* Right side - Add Movie button */}
            <button
              onClick={() => setIsAddFormOpen(true)} // Open the add movie form modal
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              Click here to Add Movie
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Statistics Cards Section - Shows total movies, average rating, and filtered results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Total Movies Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Movies</p>
                <p className="text-2xl font-bold text-gray-900">{movies.length}</p>
              </div>
              {/* Icon container with blue theme */}
              <div className="p-3 bg-blue-100 rounded-xl">
                <Film className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          {/* Average Rating Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Rating</p>
                {/* Calculate average rating with conditional rendering to avoid division by zero */}
                <p className="text-2xl font-bold text-gray-900">
                  {movies.length > 0 
                    ? (movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length).toFixed(1) 
                    : '0.0'
                  }
                </p>
              </div>
              {/* Icon container with yellow theme */}
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Sparkles className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          {/* Filtered Results Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Filtered Results</p>
                <p className="text-2xl font-bold text-gray-900">{filteredMovies.length}</p>
              </div>
              {/* Icon container with purple theme */}
              <div className="p-3 bg-purple-100 rounded-xl">
                <Plus className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Component - Allows users to search by title and filter by rating */}
        <Filter
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          onTitleFilterChange={setTitleFilter} // Pass state setter function
          onRatingFilterChange={setRatingFilter} // Pass state setter function
        />

        {/* Movie List Component - Displays filtered movies in a grid */}
        <MovieList movies={filteredMovies} />

        {/* Add Movie Form Modal - Only renders when isAddFormOpen is true */}
        <AddMovieForm
          isOpen={isAddFormOpen}
          onClose={() => setIsAddFormOpen(false)} // Close modal function
          onAddMovie={handleAddMovie} // Function to handle adding new movie
        />
      </div>
    </div>
  );
}

export default App;