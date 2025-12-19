import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {

    const redirect = useNavigate()

    const back = ()=>{
        redirect("/")
    }

  return (
    <div className='text-center p-5'>
        <h1 className='text-danger'>Error 404 page not found...</h1>
        <button onClick={back} className='btn btn-outline-danger'>Back</button>
    </div>
  )
}

export default Error