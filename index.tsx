// FIX: Removed the triple-slash directive for React types. It was causing a conflict
// with the project's type resolution and preventing JSX types from loading correctly.

// FIX: Added a global type declaration for the 'wistia-player' custom element
// to ensure it is correctly picked up by the TypeScript compiler across the project.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { mediaId?: string; aspect?: string }, HTMLElement>;
    }
  }
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);