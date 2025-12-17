import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import { Slide, toast } from 'react-toastify'

function Mprice() {

    const [price, setprice] = useState([])

    useEffect(() => {
        fetchprice()
    }, [])

    const fetchprice = async () => {
        const res = await axios.get("http://localhost:3000/price")
        setprice(res.data)
    }

    // delete
    const del = async (id) => {
        const res = await axios.delete(`http://localhost:3000/price/${id}`)
        toast.error(`Successfully deleted...`)
        fetchprice()
    }

    // view
    const [view, setview] = useState({
        id: "",
        Plan: "",
        price: "",
        includes: ""
    })

    const show = async (id) => {
        const res = await axios.get(`http://localhost:3000/price/${id}`)
        toast.success(`Opened..`)
        fetchprice()
        setview(res.data)
    }

    // update
    const [modal, setmodal] = useState(null)
    const [edit, setedit] = useState({
        id: "",
        Plan: "",
        price: "",
        includes: ""
    })

    const open = (data) => {
        setmodal(data)
        setedit(data)
    }

    const change =(e)=>{
        setedit({
            ...edit,
            [e.target.name] : e.target.value
        })
    }

    const Add =async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/price/${edit.id}`,edit)
            toast.success(`Updated successfully`)
            fetchprice()
            setmodal(null)
        } catch (error) {
            console.log("Api not founded..",error)
            toast.error("Api data not Found" ,{transition:Slide})
        }
    }

    return (
        <div>
            <Aheader title="Plan Management" data="Plan" />
            <table className="table table-dark text-center">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Includes</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        price && price.map((data, index) => {
                            const { id, Plan, price, includes } = data
                            return (
                                <tr key={index}>
                                    <th>{id}</th>
                                    <th>{Plan}</th>
                                    <th>{includes}</th>
                                    <th>{price + "$/month"}</th>
                                    <th>
                                        <button className='btn btn-outline-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { show(data.id) }}>View</button>
                                        <button className='btn btn-outline-success mx-2' onClick={() => { open(data) }}>Update</button>
                                        <button className='btn btn-outline-danger' onClick={() => { del(data.id) }}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {/* MODAL */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Price Plan</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="col-lg-10 mx-auto wow slideInUp" data-wow-delay="0.6s">
                                <div className="bg-light rounded">
                                    <div className="border-bottom py-4 px-5 mb-4">
                                        <h4 className="text-primary mb-1">{view.Plan}</h4>
                                        <small className="text-uppercase">For Small Size Business</small>
                                    </div>
                                    <div className="p-5 pt-0">
                                        <h1 className="display-5 mb-3">
                                            <small className="align-top" style={{ fontSize: 26 }}>{view.price}</small>
                                        </h1>
                                        <div className="d-flex justify-content-between mb-3"><span style={{ fontSize: 20 }}>{view.includes}</span><i className="fa fa-check text-primary pt-1" /></div>
                                        <a href className="btn btn-primary py-2 px-4 mt-4">Order Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* update modal */}
            {
                modal && (
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                                <form>
                                    <legend>Update Plan</legend>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" onChange={change} value={edit.Plan} name='Plan' className="form-control border-0 bg-light px-4" placeholder="Plan" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" onChange={change} value={edit.price} name='price' className="form-control border-0 bg-light px-4" placeholder="Price"/>
                                        </div>
                                        <div className="col-12">
                                            <input name='includes' onChange={change} value={edit.includes} className="form-control border-0 bg-light px-4 py-3" type='text' placeholder="Includes" />
                                        </div>
                                        <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" onClick={Add} type="submit">Update Price Plan</button>
                                        </div>
                                        <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Mprice