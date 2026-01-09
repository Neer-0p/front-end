import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { proadd } from '../slice/Productslice'

function Productadd() {

    const [add, setadd] = useState({
        id: "",
        name: "",
        pdetails: "",
        price: ""
    })

    const change = (e) => {
        setadd({
            ...add,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const redirect = useNavigate()
    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()
        dispatch(proadd(add))
        redirect("/product")
        setadd({
            id: "",
            name: "",
            pdetails: "",
            price: ""
        })
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto mt-3">
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input onChange={change} value={add.name} name='name' type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Product details</label>
                                <input onChange={change} value={add.pdetails} name='pdetails' type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input onChange={change} value={add.price} name='price' type="text" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productadd