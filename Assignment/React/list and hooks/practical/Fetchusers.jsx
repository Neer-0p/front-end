import React, { useEffect, useState } from 'react'

function Fetchusers() {

    const [user,setuser] = useState([])

    useEffect (()=>{
        fetchusers()
    },[])

    const fetchusers = ()=>{
        fetch("https://dummyjson.com/users",{
            method : "GET"
        })
        .then((data) =>{
            return data.json()
        })
        .then((data,index) =>{
            console.log(data.users)
            setuser(data.users)
        })
    }

  return (
    <div>
        <table className="table table-hover table-success table-striped">
                <thead>
                    <tr>
                        <th scope='col' className='text-uppercase'>image</th>
                        <th scope="col" className='text-uppercase'>fullname</th>
                        <th scope="col" className='text-uppercase'>age</th>
                        <th scope="col" className='text-uppercase'>gender</th>
                        <th scope="col" className='text-uppercase'>email</th>
                        <th scope="col" className='text-uppercase'>phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    <td><img src={data.image} alt='' style={{height : "20px", width : "20px"}}/></td>
                                    <td>{data.firstName +" "+ data.maidenName +" "+ data.lastName}</td>
                                    <td>{data.age}</td>
                                    <td>{data.gender}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Fetchusers