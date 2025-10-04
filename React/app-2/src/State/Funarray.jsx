import React, { useState } from 'react'

function Funarray() {
    
    const [array,setarray] = useState([
        "neer",
        20,
        "neerkumbhani.10@gmail.com",
        "cfbgfhfyr"
    ])

  return (
    <div>
        <h1 className='text-decoration-underline m-4'>Person'S Details</h1>
        <h2 className='text-capitalize m-4'>Name : {array[0]}</h2>
        <button onClick={() =>setarray([0] )}>change name</button>
        <h2 className='text-capitalize m-4'>age : {array[1]}</h2>
        <h2 className='text-capitalize m-4'>email : {array[2]}</h2>
        <h2 className='text-capitalize m-4'>address : {array[3]}</h2>

    </div>
  )
}

export default Funarray