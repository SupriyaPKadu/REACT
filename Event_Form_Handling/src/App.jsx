import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Event_Handle from './components/Event_Handle'
import Bind from './components/EventBind/Bind'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Event_Handle/>
     {/* <Bind/> */}
     {/* <MyForm/> */}
    </>
  )
}

export default App
