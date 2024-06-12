import React from 'react';
import ReactDOM from 'react-dom/client';
  
import smsRoute from './smsRoute';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/style.css';
import 'react-toastify/dist/ReactToastify.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={ smsRoute} />
);