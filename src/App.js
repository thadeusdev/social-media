import React from "react";
import Login from './pages/login/Login'
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
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
