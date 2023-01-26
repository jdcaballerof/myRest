import { createBrowserRouter, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { PruebasPage } from "../pages/PruebasPage";


export const publicRouter = createBrowserRouter([
    { path: "/home", element: <HomePage /> }, 
    { path: "/try", element: <PruebasPage /> },

    { path: "/*", element: <Navigate to='/home' /> }, 
]);
  