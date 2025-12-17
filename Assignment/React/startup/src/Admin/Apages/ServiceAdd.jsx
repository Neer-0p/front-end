import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ServiceAdd() {
    
    const redirect = useNavigate()

    const [service, setservice] = useState({
        id: "",
        img: "",
        department: "",
        description: ""
    })

    const change = (e) => {
        setservice({
            ...service,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const Add = async (e) => {
        e.preventDefault()
        redirect("/mservice")

        try {
            const res = await axios.post("http://localhost:3000/service", service)
            setservice({
                id: "",
                img: "",
                department: "",
                description: ""
            })

        } catch (error) {
            console.log("API error not found")
        }
    }

    return (
        <div>
            <Aheader title="ADD SERVICE" data="Add service" />
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                        <form onSubmit={Add}>
                            <legend>Add Service</legend>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input name='department' onChange={change} value={service.department} type="text" className="form-control border-0 bg-light px-4" placeholder="Department" style={{ height: 55 }} />
                                </div>
                                <div className="col-md-6">
                                    <input name='description' onChange={change} value={service.description} type="text" className="form-control border-0 bg-light px-4" placeholder="Description" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <input name='img' onChange={change} value={service.img} className="form-control border-0 bg-light px-4 py-3" type='url' placeholder="Image" />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Add Service</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceAdd