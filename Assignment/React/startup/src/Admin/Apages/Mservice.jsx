import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import { Slide, toast } from 'react-toastify'

function Mservice() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchservice()
    }, [])

    const fetchservice = async () => {
        const res = await axios.get("http://localhost:3000/service")
        setservice(res.data)
    }

    // delete
    const del = async (id) => {
        const res = await axios.delete(`http://localhost:3000/service/${id}`)
        toast.error(`Successfully deleted...`)
        fetchservice()
    }

    // view
    const [view, setview] = useState({
        id: "",
        img: "",
        department: "",
        description: ""
    })

    const show = async (id) => {
        const res = await axios.get(`http://localhost:3000/service/${id}`)
        toast.error(`Opened...`)
        fetchservice()
        setview(res.data)
    }

    // update
    const [modal, setmodal] = useState(null)
    const [edit, setedit] = useState({
        id: "",
        img: "",
        department: "",
        description: ""
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
            const res = await axios.put(`http://localhost:3000/service/${edit.id}`,edit)
            toast.error(`Successfully updated...`)
            fetchservice()
            setmodal(null)
        } catch (error) {
            console.log("Api not founded..",error)
            toast.error("Api data not Found" ,{transition:Slide})
        }
    }

    return (
        <div>
            <Aheader title="Service Management" data="Service" />
            <table className="table text-center table-dark">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Department</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        service && service.map((data, index) => {
                            const { id, department, img, description } = data
                            return (
                                <tr>
                                    <th>{id}</th>
                                    <th>{department}</th>
                                    <th><img height="100px" width="100px" src={img} alt="" /></th>
                                    <th>{description}</th>
                                    <th>
                                        <button className='btn btn-outline-info' onClick={() => { show(data.id) }} data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                        <button className='btn btn-outline-success mx-2' onClick={() => { open(data) }}>Update</button>
                                        <button className='btn btn-outline-danger' onClick={() => { del(data.id) }}>Delete</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            {/* modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Service</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="mb-3">
                                        <img height="100px" width="100px" src={view.img} alt="" />
                                    </div>
                                    <h4 className="mb-3">{view.department}</h4>
                                    <p className="m-0">{view.description}</p>
                                    <a className="btn btn-lg btn-primary rounded" href>
                                        <i className="bi bi-arrow-right" />
                                    </a>
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
                                    <legend>Update Service</legend>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input name='department' onChange={change} value={edit.department} type="text" className="form-control border-0 bg-light px-4" placeholder="Department" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-md-6">
                                            <input name='description' onChange={change} value={edit.description} type="text" className="form-control border-0 bg-light px-4" placeholder="Description" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12">
                                            <input name='img' onChange={change} value={edit.img} className="form-control border-0 bg-light px-4 py-3" type='url' placeholder="Image" />
                                        </div>
                                       <div className="row m-2">
                                         <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={Add}>Update Service</button>
                                        </div>
                                        <div className="col-6">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={()=>{setmodal(null)}}>Cancel</button>
                                        </div>
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

export default Mservice