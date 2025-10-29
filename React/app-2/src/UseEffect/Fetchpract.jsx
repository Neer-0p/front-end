import React, { useEffect, useState } from 'react'

function Fetchpract() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fetchcart()
    },[])

    const fetchcart = ()=>{
        fetch("https://dummyjson.com/carts",{
            method : "GET"
        })
        .then((data)=>{
            return data.json()
        })
        .then((data,index)=>{
            console.log(data.carts)
            setuser(data.carts)
        })
    }

  return (
    <div className='bg-success'>
            <div className="container">
                <div className="row">
                    {
                      user && user.map((data,index)=>{
                        const {discountedTotal,id,products,total,totalProducts,totalQuantity} = data
                        const space =" "
                        return(
                            <div key={index} className="col-md-4 mb-3">
                                    <div className="card bg-dark text-white h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">USER-ID:-{id}</h5>
                                        <ul className='list-group'>
                                            <h1>Product details :-</h1>
                                            {
                                                products.map((p,index)=>{
                                                    const {title,total,quantity} = p
                                                    return(
                                                        <li key={index} className='list-group-item'>
                                                            {title + space + total}Rs
                                                            <span className='ms-3 badge text-bg-primary rounded-pill'>{quantity}</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        <h5 className="card-title">Total Products:- {totalProducts}</h5>
                                        <h5 className="card-title">Total Quantity:- {totalQuantity}</h5>
                                        <h5 className="card-title">Total Discount:- {discountedTotal}Rs</h5>
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

export default Fetchpract