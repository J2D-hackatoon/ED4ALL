import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import LocationPage from './pages/locationPage/LocationPage.tsx'
// import { BrowserRouter } from 'react-router-dom'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import RootLayout from './layout/RootLayout.tsx';

const router = createBrowserRouter([
  {
    // path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },

      {
        path: '*',
        element: <ErrorPage />,
      },
      {},
    ],
  },
]);

// Query Client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
