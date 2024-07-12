import './assets/css/styles.css'
import { router } from './router/index.tsx';
import { RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
