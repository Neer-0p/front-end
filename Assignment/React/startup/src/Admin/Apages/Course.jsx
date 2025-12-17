
import Aheader from '../Acommon/Aheader'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Slide, toast } from 'react-toastify'

function Course() {

    const [course, setcourse] = useState([])

    useEffect(() => {
        fetchcourse()
    }, [])

    const fetchcourse = async () => {
        const res = await axios.get("http://localhost:3000/courses")
        console.log(res.data)
        setcourse(res.data)
    }

    // del
    const del = async (id) => {
        const res = await axios.delete(`http://localhost:3000/courses/${id}`)
        fetchcourse()
        toast.error(`Course deleted.. `, {transition : Slide})
    }

    // view
    const [view, setview] = useState({
        id: "",
        cname: "",
        img: "",
        date: "",
        desc: "",
        author: "",
        title: ""
    })

    const show = async (id) => {
        const res = await axios.get(`http://localhost:3000/courses/${id}`)
        toast.success(`Opened..`)
        fetchcourse()
        setview(res.data)
    }

    // update
    const [modal, setmodal] = useState(null)
    const [edit, setedit] = useState({
        id: "",
        cname: "",
        img: "",
        date: "",
        desc: "",
        author: "",
        title: ""
    })

    // modal open
    const getdata = (data)=>{
        setmodal(data)
        setedit(data)
    }

    const change = (e)=>{
        setedit({
            ...edit,
            [e.target.name] : e.target.value
        })
    }

    const Add = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/courses/${edit.id}`,edit)
            toast.success("Course Updated..")
            fetchcourse()
            setmodal(null)
            
        } catch (error) {
            console.log("Api error",error)
            toast.error("Api data not Found" ,{transition:Slide})
        }
    }


    return (
        <div>
            <div>
                <Aheader title="Course Management" data="Course" />
                <table className="table table-dark">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">Course name</th>
                            <th scope="col">Author</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            course && course.map((data, index) => {
                                return (
                                    <tr key={index} className='text-center'>
                                        <th>{data.id}</th>
                                        <th>{data.cname}</th>
                                        <th>{data.author}</th>
                                        <th>{data.date}</th>
                                        <th>
                                            <button className='btn btn-outline-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { show(data.id) }}>View</button>
                                            <button className='btn btn-outline-success mx-2' onClick={()=>{getdata(data)}}>Update</button>
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
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="col-md-10 mx-auto wow slideInUp" data-wow-delay="0.1s">
                                    <div className="blog-item bg-light rounded overflow-hidden">
                                        <div className="blog-img position-relative overflow-hidden">
                                            <img className="img-fluid" src={view.img} alt />
                                            <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>{view.cname}</a>
                                        </div>
                                        <div className="p-4">
                                            <div className="d-flex mb-3">
                                                <small className="me-3"><i className="far fa-user text-primary me-2" />{view.author}</small>
                                                <small><i className="far fa-calendar-alt text-primary me-2" />{view.date}</small>
                                            </div>
                                            <h4 className="mb-3">{view.title}</h4>
                                            <p>{view.desc}</p>
                                            <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
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

                {
                    modal && (
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                                    <form>
                                        <legend>Update Course</legend>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input type="text" value={edit.cname} onChange={change} name='cname' className="form-control border-0 bg-light px-4" placeholder="Course Name" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" value={edit.author} onChange={change} name='author' className="form-control border-0 bg-light px-4" placeholder="Author Name" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-6">
                                                <input type="text" value={edit.title} onChange={change} name='title' className="form-control border-0 bg-light px-4" placeholder="Title" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-6">
                                                <input type="date" value={edit.date} onChange={change} name='date' className="form-control border-0 bg-light px-4" placeholder="Date" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-12">
                                                <input value={edit.img} onChange={change} className="form-control border-0 bg-light px-4 py-3" name='img' type='url' placeholder="Course Img" />
                                            </div>
                                            <div className="col-12">
                                                <textarea value={edit.desc} onChange={change} className="form-control border-0 bg-light px-4 py-3" name='desc' rows={4} placeholder="Course Description" defaultValue={""} />
                                            </div>
                                            <div className="row m-2">
                                                <div className="col-6">
                                                    <button className="btn btn-primary w-100 py-3" onClick={Add} type="submit">Update Course</button>
                                                </div>
                                                <div className="col-6">
                                                    <button className="btn btn-primary w-100 py-3" onClick={()=>{setmodal(null)}} type="submit">Cancel Course</button>
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
        </div>
    )
}

export default Course