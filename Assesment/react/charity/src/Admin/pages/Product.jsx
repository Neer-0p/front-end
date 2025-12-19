import React, { useEffect } from 'react'
import Header1 from '../common/Header1'
import { useDispatch, useSelector } from 'react-redux'
import { deletepro, readdata } from '../../slice/Productslice'
import { redirect, useNavigate } from 'react-router-dom'

function Product() {

    const { products, loading } = useSelector((data) => data.product)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(readdata())
    }, [])

    const redirect = useNavigate()

    return (
        <div>
            <Header1 />
            {/* card */}
            <div className="container">
                <div className="row g-2">
                {
                    products && products.map((data, index) => {
                        return (
                            <div className="col-4">
                                <div className="card" key={index} style={{ width: '18rem' }}>
                                    <img height="100%" width="100%" src={data.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">{data.description}</p>
                                        <h5 className="card-title">{data.price}</h5>
                                        <div>
                                            <button className='btn btn-info'>view</button>
                                            <button onClick={()=>{redirect("/update")}} className='btn btn-success mx-2'>edit</button>
                                            <button className='btn btn-danger' onClick={()=>{dispatch(deletepro(data.id))}}>delete</button>
                                        </div>
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

export default Product