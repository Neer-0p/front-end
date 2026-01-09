import React, { useEffect, useState } from 'react'

function Fetchdata2() {

    const [user,setuser] = useState ([])

    useEffect (() =>{
        fetchdata()
    },[])

    const fetchdata = ()=>{
        fetch("https://dummyjson.com/products",{
            method : "GET"
        })
        .then((data) =>{
            return data.json()
        })
        .then((data,index) =>{
            console.log(data.products)
            setuser(data.products)
        })
    }

  return (
    <div>
        <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col" className='text-uppercase'>id</th>
                        <th scope="col" className='text-uppercase'>title</th>
                        <th scope="col" className='text-uppercase'>discount</th>
                        <th scope="col" className='text-uppercase'>price</th>
                        <th scope="col" className='text-uppercase'>brand</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index) =>{
                            return (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.discountPercentage}%</td>
                                    <td>{data.price}</td>
                                    <td>{data.brand}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Fetchdata2