import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './index.css'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import SigningPage from './pages/SigningPage'

const router=createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage/>,
      errorElement: <NotFoundPage/>
    },
    {
      path: "/sign",
      element: <SigningPage/> 
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
