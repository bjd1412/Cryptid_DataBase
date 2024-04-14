import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import routes from './routes';
import App from './App';
import reportWebVitals from './Other Stuff/reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>

);
