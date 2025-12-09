import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletepro, prodata } from '../slice/Productslice'

function Product() {

    const { products, loading } = useSelector((data) => data.product)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(prodata())
    }, [])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Details</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.pdetails}</td>
                                    <td>{data.price}</td>
                                    <td>
                                        <button className="btn btn-info">view</button>
                                        <button className="btn btn-success mx-2">edit</button>
                                        <button className="btn btn-danger" onClick={() => { dispatch(deletepro(data.id)).then(() => { dispatch(prodata()) }) }}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Product