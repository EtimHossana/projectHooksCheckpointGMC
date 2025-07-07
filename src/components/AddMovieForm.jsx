// Import React hooks and icons
import React, { useState } from 'react';
import { X, Star } from 'lucide-react';

// AddMovieForm component - Modal form for adding new movies
const AddMovieForm = ({ onAddMovie, isOpen, onClose }) => {
  
  // Local state to manage form input values
  const [formData, setFormData] = useState({
    title: '',       // Movie title
    description: '', // Movie description
    posterURL: '',   // URL for movie poster image
    rating: 1,       // Movie rating (1-5 stars)
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Validate that required fields are filled (trim removes whitespace)
    if (formData.title.trim() && formData.description.trim() && formData.posterURL.trim()) {
      onAddMovie(formData); // Call parent function to add movie
      
      // Reset form to initial state after successful submission
      setFormData({ title: '', description: '', posterURL: '', rating: 1 });
      
      onClose(); // Close the modal
    }
  };

  // Handle input changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from event target
    
    setFormData(prev => ({
      ...prev, // Spread previous state
      // Convert rating to number, keep other fields as strings
      [name]: name === 'rating' ? Number(value) : value
    }));
  };

  // Function to render star rating visualization
  const renderStars = (rating) => {
    // Create array of 5 stars and render with conditional styling
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          // Fill stars up to the rating value
          index < rating
            ? 'fill-yellow-400 text-yellow-400' // Filled star
            : 'fill-gray-200 text-gray-200'     // Empty star
        }`}
      />
    ));
  };

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  return (
    // Modal backdrop - covers entire screen with semi-transparent overlay
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      
      {/* Modal content container */}
      <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        
        {/* Modal header - sticky to stay visible when scrolling */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-100 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Add New Movie</h2>
            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        {/* Form content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Movie Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Movie Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required // HTML5 validation
              placeholder="Enter movie title"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>
          
          {/* Movie Description Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required // HTML5 validation
              rows={4} // Set textarea height
              placeholder="Enter movie description"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
            />
          </div>
          
          {/* Poster URL Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Poster URL *
            </label>
            <input
              type="url" // HTML5 URL validation
              name="posterURL"
              value={formData.posterURL}
              onChange={handleChange}
              required // HTML5 validation
              placeholder="https://example.com/poster.jpg"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            />
          </div>
          
          {/* Rating Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex items-center gap-4">
              {/* Rating dropdown */}
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
              >
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
              </select>
              {/* Visual star representation */}
              <div className="flex items-center gap-1">
                {renderStars(formData.rating)}
              </div>
            </div>
          </div>
          
          {/* Form action buttons */}
          <div className="flex gap-3 pt-4">
            {/* Cancel button */}
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            {/* Submit button */}
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;