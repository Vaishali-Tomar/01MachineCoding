import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [incre, setIncre] = useState(1);

  function handleCountInc(){
    setCount(count + incre);
  }
  function handleCountDec(){
    setCount(count -incre)
  }
  function resetCount(){
    setCount(0)
  }

  function handleIncrementValue(e){
    setIncre(parseInt(e.target.value), 10 || 0)
  }

  return (
   <div className='App'>
   <h1>Count : {count}</h1>
   <button onClick={handleCountInc}>+</button>

   <button onClick={handleCountDec}>-</button>
   <button onClick={resetCount}>Reset</button>
  
   <label>
    set Increment Value:
    <input type="number" value={incre} onChange={handleIncrementValue} min="1"/>
   </label>
   </div>
  )
}

export default App
