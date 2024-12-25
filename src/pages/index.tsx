import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Ensure routing context
import App from './App'; // Root 
import "@/styles/globals.css"

// Ensure this only runs on the client side
if (typeof window !== 'undefined') {
  const container = document.getElementById('root');
  const root = createRoot(container!);

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
