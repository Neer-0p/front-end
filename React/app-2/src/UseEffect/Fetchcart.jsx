import React, { useEffect, useState } from 'react'

function Fetchcart() {

    const [user,setuser] = useState([])

    useEffect(() =>{
        fetchcart()
    },[])

    const fetchcart = ()=>{
        fetch("https://dummyjson.com/carts",{
            method : "GET"
        })
        .then((data) =>{
            return data.json()
        })
        .then((data,index) =>{
            console.log(data.carts)
            setuser(data.carts)
        })
    }

  return (
    <div>
        <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col" className='text-uppercase'>customer-code</th>
                        <th scope="col" className='text-uppercase'>total-products</th>
                        <th scope="col" className='text-uppercase'>total-quantity</th>
                        <th scope="col" className='text-uppercase'>discount</th>
                        <th scope="col" className='text-uppercase'>price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index) =>{
                            return(
                                <tr key={index}>
                                    <td>{data.userId}</td>
                                    <td>{data.totalProducts}</td>
                                    <td>{data.totalQuantity}</td>
                                    <td>{data.discountedTotal} Rs</td>
                                    <td>{data.total} Rs</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Fetchcart