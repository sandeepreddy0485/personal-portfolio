import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';                 // custom global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
