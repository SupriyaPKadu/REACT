import Header from './components/Header'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Outlet } from 'react-router-dom'


function App() {
 
  
  return (
    <>
    <Header/>
       <Outlet/>
    </>
  )
}

export default App
