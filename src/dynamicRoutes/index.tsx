// DynamicRoute.js
import * as compImports from '../imports';
const DynamicRoute = () => {
  return [
    { path: '/', element: <compImports.login /> },
    { path: '/dashboard', element: <compImports.dashboard /> },
    { path: '/login', element: <compImports.login /> },
    { path: '/signup', element: <compImports.signup /> },
    { path: '/pos', element: <compImports.signup /> },

  ];
};

export default DynamicRoute;
