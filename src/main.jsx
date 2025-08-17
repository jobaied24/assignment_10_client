import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './components/MainLayout.jsx'
import Home from './components/Home.jsx'
import Register from './components/auth/Register.jsx'
import Login from './components/auth/Login.jsx'
import AuthProvider from './components/Provider/AuthProvider.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    Component:MainLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/register',
        Component:Register
      },
      {
        path:'/login',
        Component:Login
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
