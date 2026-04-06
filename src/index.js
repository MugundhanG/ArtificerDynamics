import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove loader once React has rendered
const removeLoader = () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 500);
  }
};

if (document.readyState === 'complete') {
  setTimeout(removeLoader, 800);
} else {
  window.addEventListener('load', () => setTimeout(removeLoader, 800));
}
// Fallback: remove loader after 3s no matter what
setTimeout(removeLoader, 3000);
