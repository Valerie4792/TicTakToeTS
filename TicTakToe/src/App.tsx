import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './Components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Board/>
  )
}

export default App
