import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'
import Event_Handle from './components/EventBind/Event_Handle'
import Event_Handle from './components/EventBind/Event_Handle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <Bind/>
        <Event_Handle/>
        <MyForm/>
    </>
  )
}

export default App
