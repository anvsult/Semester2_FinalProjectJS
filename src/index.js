import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './error-page'

import Root from './routes/Root';
import LoginPage from './components/LoginPage/LoginPage'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
