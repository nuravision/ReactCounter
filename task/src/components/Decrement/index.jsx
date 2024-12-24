import React from 'react'
import "./style.css";
const Decrement = ({count,setCount}) => {
  return (
      <button className='decrement'
          onClick={() => {
              if (count>0) {
                setCount(--count)
              }
          }}
      
      >Azalt</button>
  )
}

export default Decrement
