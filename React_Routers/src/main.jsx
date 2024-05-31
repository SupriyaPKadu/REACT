import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Header from './components/Header.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  
,children:[

  {
   index:false,
   element:<Home/>
  },


  {
   path:"/login",
   element:<Login/>

  },
  {
   path:"/about",
   element:<About/>
  }
]




 }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h2>Hey! This React Routing</h2>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
