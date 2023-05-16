import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
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
    errorElement: <ErrorPage />,
  },
  {
    path: '/impressum',
    element: <Impressum />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/datenschutz',
    element: <Datenschutz />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
