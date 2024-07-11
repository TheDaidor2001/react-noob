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
import { ROUTES } from './enums/apiRoutes.ts';


const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ROUTES.TRIP_ID,
        element: <Trip />
      },
      {
        path: ROUTES.BOOKINGS,
        element: <Bookings />
      }

    ]
  },
  {
    path: ROUTES.HOME,
    element: <LoginLayout />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <SignIn />
      },
      {
        path: ROUTES.REGISTER,
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
