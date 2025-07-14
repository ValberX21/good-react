import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FavoriteProvider } from "./context/FavoriteContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoriteProvider>
    <App />
    </FavoriteProvider>
  </React.StrictMode>
);

reportWebVitals();
