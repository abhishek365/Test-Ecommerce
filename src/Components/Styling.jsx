import React from 'react'
import "./myStyle.css";
const style = {
    fontSize:'70px',
    color:'blue'
}

function Styling() {
  return (
    <>
    <h1 className='success font-60'>
        Hello Everyone
    </h1>
    <h1 style={style}>
        Hello Inline 
    </h1>
    </>
  )
}

export default Styling