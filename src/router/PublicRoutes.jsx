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
        <Route path="/try" element={ <PruebasPage /> } />
        <Route path="/home" element={ <HomePage /> } />

        <Route path="/*" element={ <Navigate to='/try' /> } />
    </Routes>
  )
}
