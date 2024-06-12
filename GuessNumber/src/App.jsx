import { useState } from 'react'
import './App.css'
import GuessNumber from './GuessNumber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GuessNumber />
    </>
  )
}

export default App
