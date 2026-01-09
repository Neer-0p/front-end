import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axioscart() {

    const [user,setuser] = useState([])

    useEffect (()=>{
        fetchcart()
    },[])

    const fetchcart =async()=>{
        const res = await axios.get("https://dummyjson.com/carts")
        console.log(res.data.carts)
        setuser(res.data.carts)
    }

  return (
    <div>
        <table className="table table-hover table-dark table-striped text-center">
                <thead>
                    <h2 className='text-center text-dark text-decoration-underline my-3'>Cart Details</h2>

                    <tr>
                        <th scope="col" className='text-uppercase'>product</th>
                        <th scope="col" className='text-uppercase'>totalProducts</th>
                        <th scope="col" className='text-uppercase'>totalQuantity</th>
                        <th scope="col" className='text-uppercase'>discountedTotal</th>
                        <th scope="col" className='text-uppercase'>total</th>
                        <th scope="col" className='text-uppercase'>userId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        {
                                            data.products.map((p, index)=>{
                                                const space = " "
                                                const a = "("
                                                const b = ")"
                                                return(
                                                    <div key={index}>{p.title+ space +p.price+"Rs"+ space +a+p.quantity+b}</div>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>{data.totalProducts}</td>
                                    <td>{data.totalQuantity}</td>
                                    <td>{data.discountedTotal}Rs</td>
                                    <td>{data.total} Rs</td>
                                    <td>ID:-{data.userId}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Axioscart