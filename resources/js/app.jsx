import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

createInertiaApp({
  resolve: name => import(`./pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
