import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ← MOVER PARA CÁ
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/vqhubcontrol'>  {/* ← basename AQUI */}
        <App />
    </BrowserRouter>
  </React.StrictMode>
);