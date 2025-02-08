import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, useParams, Navigate } from "react-router-dom"

import './index.css'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import SigningPage from './pages/SigningPage'
import CreateFruitPage from './pages/CreateFruitPage'

const slugRegex=/^[a-z0-9-]+$/;

function SigningPageWrapper(){
  const {slug} = useParams();

  if(!slugRegex.test(slug) || (slug !== "sign-in" && slug !== "sign-up")){
    return <Navigate to = "/error" replace/>
  }
  return <SigningPage/>
}

const router=createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage/>,
      errorElement: <NotFoundPage/>
    },
    {
      path: "/:slug",
      element: <SigningPageWrapper/> 
    },
    {
      path: "/error",
      element: <NotFoundPage/>
    },
    {
      path: "/create",
      element: <CreateFruitPage/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
