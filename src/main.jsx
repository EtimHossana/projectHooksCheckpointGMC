// Import React core functionality
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import main App component and global styles
import App from './App.jsx';
import './index.css';

// Create React root and render the application
// StrictMode helps identify potential problems in development
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);