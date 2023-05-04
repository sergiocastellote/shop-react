import React from 'react';
import './index.scss';
import '@capgeminiuk/dcx-react-library/dist/dcx-react-library.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import List from './views/list';
import Detail from './views/detail';
import Layout from './components/layout';

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
    <Layout>
    <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
