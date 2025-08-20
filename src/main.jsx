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
import PrivateRoute from './components/PrivateRoute.jsx'
import AddTask from './components/Task/AddTask.jsx'
import BrowseTask from './components/Task/BrowseTask.jsx'
import MyTask from './components/Task/MyTask.jsx'
import TaskDetails from './components/Task/TaskDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/addTask',
        element: <PrivateRoute>
          <AddTask></AddTask>
        </PrivateRoute>
      },
      {
        path: '/browseTask',
        loader: () => fetch('http://localhost:3000/task'),
        element: <BrowseTask></BrowseTask>
      },
      {
        path: '/taskDetails/:id',
        loader:({params})=>fetch(`http://localhost:3000/task/${params.id}`),
        element: <PrivateRoute>
          <TaskDetails></TaskDetails>
        </PrivateRoute>

      },
      {
        path: '/MyTask/:email',
        loader:({params})=>{
          console.log( params.email);
          return  fetch(`http://localhost:3000/task/email/${encodeURIComponent(params.email)}`)
        },
        element: <PrivateRoute>
          <MyTask></MyTask>
        </PrivateRoute>
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
