import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import FavoritesProvider from './contexts/FavoritesProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoritesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesProvider>
);
