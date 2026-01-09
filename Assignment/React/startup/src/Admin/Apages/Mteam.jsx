import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import axios from 'axios'
import { Slide, toast } from 'react-toastify'

function Mteam() {

    const [team, setteam] = useState([])

    useEffect(() => {
        fetchteam()
    }, [])

    const fetchteam = async () => {
        const res = await axios.get("http://localhost:3000/staff")
        setteam(res.data)
    }

    // DELETE
    const del = async (id) => {
        const res = await axios.delete(`http://localhost:3000/staff/${id}`)
        toast.error(`Successfully deleted...`)
        fetchteam()
    }

    // view
    const [view, setview] = useState({
        id: "",
        name: "",
        position: "",
        department: "",
        img: ""
    })

    const show = async(id)=>{
        const res = await axios.get(`http://localhost:3000/staff/${id}`)
        toast.error(`Opened...`)
        fetchteam()
        setview(res.data)
    }

    // update
    const [modal,setmodal] = useState(null)
    const [edit,setedit] = useState({
        id: "",
        name: "",
        position: "",
        department: "",
        img: ""
    })

    const open = (data)=>{
        setmodal(data)
        setedit(data)
    }

    const change = (e)=>{
        setedit({
            ...edit,
            [e.target.name] : e.target.value
        })
    }

    const Add =async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/staff/${edit.id}`,edit)
            toast.error(`Successfully updated...`)
            fetchteam()
            setmodal(null)
        } catch (error) {
            console.log("API not founded..",error)
            toast.error("Api data not Found" ,{transition:Slide})
        }
    }

    return (
        <div>
            <Aheader title="Staff Details" data="Employee" />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Position</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        team && team.map((data, index) => {
                            const { id, name, department, position } = data
                            return (
                                <tr>
                                    <th>{id}</th>
                                    <th>{name}</th>
                                    <th>{department}</th>
                                    <th>{position}</th>
                                    <th>
                                        <button className='btn btn-outline-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{show(data.id)}}>View</button>
                                        <button className='btn btn-outline-success mx-2' onClick={()=>{open(data)}}>Update</button>
                                        <button className='btn btn-outline-danger' onClick={()=>{del(data.id)}}>Delete</button>
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Staff Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                                <div className="team-item bg-light rounded overflow-hidden">
                                    <div className="team-img position-relative overflow-hidden">
                                        <img className="img-fluid" src={view.img} alt />
                                        <div className="team-social">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <h4 className="text-primary">{view.name}</h4>
                                        <p className="text-uppercase m-0">{view.position}</p>
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

            {/* modal team */}
            {
                modal && (
                    <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                        <form>
                            <legend>Update Member</legend>
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <input type="text" onChange={change} name='name' value={edit.name} className="form-control border-0 bg-light px-4" placeholder="Name" style={{ height: 55 }} />
                                </div>
                                <div className="col-md-4">
                                    <input type="text" onChange={change} name='department' value={edit.department} className="form-control border-0 bg-light px-4" placeholder="Department" style={{ height: 55 }} />
                                </div>
                                <div className="col-4">
                                    <input type="text" onChange={change} name='position' value={edit.position} className="form-control border-0 bg-light px-4" placeholder="Position" style={{ height: 55 }} />
                                </div>
                                <div className="col-12">
                                    <input name='img' onChange={change} value={edit.img} className="form-control border-0 bg-light px-4 py-3" type='url' placeholder="Image" />
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-primary w-100 py-3" onClick={Add} type="submit">Update Member</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-primary w-100 py-3" onClick={()=>{setmodal(null)}} type="submit">Cancel</button>
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

export default Mteam