import InitPage from '../screens/initPage/index.jsx'
import Login from '../screens/login/index.jsx'
import SignUp from '../screens/createAccount/index.jsx'
import { createBrowserRouter } from 'react-router-dom'
import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Plans from '../screens/plans/index.jsx';
import Diet from '../screens/diet/index.jsx';
import TestePost from '../screens/testePost/index.jsx';
import InitExerc from '../screens/initExerc/index.jsx';
import Exerc from '../screens/exerc/index.jsx';



const PrivateRoute = () => {
  if (!localStorage.getItem("Email")) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default PrivateRoute;


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Exerc/>,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/initpage',
        element: <InitPage />,
      }
    ],
  },
]);