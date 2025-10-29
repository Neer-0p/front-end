import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axiospract() {

    const [user,setuser] = useState([])

    useEffect (()=>{
        fetchtodo()
    },[])

    const fetchtodo = async()=>{
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(res.data)
        setuser(res.data)
    }

  return (
    <div>
        <table className="table table-hover table-success table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col" className='text-uppercase'>ID</th>
                        <th scope="col" className='text-uppercase'>Title</th>
                        <th scope="col" className='text-uppercase'>Compeltion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index)=>{
                            
                            return(
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.completed}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Axiospract