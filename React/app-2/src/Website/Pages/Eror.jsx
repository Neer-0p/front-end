import React from 'react'
import { useNavigate } from 'react-router-dom'

function Eror() {
    
    const redirect = useNavigate()

    const back = ()=>{
        redirect("/")
    }

  return (
    <div className='text-center'>
        <h1 className='text-center text-capitalize'>Error 404 not found</h1>
        <button onClick={back} className='btn btn-danger'>Back</button>
    </div>
  )
}

export default Eror