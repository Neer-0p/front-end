import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Error() {

    const redirect = useNavigate()

    const back =()=>{
        redirect("/")
    }

  return (
    <div>
        <h1 className='p-5 text-danger text-center'>Error not fount this page</h1>
        <Link to="/" className='btn btn-primary mx-auto'>Back</Link>
        <button onClick={back} className='btn btn-success mx-3'>Back to Home</button>
    </div>
  )
}

export default Error