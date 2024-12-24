import React from 'react'
import "./style.css"

const Increment = ({count,setCount}) => {
    
  return (
    <button onClick={() => {
      setCount(++count)
    }}
      className='increment'
    >Artir</button>
  )
}

export default Increment
