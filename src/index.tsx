import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';


const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode >
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
    rel="stylesheet"
  />
    <App />
  </StrictMode>
);
