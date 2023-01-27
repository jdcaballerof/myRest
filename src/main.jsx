import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { RouterProvider, BrowserRouter } from "react-router-dom";
import { publicRouter, Router } from './router/PublicRoutes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Router />
    </BrowserRouter> */}

    <RouterProvider router={publicRouter} /> 
    
    {/* <App />
    </RouterProvider> */}
  </React.StrictMode>
)
