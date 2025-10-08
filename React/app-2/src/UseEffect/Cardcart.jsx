import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cardcart() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchcart()
    }, [])

    const fetchcart = async () => {
        const res = await axios.get("https://dummyjson.com/carts")
        console.log(res.data.carts)
        setuser(res.data.carts)
    }

    return (
        <div className='bg-success'>
            <div className="container">
                <div className="row">
                    {
                        user && user.map((data, index) => {
                            const { userId, products, total, totalProducts, totalQuantity } = data
                            return (
                                <div className="col-md-4 mb-3">
                                    <div key={index} className="card bg-dark text-white h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">USER-ID:-{userId}</h5>
                                        <ul className='list-group'>
                                            <h5>Product details:-</h5>
                                            {
                                                products.map((p, index)=>{
                                                    const {title,price,quantity} = p
                                                    const space = " "
                                                    return(
                                                        <li className='list-group-item' key={index}>{title + space + price}Rs
                                                            <span class="ms-3 badge text-bg-primary rounded-pill">{quantity}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <h5 className="card-title">Total Products:- {totalProducts}</h5>
                                        <h5 className="card-title">Total Quantity:- {totalQuantity}</h5>
                                        <h5 className="card-title">Total Amount:- {total}Rs</h5>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Cardcart





