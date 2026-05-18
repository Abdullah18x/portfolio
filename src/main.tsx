import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

declare global {
  interface Window {
    __stopAppLoader?: () => void;
  }
}

const LOADER_MIN_MS = 900;
const startedAt = performance.now();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const dismiss = () => {
  const elapsed = performance.now() - startedAt;
  const wait = Math.max(0, LOADER_MIN_MS - elapsed);
  window.setTimeout(() => window.__stopAppLoader?.(), wait);
};

if (document.readyState === 'complete') dismiss();
else window.addEventListener('load', dismiss, { once: true });
