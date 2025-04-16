import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@/styles/index.scss';
import '@/styles/globals.scss';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Application failed to start: Root element not found');
}

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
