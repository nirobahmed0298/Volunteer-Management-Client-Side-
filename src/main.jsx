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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddVolunteer from './Components/Pages/AddVolunteer/AddVolunteer.jsx';
import MyPost from './Components/Pages/MyPost/MyPost.jsx';
import UpdatePost from './Components/Pages/MyPost/UpdatePost.jsx';
import RequestPosts from './Components/Pages/RequestPosts/RequestPosts.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1 className="md:text-5xl text-center font-bold text-red-500">Page is Not Found</h1>,
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
        element: <PrivateRoute><VolunteerDetails></VolunteerDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://volunteer-managment-server-three.vercel.app/volunteers/${params.id}`)
      },
      {
        path: '/addVolunteer',
        element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>
      },
      {
        path: '/myPosts',
        element: <PrivateRoute><MyPost></MyPost></PrivateRoute>
      },
      {
        path: '/requestPosts',
        element: <PrivateRoute><RequestPosts></RequestPosts></PrivateRoute>
      },
      {
        path: '/updatePost/:id',
        element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
        loader: ({ params }) => fetch(`https://volunteer-managment-server-three.vercel.app/volunteers/${params.id}`)
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
