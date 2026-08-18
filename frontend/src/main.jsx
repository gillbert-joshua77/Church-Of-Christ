import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import logoUrl from './assets/images/logo.jpeg';

// Favicon — served from the bundled logo in src/assets/images.
const favicon = document.querySelector("link[rel='icon']") ?? document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/jpeg';
favicon.href = logoUrl;
document.head.appendChild(favicon);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
