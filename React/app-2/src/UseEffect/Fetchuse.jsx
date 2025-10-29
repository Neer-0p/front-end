import React, { useEffect, useState } from 'react'

function Fetchuse() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fetchuser()
    },[])

    const fetchuser = ()=>{
        fetch("https://jsonplaceholder.typicode.com/comments",{
            method : "GET"
        })

        .then((data) =>{
            return data.json()
        })
        .then((data,index)=>{
            console.log(data)
            setuser(data)
        })
    }

  return (
    <div>
        <table className="table table-hover table-success table-striped">
                <thead>
                    <tr>
                        <th scope='col' className='text-uppercase'>ID</th>
                        <th scope="col" className='text-uppercase'>Name</th>
                        <th scope="col" className='text-uppercase'>email</th>
                        <th scope="col" className='text-uppercase'>comments</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Fetchuse