import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './Components/Board'
import donkeyImage from '../Images/donkey.png';
import shrekImage from '../Images/shrek.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Board/>
  )
}

export default App
