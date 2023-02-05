import React from "react";
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Register from "./pages/register/Register";
import Navbar from './components/navbar/Navbar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import './style.scss'

function App() {
  const currentUser = true

  const Layout = () => {
    return (
      <div>
        <Navbar/>
        <div style={{display: 'flex'}}>
          <LeftBar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>          
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to='/login'/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/profile/:id',
          element: <Profile/>
        },
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ])

  return (
    <div> 
      {/* <Login */}
      <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
