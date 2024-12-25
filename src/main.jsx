import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/LayOut/MainLayout.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import LogIn from './Components/Pages/Auth/LogIn.jsx';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider.jsx';
import SignUp from './Components/Pages/Auth/SignUp.jsx';
import AllVolunteer from './Components/Pages/AllVolunteer/AllVolunteer';
import VolunteerDetails from './Components/Pages/Home/VolunteerDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <h1 className="md:text-5xl text-center font-bold text-red-500">Page is Not Found</h1>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/volunteer',
        element: <AllVolunteer></AllVolunteer>,
      },
      {
        path: '/volunteer/:id',
        element: <VolunteerDetails></VolunteerDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/volunteers/${params.id}`)
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
