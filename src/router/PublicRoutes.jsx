import { createBrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PruebasPage } from "../pages/PruebasPage";


export const publicRouter = createBrowserRouter([
    { path: "/try", element: <PruebasPage /> },
    { path: "/home", element: <HomePage /> }, 

    { path: "/*", element: <Navigate to='/try' /> }, 
]);
  

export const Router = () => {
  return (
    <Routes>
        <Route path="/try" element={ <PruebasPage /> } errorElement={<h2>Error</h2>} />
        <Route path="/home" element={ <HomePage /> }   errorElement={<h2>Error</h2>} />

        <Route path="/*" element={ <Navigate to='/try' /> } />
    </Routes>
  )
}
