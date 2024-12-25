import React from 'react';
import "@/styles/globals.css"
import * as compImports from '@/imports';
import DynamicRoute from '@/dynamicRoutes';
const App = () => {
  const dynamicRoutes = DynamicRoute(); // Call the function with props
  return (
    <div className="flex flex-col justify-between">
      <div id="app:container" className="h-full sm:mx-12 sm:my-20 md:mx-32 md:my-30 xs:mx-5">
        <compImports.Routes>
   
          {dynamicRoutes?.map((route, index) => (
            <compImports.Route key={index} path={route.path} element={route.element} />
          ))}
        </compImports.Routes>
      </div>
 
   
    </div>
  );
};

export default App;
