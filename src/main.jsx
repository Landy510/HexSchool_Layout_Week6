import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import '@/assets/styles/all.scss';
// --- Route Component | START ---
import App from './App.jsx';
import Index from '@/pages/index/Index.jsx';
import Register from '@/pages/register/Register.jsx';
import RegisterStep1 from '@/pages/register/pages/step1/Step1.jsx';
// --- END ---

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'register',
        element: <Register />,
        children: [
          {
            index: true,
            element: <RegisterStep1 />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
