import React, { useEffect, useState } from 'react'

function Fetchdata() {

    const [user,setuser] = useState([])

    useEffect(() =>{
        fetchdata()
    },[])

    const fetchdata = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users",{
            method : "GET"
        })
        .then((data)=>{
            return data.json()
        })
        .then((data) =>{
            console.log(data)
            setuser(data)
        })
    }

  return (
    <div>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className='text-uppercase'>id</th>
                        <th scope="col" className='text-uppercase'>name</th>
                        <th scope="col" className='text-uppercase'>Email</th>
                        <th scope="col" className='text-uppercase'>city</th>
                        <th scope="col" className='text-uppercase'>company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index) =>{
                            console.log(data)

                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address.city}</td>
                                    <td>{data.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Fetchdata