import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { HelmetProvider } from 'react-helmet-async';
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider.jsx';
import router from './routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} ></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
