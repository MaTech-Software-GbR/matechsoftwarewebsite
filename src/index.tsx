import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import ErrorPage from './error-page';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/Base.scss';
import './styles/App.scss';
import App from './App';

AOS.init();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/impressum',
    element: <Impressum />,
    errorElement: <ErrorPage />
  },
  {
    path: '/datenschutz',
    element: <Datenschutz />,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
