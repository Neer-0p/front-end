import React, { useEffect, useState } from 'react'

function Fetchcompany() {

    const [user,setuser] = useState([])

    useEffect((data)=>{
        fetchcompany()
    },[])

    const fetchcompany = ()=>{
        fetch("https://fake-json-api.mock.beeceptor.com/companies",{
            method : "GET"
        })
        .then((data)=>{
            return data.json()
        })
        .then((data,index)=>{
            console.log(data)
            setuser(data)
            
        })
    }

  return (
    <div>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className='text-uppercase'>logo</th>
                        <th scope="col" className='text-uppercase'>name</th>
                        <th scope="col" className='text-uppercase'>country</th>
                        <th scope="col" className='text-uppercase'>domain</th>
                        <th scope="col" className='text-uppercase'>ceo-name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index)=>{
                            return (
                                <tr key={index}>
                                    <td><img src={data.logo} style={{height :"20px", width:"20px"}} alt="" /></td>
                                    <td>{data.name}</td>
                                    <td>{data.country}</td>
                                    <td>{data.domain}</td>
                                    <td>{data.ceoName}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Fetchcompany