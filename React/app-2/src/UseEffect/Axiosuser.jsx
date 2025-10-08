import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axiosuser() {

  const [user,setuser] = useState([])

  useEffect(()=>{
    fetchuser()
  },[])

  const fetchuser = async()=>{
    const res = await axios.get("https://dummyjson.com/users")
    setuser(res.data.users)
  }

  return (
    <div>
      <table className="table table-hover table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col" className='text-uppercase'>fullname</th>
                        <th scope="col" className='text-uppercase'>age</th>
                        <th scope="col" className='text-uppercase'>gender</th>
                        <th scope="col" className='text-uppercase'>email</th>
                        <th scope="col" className='text-uppercase'>phone</th>
                        <th scope="col" className='text-uppercase'>hair</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      user && user.map((data,index)=>{
                        return(
                          <tr key={index}>
                            <td>{data.firstName +" "+ data.maidenName +" "+ data.lastName}</td>
                            <td>{data.age}</td>
                            <td>{data.gender}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.hair.color +" "+ data.hair.type}</td>
                          </tr>
                        )
                      })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Axiosuser