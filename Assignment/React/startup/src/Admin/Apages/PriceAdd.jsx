import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function PriceAdd() {

    const redirect = useNavigate()

    const [price, setprice] = useState({
        id: "",
        Plan: "",
        price: "",
        includes: ""
    })

    const change = async (e) => {
        setprice({
            ...price,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const plus = async (e) => {
            e.preventDefault()
            redirect("/mprice")
            try {
                const res = await axios.post("http://localhost:3000/price", price)
                setprice({
                    id: "",
                    Plan: "",
                    price: "",
                    includes: ""
                })

            } catch (error) {
                console.log("API data not found")
            }
        }

    return (
        <div>
            <Aheader title="Price Add" data="Price Add" />
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                        <form onSubmit={plus}>
                            <legend>Add Plan</legend>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" name='Plan' value={price.Plan} onChange={change} className="form-control border-0 bg-light px-4" placeholder="Plan"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name='price' value={price.price} onChange={change} className="form-control border-0 bg-light px-4" placeholder="Price"/>
                                </div>
                                <div className="col-12">
                                    <input name='includes' value={price.includes} onChange={change} className="form-control border-0 bg-light px-4 py-3" type='text' placeholder="Includes" />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Add Price Plan</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceAdd