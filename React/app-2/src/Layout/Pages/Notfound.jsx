import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {

    const redirect = useNavigate()

    const back = ()=>{
        redirect("/")
    }

  return (
    <div className='text-center'>
        <h1>Error 404 page not found.</h1>
        <button onClick={back} className='btn btn-dark'>Back</button>
    </div>
  )
}

export default Notfound