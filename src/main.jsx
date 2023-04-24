import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Sec3 from './components/Sec3/Sec3'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/skills',
        element:<Sec3></Sec3>
      },
      {
        path: '*',
        element:<Home></Home>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
