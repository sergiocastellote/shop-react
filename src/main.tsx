import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import List from './views/list';
import Detail from './views/detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <List></List>,
  },
  {
    path: '/detail/:id',
    element: <Detail></Detail>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
