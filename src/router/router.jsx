import InitPage from '../screens/initPage/index.jsx'
import Login from '../screens/login/index.jsx'
import SignUp from '../screens/createAccount/index.jsx'
import { createBrowserRouter } from 'react-router-dom'
// import { Outlet, Navigate } from 'react-router-dom';

// const ProtectedLayout = () => {
//   const isAuthenticated = localStorage.getItem('userToken') !== null;

//   return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
// };


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/initpage',
    element: <InitPage />,
  }
])

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login />,
//   },
//   {
//     path: '/signup',
//     element: <SignUp />,
//   },
//   {
//     path: '/',
//     element: <ProtectedLayout />,  // Layout protegido
//     children: [
//       {
//         path: 'initpage',
//         element: <InitPage />,
//       },
//       {
//         path: 'dashboard',
//         element: <Dashboard />,
//       },
//       {
//         path: 'profile',
//         element: <Profile />,
//       },
//     ],
//   },
// ]);