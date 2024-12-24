import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';
function App() {
  
  let [count, setCount] = useState(0);
  return (
    <>
     <Counter count={count} setCount={setCount} />
    </>
  )
}

export default App
