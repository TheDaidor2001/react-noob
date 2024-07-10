import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/css/styles.css'
import { Home } from './views/Home.tsx';
import { MainLayout } from './layouts/MainLayout.tsx';
import { SignUp } from './views/SignUp.tsx';
import { LoginLayout } from './layouts/LoginLayout.tsx';
import { SignIn } from './views/SignIn.tsx';
import { Trip } from './views/Trip.tsx';
import { Bookings } from './views/Bookings.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/trip/:tripId',
        element: <Trip />
      },
      {
        path: '/bookings',
        element: <Bookings />
      }

    ]
  },
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
    ]

  }



]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
