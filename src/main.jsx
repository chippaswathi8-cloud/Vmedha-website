import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 👈 1. Corrected the file extension from .tsx to .jsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // 👈 2. Removed the 'as HTMLElement' type assertion (TypeScript syntax)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);