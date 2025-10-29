import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axiosproduct() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fetchproduct()
    },[])

    const fetchproduct =async()=>{
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products)
        setuser(res.data.products)
    }

  return (
    <div>
        <table className="table table-hover table-success table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col" className='text-uppercase'>product-name</th>
                        <th scope="col" className='text-uppercase'>image</th>
                        <th scope="col" className='text-uppercase'>availabilityStatus</th>
                        <th scope="col" className='text-uppercase'>discountPercentage</th>
                        <th scope="col" className='text-uppercase'>price</th>
                        <th scope="col" className='text-uppercase'>returnPolicy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data,index)=>{
                            return(
                                <tr>
                                    <td>{data.brand +" "+ data.tags[1]}</td>
                                    <td><img style={{height:"60px", width:"80px"}} src={data.images} alt="" /></td>
                                    <td>{data.availabilityStatus +" "+ data.stock}</td>
                                    <td>{data.discountPercentage}%</td>
                                    <td>{data.price}Rs</td>
                                    <td>{data.returnPolicy}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Axiosproduct